import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@lipihipi/theme';
import EduCrackAPI from '@lipihipi/client-sdk';
// import {action} from "@storybook/addon-actions";
// import './style.css';

import { CreateResumes, ResumePreviews } from '../src/index';

EduCrackAPI.setENV('Development');

export const CreateResume = () => {
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
					<CreateResumes
						id={'5fa792bf371ed1543fbbb94a'}
						myResume={EduCrackAPI.resume.me}
						// getResume={EduCrackAPI.resume.get}
						updateResume={EduCrackAPI.resume.update}
						createResume={EduCrackAPI.resume.create}
						getResumePDF={EduCrackAPI.resume.getPDF}
						onPreview={() => {
							console.log('on Preview click');
						}}
						afterFinalSubmitSuccess={() => {
							console.log('on Preview click');
						}}
					/>
				</>
			) : (
				<h4 className="text-center">Please Login First</h4>
			)}
		</BrowserRouter>
	);
};

const resume = {
	"gender": "F",
	"passport": true,
	"languageKnown": [
		"english"
	],
	"draft": true,
	"_id": "5fa792bf371ed1543fbbb94a",
	"firstName": "Test",
	"lastName": "testing",
	"educations": [
		{
			"isStudying": false,
			"_id": "5fa7be0b371ed1543fbbb955",
			"schoolName": "Testing",
			"degree": "BD",
			"percentage": "23",
			"passedMonth": 34,
			"passedYear": 55
		}
	],
	"internships": [
		{
			"isWorking": false,
			"_id": "5fa7be63371ed1543fbbb95e",
			"companyName": "Test",
			"position": "test"
		},
		{
			"isWorking": false,
			"_id": "5fa7c288371ed1543fbbb96b",
			"companyName": "Testingq",
			"position": "testing",
			"startDate": "1, 2012",
			"endDate": "3, 2015"
		},
		{
			"isWorking": true,
			"_id": "5fa7cb01371ed1543fbbb97c",
			"companyName": "testing checked",
			"position": "test",
			"startDate": "12, 2011",
			"endDate": "undefined, undefined"
		}
	],
	"experiences": [
		{
			"isWorking": false,
			"_id": "5fa7a9cd371ed1543fbbb94b",
			"companyName": "Test",
			"position": "test"
		},
		{
			"isWorking": false,
			"_id": "5fa7c381371ed1543fbbb971",
			"companyName": "Testing Exp",
			"position": "test",
			"startDate": "12, 2011",
			"endDate": "11, 2009"
		},
		{
			"isWorking": true,
			"_id": "5fa7cc24371ed1543fbbb985",
			"companyName": "Test",
			"position": "testing",
			"startDate": "12, 2011",
			"endDate": "undefined, undefined"
		}
	],
	"skills": [
		{
			"_id": "5fa7b264371ed1543fbbb94c",
			"name": "Test"
		},
		{
			"_id": "5fa7b264371ed1543fbbb94d",
			"name": "Testing1"
		},
		{
			"_id": "5fa7c1dd371ed1543fbbb962",
			"name": "T"
		}
	],
	"projects": [
		{
			"technology": [
				"test, test1"
			],
			"_id": "5fa7cc51371ed1543fbbb98b",
			"projectName": "Testing",
			"company": "testing",
			"year": 2012,
			"description": "testing project"
		}
	],
	"addedBy": "5f637b7a1640220eb5e0b1c3",
	"createdAt": "2020-11-08T06:39:59.899Z",
	"updatedAt": "2020-11-08T11:24:59.178Z",
	"__v": 0,
	"emailId": "test@lipitech.in",
	"address": "test",
	"city": "Delhi",
	"fatherName": "testing",
	"fatherOccupation": "testing",
	"hobbies": "ttess, tesf",
	"motherName": "test",
	"motherOccupation": "test",
	"objective": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	"pincode": "110088"
}
export const ResumePreview = () => {
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
					<ResumePreviews
						myResume={EduCrackAPI.resume.me}
						getResumePDF={EduCrackAPI.resume.getPDF}
					/>
				</>
			) : (
				<h4 className="text-center">Please Login First</h4>
			)}
		</BrowserRouter>
	);
};

export default {
	title: 'Student Resume',
};
