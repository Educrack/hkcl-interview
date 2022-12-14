import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlinePlusCircle } from "react-icons/ai";
// import moment from 'moment';

import {
	PageHeader,
	PaginatedTable,
	ActionButton,
	Divider,
	List,
	ListItem,
	ListItemAction,
	Menu,
	IconButton
} from '@lipihipi/ec-ui'
import { Form, Select } from '@lipihipi/form';
import {
	IInterviewDocument,
	IInterviewListResponse,
} from '@lipihipi/client-sdk/dist/interview';
import { ICourseListResponse } from '@lipihipi/client-sdk/dist/course';

import { IInterviewListProps, IInterviewListParams } from './Interview.types'



const mapOptions = (values: any[]) => {
	return values.map(value => ({ label: value.name, value: value._id }));
};

export const getComponent = (onClick: any, name: string, flag: boolean) => {
	if (flag) {
		return (
			<IconButton onClick={onClick} className="primary-outine-button">
				<AiOutlinePlusCircle />
				{name}
			</IconButton>
		);
	}
	return null;
};

const Status = [
	{ label: 'Publish', value: 'PUBLISH' },
	{ label: 'UnPublish', value: 'UNPUBLISH' },
	{ label: '', value: '' },
];

export default function ManageInterviewsList({
	user,
	statusUpdate,
	getInterviews,
	getCourses,
	onAdd,
	onEdit,
	title,
	breadCrumbs,
	currentModulePermission
}: IInterviewListProps) {
	const itemsPerPage = 10;

	const [params, setParams] = React.useState<IInterviewListParams>({
		page: 1,
		populate: true
	});


	const handlePublish = (interviewId: string, status: boolean) => {
		statusUpdate(interviewId, { status: status ? 'PUBLISH' : 'INIT' })
			.then(() => {
				getData();
			})
			.catch(() => { console.log('Server Error') });
	}
	const handleSearch = (values: IInterviewListParams) => {
		setParams({
			page: 1,
			q: values.q,
			populate: true,
			course: values.course,
			status: values.status
		});
	};

	const [interviews, setInterviews] = React.useState<IInterviewListResponse>({
		totalItems: 0,
		interviews: [],
	});

	const [courses, setCourses] = React.useState<ICourseListResponse>({
		totalItems: 0,
		courses: [],
	});


	React.useEffect(() => {
		getCourses({ all: true })
			.then(response => {
				setCourses(response.data);
			})
			.catch(() => { });
	}, []);

	const getData = () => {
		getInterviews(params).then(response => {
			setInterviews(response.data);
		});
	};

	React.useEffect(getData, [params]);

	return (
		// Manage Interview Bundle
		<section className="main-structure">
			<PageHeader
				title={title || 'Manage AI Interview'}
				breadCrumbs={breadCrumbs || [
					{ title: 'Home', link: '/dashboard' },
					{ title: 'Manage AI Interview' },
				]}
				component={
					getComponent(
						onAdd,
						'Add an Interview',
						currentModulePermission?.includes('create')
					)
				}
			/>

			<Form
				initialValues={params}
				onSubmit={handleSearch}
				render={({ submitForm }: any) => (
					<div className="row">
						<div className="col-9">
							<div className="form-group">
								<input
									//  TODO Move insline style into scss,
									type="text"
									name="q"
									placeholder="Type query and press enter"
									className="primary-form-control"
									onKeyDown={(event: any) => {
										if (event.key === 'Enter') {
											handleSearch({ ...params, q: event.target.value.trim() });
										}
									}}
								/>
							</div>
						</div>
						<div className="col-3">
							<Select
								id="status"
								name="status"
								placeholder="Status"
								onChange={submitForm}
								options={Status}
							/>
						</div>
						<div className="col-3">
							<Select
								id="course"
								name="course"
								placeholder="Course"
								onChange={submitForm}
								options={[{ label: 'ALL', value: '' }, ...mapOptions(courses.courses)]}
							/>
						</div>
					</div>
				)}
			/>


			<PaginatedTable
				onPageChange={page => {
					setParams({ ...params, page: page });
				}}
				totalItems={interviews.totalItems}
				currentPage={params.page || 1}
				itemsPerPage={itemsPerPage}
				columns={[
					{
						dataRenderer: (data: IInterviewDocument) => (
							<div className="primary-text">
								{data.interviewId}
							</div>
						),
						title: 'Interview Id',
						width: '200px'
					}, {
						dataRenderer: (data: IInterviewDocument) => (
							<div className="primary-text">
								{data.name}
							</div>
						),
						isSortable: true,
						title: 'Name',
						width: 'calc(100% - (200px + 200px + 100px + 100px + 70px))'
					}, {
						dataRenderer: (data: any) => (
							<div className="primary-text">
								{data.status}
							</div>
						),
						title: 'Status',
						width: '100px'
					},
					{
						dataRenderer: (data: any) => (
							<div className="primary-text">
								{data.course?.name}
							</div>
						),
						title: 'Course',
						width: '100px'
					}, {
						dataRenderer: (data: IInterviewDocument) => (
							<div className="primary-text">
								{data.price}
							</div>
						),
						title: 'Price',
						width: '100px'
					}, {
						dataRenderer: (data: IInterviewDocument) => (
							<div className="primary-text">
								{data.noOfLinks}
							</div>
						),
						title: 'No of Links',
						width: '100px'
						// },{
						// 	dataRenderer: (data: IInterviewDocument) => <div style={{ color: "#b5b5b5", textAlign: "right", fontSize: "12px" }}>
						// 		{data.updatedAt? `Last updated at ${moment(data.updatedAt).format('lll')}` : ''}
						// 	</div>
						//  TODO Move insline style into scss
					}, {
						dataRenderer: (interview: IInterviewDocument) => <List>
							<ListItem className="action-button">
								<ListItemAction>
									<ActionButton>
										<BsThreeDotsVertical />
									</ActionButton>
									<Menu>
										{currentModulePermission?.includes('update') && (
											<li onClick={() => onEdit(interview._id)} >Edit</li>
										)}
										{(user?.role === "superadmin" || user?.role === "admin") && (
											
											<li onClick={() => handlePublish(interview._id, interview?.status === "PUBLISH"? false : true)} >{interview.status === "PUBLISH" ? 'UnPublish' : 'Publish'}</li>

										)}
									</Menu>
								</ListItemAction>
							</ListItem>
							<Divider />
						</List>,
						width: '70px',
					}
				]}
				data={interviews.interviews}
			/>
		</section>
	)
}
