import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@lipihipi/theme';
import EduCrackAPI from '@lipihipi/client-sdk';
// import {action} from "@storybook/addon-actions";
import Payment from './payment/cashFree';
// import './style.css';

import {
	ManageResumesList,
	StudentInterviewList,
	StudentInterviewDetails,
	InterviewAttempts
} from '../src/index';

EduCrackAPI.setENV('Development');

const selectedCourse = {
	addedBy: "6015807d8b17e9369dd27ccd",
	courseId: "CA01",
	createdAt: "2021-01-30T15:51:25.752Z",
	displayPicture: "asset-1613738432586.png",
	name: "MBA Entrance",
	nameIdx: "mba",
	subject: [],
	updatedAt: "2021-02-19T16:14:27.511Z",
	_id: "603d30bdc194fe0215fe311b"
};

export const InterviewList = () => {
	const [isLoggedIn, setIsLogged] = React.useState(false);

	React.useEffect(() => {
		EduCrackAPI.auth
			.login({ mobile: '9876543215', password: 'password' })
			.then(({ status }) => {
				if (status === 200) {
					setIsLogged(true);
				}
			});
	}, []);

	return (
		<BrowserRouter>
			{isLoggedIn ? (
				<>
					<StudentInterviewList
						getInterviews={EduCrackAPI.interview.list}
						getAssetUrl={EduCrackAPI.asset.getAssetUrl}
						getSubscribedInterviews={EduCrackAPI.userInterview.list}
						selectedCourse={selectedCourse}
						onInterviewClick={(interviewId: string) => {
							console.log("interviewId for details---", interviewId);
							// history.push(`/interviews/details/${interviewId}`);
						}}
						onInterviewAttemptClick={(interviewId: string) => {
							console.log("interview Id for attempt---", interviewId);
							// history.push(`/interviews/${interviewId}`);
						}}
						assetsBaseUrl={'https://dev.educrack.com/static-assets/asset/'}
					/>
				</>
			) : (
				<h4 className="text-center">Please Login First</h4>
			)}
		</BrowserRouter>
	);
};

export const InterviewDetails = () => {
	const [isLoggedIn, setIsLogged] = React.useState(false);

	React.useEffect(() => {
		EduCrackAPI.auth
			.login({ mobile: '9876543215', password: 'password' })
			.then(({ status }) => {
				if (status === 200) {
					setIsLogged(true);
				}
			});
	}, []);

	return (
		<BrowserRouter>
			{isLoggedIn ? (
				<>
					<StudentInterviewDetails
						getInterview={EduCrackAPI.interview.get}
						getAssetUrl={EduCrackAPI.asset.getAssetUrl}
						getOtherInterviews={EduCrackAPI.interview.list}
						onSubscribe={EduCrackAPI.userInterview.subscribeInterview}
						selectedCourse={selectedCourse}
						initCashFreePayment={Payment.initCashFreePayment}
						onInterviewClick={(interviewId: string) => {
							console.log("interviewId for details---", interviewId);
							// history.push(`/interviews/details/${interviewId}`);
						}}
						viewAllOptionsClick={() => {
							console.log("viewAllOptionsClick---");
							// history.push(`/interviews/details/${interviewId}`);
						}}
						assetsBaseUrl={EduCrackAPI.asset.getAssetUrl()}

						id={'606ae51a77dd2e1eb9b06a6a'}
					/>
				</>
			) : (
				<h4 className="text-center">Please Login First</h4>
			)}
		</BrowserRouter>
	);
};


export const InterviewAttemptsDetails = () => {
	const [isLoggedIn, setIsLogged] = React.useState(false);

	React.useEffect(() => {
		EduCrackAPI.auth
			.login({ mobile: '9876543215', password: 'password' })
			.then(({ status }) => {
				if (status === 200) {
					setIsLogged(true);
				}
			});
	}, []);

	return (
		<BrowserRouter>
			{isLoggedIn ? (
				<>
					<InterviewAttempts
						myResume={EduCrackAPI.resume.me}
						getInterview={EduCrackAPI.userInterview.get}
						onAttemptInterview={EduCrackAPI.userInterview.attend}
						getReport={EduCrackAPI.userInterview.getReport}
						getVideo={EduCrackAPI.userInterview.getVideo}
						getAssetUrl={EduCrackAPI.asset.getAssetUrl}
						afterAttemptSuccess={(attemptRes: any) => {
							console.log("interview after AttemptSuccess", attemptRes);
							// history.push(`/interviews/${interviewId}`);
						}}
						onResumeSubmitClick={() => {
							console.log("on Resume SubmitClick");
							// history.push(`/resume`);
						}}
						//id = {"605484c8155b7724dc354696"}   // DEV
						id={'6097deebc458885ea6f585b4'}   // UAT
					//id = {'6097deebc458885ea6f585b4'}  //prod
					/>
				</>
			) : (
				<h4 className="text-center">Please Login First</h4>
			)}
		</BrowserRouter>
	);
};

export const StudentInterviewHTML = () => {
	const [isLoggedIn, setIsLogged] = React.useState(false);

	React.useEffect(() => {
		EduCrackAPI.auth
			.login({ mobile: '9876543215', password: 'password' })
			.then(({ status }) => {
				if (status === 200) {
					setIsLogged(true);
				}
			});
	}, []);

	return (
		<BrowserRouter>
			{isLoggedIn ? (
				<>
					<ManageResumesList />
				</>
			) : (
				<h4 className="text-center">Please Login First</h4>
			)}
		</BrowserRouter>
	);
};


export default {
	title: 'Student Interview',
};
