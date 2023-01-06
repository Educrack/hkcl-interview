import React, { useState, useEffect } from 'react';
import { Modal, Tabs, Tab, PageHeader, } from '@lipihipi/ec-ui';
import PersonalInfo from './components/PersonalInfo';
import EducationInfo from './components/EducationalInfo';
import Internship from './components/Internship';
import JobExperience from './components/JobExperience';
import Skills from './components/Skills';
import ProjectsAssignmentsRewards from './components/ProjectsAssignmentsRewards';
// import { VscOpenPreview } from 'react-icons/vsc';
import { IResume } from './resume.types';
import swal from 'sweetalert';
import ResumePreviews from './ResumePreviews';

//  TODO make proper interface in refactor

interface Props {
  // getResume: any;
  myResume: any;
  createResume: any;
  updateResume: any;
  onPreview: any;
  afterFinalSubmitSuccess: any;
  id: string;
  title?: any;
  breadCrumbs?: any;
  description?: string;
  getResumePDF?: any;
}

const CreateResumes: React.FC<Props> = ({
  id,
  myResume,
  createResume,
  // getResume,
  updateResume,
  onPreview,
  afterFinalSubmitSuccess,
  title,
  breadCrumbs,
  description,
  getResumePDF
}) => {
  const [state, setState] = useState('personalInfo');
  // const [component, setComponent] = useState(null);
  const [initialValues, setInitialValues] = useState<any>({});
  const [resumeId, setResumeId] = useState<string>(id);
  const [isOpen, setModal] = useState(false);
  const [fileUrl, setFileUrl] = useState<string>("");

console.log(fileUrl)

  useEffect(() => {
    // if (resumeId)
    //   getResume(resumeId, { populate: true }).then((resp: any) => {
    //     setInitialValues(resp.data);
    //   });

    myResume().then(
      (resp: any) => {
        setInitialValues(resp.data);
        setResumeId(resp.data._id);
      },
      (error: any) => {
        console.log('error', error);
        setResumeId('');
      }
    );
  }, []);
  const getResumeDownloadClick = () => {
    getResumePDF().then(
      (response: any) => {
        console.log({ response });
        const file = URL.createObjectURL(
          new Blob([response.data], { type: 'application/pdf' })
        );
        setFileUrl(file)
        // let tempLink = document.createElement('a');
        // tempLink.href = fileURL;
        // tempLink.setAttribute('download', 'resume.pdf');
        // tempLink.click();
        setModal(true)
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  };
  function onSubmit(values: IResume, isLastTab?: boolean) {
    const successPayload = {
      title: 'Success',
      text: resumeId ? 'Interview Updated' : 'Interview Created',
      icon: 'success',
    };
    const errorPayload = {
      title: 'Error',
      text: 'Server error!',
      icon: 'error',
      dangerMode: false,
    };
    if (!resumeId) {
      createResume(values)
        .then((res: any) => {
          console.log(res);
          setResumeId(res.data._id);
          setInitialValues(res.data);
          switchTab(1);
          if (state === 'ProjectAssignmentRewards') {
            swal(successPayload);
            afterFinalSubmitSuccess(); getResumeDownloadClick()
            setModal(true)

          }
        })
        .catch((err: any) => {
          console.log(err);
          swal(errorPayload);
        });
    } else {
      const data = { ...initialValues, ...values };
      if (isLastTab) data.draft = false;
      console.log(data);
      updateResume(resumeId, data)
        .then((res: any) => {
          switchTab(1);
          setInitialValues(res.data);
          if (state === 'ProjectAssignmentRewards' || state === 'personalInfo') {
            swal(successPayload);
            afterFinalSubmitSuccess(); 
            getResumeDownloadClick();
            setModal(true)

          }
        })
        .catch((err: any) => {
          console.log(err);
          swal(errorPayload);
        });
    }
  }

  function onBack() {
    switchTab(-1);
  }

  function switchTab(move: number) {
    let prev = '',
      next = '';
    switch (state) {
      case 'personalInfo':
        next = 'educationalInfo';
        break;
      case 'educationalInfo':
        next = 'internship';
        prev = 'personalInfo';
        break;
      case 'internship':
        next = 'jobExperience';
        prev = 'educationalInfo';
        break;
      case 'jobExperience':
        next = 'skills';
        prev = 'internship';
        break;
      case 'skills':
        prev = 'jobExperience';
        next = 'ProjectAssignmentRewards';
        break;
      case 'ProjectAssignmentRewards':
        prev = 'skills';
        break;
    }
    if (move === 1 && next) {
      setState(next);
    }
    if (move === -1 && prev) {
      setState(prev);
    }
  }

  // function onPreview() {
  //   // redirect to preview
  // }

  return (
    <>
      <div className="d-flex flex-wrap">
        <div className="main-mid">
          <PageHeader
            title={title || 'Your Resume'}
            breadCrumbs={
              breadCrumbs || [
                { title: 'Home', link: '/' },
                { title: 'My Resume', link: '#' },
              ]
            }
            description={
              description ||
              'Your Resume has to be compplete to Attempt Interview in Mock Interview section on EduCrack app. You can create your resume, download and save for your use.'
            }
          // component={
          //   <IconButton
          //     className="primary-outine-button"
          //     onClick={() => {
          //       onPreview();
          //     }}
          //   >
          //     <VscOpenPreview />
          //     RESUME PREVIEW
          //   </IconButton>
          // }
          />

          <Tabs active={state} onClick={setState}>
            <Tab id="personalInfo" title="Personal Info">
              <PersonalInfo
                // onBack={onBack}
                // onPreview={onPreview}
                onSubmit={onSubmit}
                initialValues={initialValues}
                onSubmitPreview = {(data: any) => onSubmit(data, true)}
                onPreview={onPreview}
              />
            </Tab>
            <Tab id="educationalInfo" title="Educational Info">
              <EducationInfo
                // onPreview={onPreview}
                onBack={onBack}
                onSubmit={onSubmit}
                // setComponent={setComponent}
                initialValues={initialValues.educations}
              />
            </Tab>
            <Tab id="internship" title="Internship">
              <Internship
                onBack={onBack}
                // onPreview={onPreview}
                onSubmit={onSubmit}
                initialValues={initialValues.internships}
              // setComponent={setComponent}
              />
            </Tab>
            <Tab id="jobExperience" title="Job Experience">
              <JobExperience
                onBack={onBack}
                // onPreview={onPreview}
                onSubmit={onSubmit}
                initialValues={initialValues.experiences}
              // setComponent={setComponent}
              />
            </Tab>
            <Tab id="skills" title="Skills">
              <Skills
                onBack={onBack}
                // onPreview={onPreview}
                defaultSkills={initialValues.skills}
                onSubmit={onSubmit}
              />
            </Tab>
            <Tab
              id="ProjectAssignmentRewards"
              title="Project/assignment/rewards"
            >
              <ProjectsAssignmentsRewards
                onBack={onBack}
                onSubmit={(data: any) => onSubmit(data, true)}
                onPreview={onPreview}
                initialValues={initialValues.projects}
              // setComponent={setComponent}
              />
            </Tab>
          </Tabs>
        </div>

        {/* <Advertisement rewardsPoint={'200'} viewDetailsClick={() => {}} /> */}
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => {
          setModal(false);
        }}>

        <ResumePreviews
          resume={initialValues}
          setModal={setModal}
          getResumePDF={getResumePDF} />
      </Modal>
      {/* <Modal
        isOpen={isOpen}
        onRequestClose={() => {
          setModal(false);
        }}>

        <object data={fileUrl} type="application/pdf" width='600' height='600'>

        </object>
        <a href={fileUrl} download="resume.pdf">Download</a>
      </Modal> */}
    </>
  );
};

export default CreateResumes;
