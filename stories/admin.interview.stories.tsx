import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@lipihipi/theme';
import EduCrackAPI from '@lipihipi/client-sdk';
// import {action} from "@storybook/addon-actions";

import {
	ManageInterviewsList,
	CreateInterviews
} from '../src/index';

EduCrackAPI.setENV('Development');

export const ManageInterviewList = () => {
	const [user, setUser] = React.useState();
	const [isLoggedIn, setIsLogged] = React.useState(false);

	React.useEffect(() => {
		EduCrackAPI.auth
			.login({ email: 'admin@educrack.com', password: 'password' })
			.then(({ status }) => {
				if (status === 200) {
					EduCrackAPI.user.me().then((res: any) => {
						setUser(res.data);
						setIsLogged(true);
					});
				}
			});
	}, []);

	return (
		<BrowserRouter>{isLoggedIn &&
			<ManageInterviewsList
				user={user}
				statusUpdate={EduCrackAPI.interview.statusUpdate}
				getInterviews={EduCrackAPI.interview.list}
				getCourses={EduCrackAPI.course.list}
				// onAdd={action("onAdd")}
				// onEdit={action("onEdit")}
				onAdd={() => {
					console.log("testId--- on add click");
					// history.push(`/admin/manage-interviews/create`);
				}}
				onEdit={(interviewId: string) => {
					console.log("testId---", interviewId);
					// history.push(`/admin/manage-interviews/edit/${interviewId}`);
				}}
			/>
		}</BrowserRouter>
	);
};
export const CreateInterview = () => {
	const [isLoggedIn, setIsLogged] = React.useState(false);

	React.useEffect(() => {
		EduCrackAPI.auth
			.loginNew({ mobile: '9876543216', password: 'password' })
			.then(({ status }) => {
				if (status === 200) {
					setIsLogged(true);
				}
			});
	}, []);

	return (
		<BrowserRouter>
			{isLoggedIn ? (
				<CreateInterviews
					title={'Add Interview'}
					breadCrumbs={[
						{ title: 'Home', link: '/dashboard' },
						{ title: 'Interviews', link: '/admin/manage-interviews' },
						{ title: 'Add interview', }
					]}
					createAsset={EduCrackAPI.asset.create}
					getAssetUrl={EduCrackAPI.asset.getAssetUrl}
					getInterview={EduCrackAPI.interview.get}
					updateInterview={EduCrackAPI.interview.update}
					createInterview={EduCrackAPI.interview.create}
					getCourses={EduCrackAPI.course.list}
					onAddEditSuccess={() => {
						console.log("testId--- on add / edit Success");
						// history.push(`/admin/manage-interviews`);
					}}
					id={''}
				/>
			) : (
				<h4 className="text-center">Please Login First</h4>
			)}
		</BrowserRouter>
	);
};

export const EditInterview = () => {
	const [isLoggedIn, setIsLogged] = React.useState(false);

	React.useEffect(() => {
		EduCrackAPI.auth
			.loginNew({ mobile: '9876543216', password: 'password' })
			.then(({ status }) => {
				if (status === 200) {
					setIsLogged(true);
				}
			});
	}, []);

	return (
		<BrowserRouter>
			{isLoggedIn ? (
				<CreateInterviews
					title={'Edit Interview'}
					breadCrumbs={[
						{ title: 'Home', link: '/dashboard' },
						{ title: 'Interviews', link: '/admin/manage-interviews' },
						{ title: 'Edd Interview', }
					]}
					getAssetUrl={EduCrackAPI.asset.getAssetUrl}
					createAsset={EduCrackAPI.asset.create}
					deleteFile={EduCrackAPI.asset.remove}
					getInterview={EduCrackAPI.interview.get}
					updateInterview={EduCrackAPI.interview.update}
					createInterview={EduCrackAPI.interview.create}
					getCourses={EduCrackAPI.course.list}
					onAddEditSuccess={() => {
						console.log("testId--- on add / edit Success");
						// history.push(`/admin/manage-interviews`);
					}}
					id={'6050b5f99e7a9e3c57b4b9e4'}
				/>
			) : (
				<h4 className="text-center">Please Login First</h4>
			)}
		</BrowserRouter>
	);
};


export default {
	title: 'Admin Interview section',
};
