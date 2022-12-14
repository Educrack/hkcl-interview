import React from 'react';
import { Row, Col, Button } from '@lipihipi/ec-ui';
import { getDuration } from './helper';

import StarRatingComponent from "react-star-rating-component";
import { FiDownload } from "react-icons/fi";
interface Props {
  resume: any;
  getResumePDF: any;
  setModal:any;
  
}



const ResumePreviews: React.FC<Props> = ({ resume, getResumePDF, setModal }) => {
  
  // const [resume, setResume] = React.useState<any>({});
  

  // React.useEffect(() => {
  //   myResume().then(
  //     (res: any) => {
  //       setResume(res.data);
  //     },
  //     ({ data }: any) => {
  //       setResume({ error: data });
  //     }
  //   );
  // }, []);

  // if (resume.error && resume.error.message) {
  //   return (
  //     <h6>
  //       {' '}
  //       Message : No resume preview avalable for you please create your resume
  //       first.{' '}
  //     </h6>
  //   );
  // }
  // if (!resume._id) {
  //   return null;
  // }
  
  const getResumeDownloadClick = () => {
    getResumePDF().then(
      (response: any) => {
        console.log({ response });
        const fileURL = URL.createObjectURL(
          new Blob([response.data], { type: 'application/pdf' })
        );
        
        let tempLink = document.createElement('a');
        tempLink.href = fileURL;
        tempLink.setAttribute('download', 'resume.pdf');
        tempLink.click();
      },
      (error: any) => {
        console.log('error', error);        
      }
    );
  };
  // if(!resume){
  //   return ""
  // }
  

  
  return (
  
    <div className="resume-preview">
      <div className="resume-preview--wrap">
        <div className="main-header">
          <div className="wrp">
            <div className="icon">Icon</div>
            <div className="main-header--wrap">
              <h2>
                {resume?.firstName} {resume?.lastName}
              </h2>
              <p>Mobile: {resume?.mobile}</p>
              <p>E-mail: {resume?.emailId}</p>
            </div>
          </div>
          <div className="button-group">
            <Button shape="secondary"  onClick={() => getResumeDownloadClick()} className="d-flex align-items-center">
              <FiDownload className="mr-2 "/>
              Download
            </Button>
            {/* <Button shape="popup">
              SAVE
            </Button> */}
          </div>
        </div>

        <div className="main-header--content">
          <Row spacing={40}>
            <Col xs={12} sm={7}>
              <div className="wrap">
                <p>
                  <strong>Objective:</strong>
                </p>
                <p>{resume?.objective}</p>
              </div>

              {/* <div className="wrap">
                <p>
                  <strong>Brief Profile:</strong>
                </p>
                <p>
                  Good knowledge in the software programming techniques.
                  Praise-worthy performance leading to awards and accolades.
                </p>
              </div> */}
            </Col>
            {resume?.skills.length>0 && <Col xs={12} sm={5} className="pr-0">
              <div className="skills">
                <p>
                  <strong>Skills:</strong>
                </p>
                {
                  resume?.skills.map((skill: any) => (
                    <div className="skills--row">
                      <p>{skill.name}</p>
                      <ul>
                        <li>
                        <StarRatingComponent
                            name ={skill.name}
                            starCount={5}
                            value ={skill.rating}
                            editing= {false}
                            starColor="#239F87"
                          />
                        </li>
                      </ul>
                    </div>
                  ))}
              </div>
            </Col>
            }
          </Row>
        </div>
      </div>

      {resume?.experiences.length>0 &&<div className="resume-preview--wrap">
        <div className="resume-preview--header">
          <h3>Work Experience</h3>
          {/* <span>Total: 4.9yrs</span> */}
        </div>
        <div className="resume-preview--body">
          {resume?.experiences &&
            resume?.experiences.map((experience: any) => (
              <div className="wrap">
                <Row spacing={20}>
                  <Col xs={4}>
                    <p>
                      <strong>{experience?.companyName}</strong>
                    </p>
                    <p>{experience?.position}</p>
                    <p>
                      {experience?.startDate} till
                      {experience?.isWorking ? ' now ' : experience?.endDate}(
                      {getDuration(
                        experience?.startDate,
                        experience?.isWorking ? '' : experience?.endDate
                      )}
                      )
                    </p>
                    {experience?.isWorking ? (
                      <p className="currently-working">
                        Currently Working here
                      </p>
                    ) : null}
                  </Col>
                  {/* <Col xs={8}>
                    <p>Roles and Responsibilities</p>
                    <p>
                      Aut quia repudiandae non sit. Cupiditate aut mollitia nisi
                      vel eum ipsa labore. Officia officia minus aperiam odit
                      perferendis aut earum quia voluptatem. Quia et ut vero
                      odit accusamus aut commodi. Maxime et quia et omnis dolor.
                    </p>
                    <p>
                      Voluptatibus cum illo repellat. Blanditiis est magnam
                      assumenda velit. Tenetur provident delectus blanditiis ut.
                      Corrupti est quae.
                    </p>
                    <p>
                      Dolor ea non iste repudiandae quisquam harum quidem
                      adipisci ab. Maiores molestiae repudiandae ut mollitia vel
                      tempore exercitationem. Cumque delectus aut repellendus
                      deserunt quam quos eos nemo consectetur.
                    </p>
                  </Col> */}
                </Row>
              </div>
            ))}
        </div>
      </div>}

      {resume?.internships.length>0 &&<div className="resume-preview--wrap">
        <div className="resume-preview--header">
          <h3>Internship</h3>
          {/* <span>Total: 4.9yrs</span> */}
        </div>
        <div className="resume-preview--body">
          {resume?.internships &&
            resume?.internships.map((internship: any) => (
              <div className="wrap">
                <Row spacing={20}>
                  <Col xs={4}>
                    <p>
                      <strong>{internship?.companyName}</strong>
                    </p>
                    <p>{internship?.position}</p>
                    <p>
                      {internship?.startDate} till
                      {internship?.isWorking ? 'now' : internship?.endDate}(
                      {getDuration(
                        internship?.startDate,
                        internship?.isWorking ? '' : internship?.endDate
                      )}
                      )
                    </p>
                    {internship?.isWorking ? (
                      <p className="currently-working">
                        Currently Working here
                      </p>
                    ) : null}
                  </Col>
                  {/* <Col xs={8}>
                    <p>Roles and Responsibilities</p>
                    <p>
                      Aut quia repudiandae non sit. Cupiditate aut mollitia nisi
                      vel eum ipsa labore. Officia officia minus aperiam odit
                      perferendis aut earum quia voluptatem. Quia et ut vero
                      odit accusamus aut commodi. Maxime et quia et omnis dolor.
                    </p>
                    <p>
                      Voluptatibus cum illo repellat. Blanditiis est magnam
                      assumenda velit. Tenetur provident delectus blanditiis ut.
                      Corrupti est quae.
                    </p>
                    <p>
                      Dolor ea non iste repudiandae quisquam harum quidem
                      adipisci ab. Maiores molestiae repudiandae ut mollitia vel
                      tempore exercitationem. Cumque delectus aut repellendus
                      deserunt quam quos eos nemo consectetur.
                    </p>
                  </Col> */}
                </Row>
              </div>
            ))}
        </div>
      </div>}

      {resume?.educations.length>0 &&<div className="resume-preview--wrap">
        <div className="resume-preview--header">
          <h3>Academic Profile:</h3>
        </div>
        <div className="resume-preview--body">
          {resume?.educations &&
            resume?.educations.map((education: any) => (
              <div className="wrap">
                <Row spacing={20}>
                  <Col xs={4}>
                    <p>
                      <strong>{education?.degree}</strong>
                    </p>
                  </Col>
                  <Col xs={8}>
                    <p>{education?.percentage}%</p>
                  </Col>
                </Row>
                <Row spacing={20} className="mt-2">
                  <Col xs={4}>
                    <p>{education?.schoolName}</p>
                  </Col>
                  <Col xs={8}>
                    <p>{education?.passedYear}</p>
                  </Col>
                </Row>
              </div>
            ))}
        </div>
      </div>}

      {resume?.projects.length>0 && <div className="resume-preview--wrap">
        <div className="resume-preview--header">
          <h3>Projects/Assignments/Activities</h3>
        </div>
        <div className="resume-preview--body">
          {resume?.projects &&
            resume?.projects.map((project: any) => (
              <div className="wrap">
                <p>
                  <strong>{project?.projectName}</strong>
                </p>
                {/* <Row spacing={20} className="mt-2">
                  <Col xs={4}>
                    <p>My Role:</p>
                  </Col>
                  <Col xs={8}>
                    <p>Project Manager</p>
                  </Col>
                </Row> */}

                {/* <Row spacing={20} className="mt-2">
                  <Col xs={4}>
                    <p>{project.year}</p>
                  </Col>
                  <Col xs={8}>
                    <p>(1 year 9 months)</p>
                  </Col>
                </Row> */}

                <Row spacing={20} className="mt-2">
                  <Col xs={4}>
                    <p>Technology used:</p>
                  </Col>
                  <Col xs={8}>
                    <p>{project?.technology}</p>
                  </Col>
                </Row>

                {project?.teamSize && <Row spacing={20} className="mt-2">
                  <Col xs={4}>
                    <p>Team Size</p>
                  </Col>
                  <Col xs={8}>
                    <p>{project?.teamSize}</p>
                  </Col>
                </Row>}

                <Row spacing={20} className="mt-2">
                  <Col xs={4}>
                    <p>URL/Link:</p>
                  </Col>
                  <Col xs={8}>
                    <p>{project?.url}</p>
                  </Col>
                </Row>

                <Row spacing={20} className="mt-2">
                  <Col xs={4}>
                    <p>Company/Institution associated</p>
                  </Col>
                  <Col xs={8}>
                    <p>{project?.company}</p>
                  </Col>
                </Row>

                <p className="mt-3">
                  <strong>Summary</strong>
                </p>

                <p>{project?.description}</p>
              </div>
            ))}
        </div>
      </div>}

      <div className="resume-preview--wrap">
        <div className="resume-preview--header">
          <h3>Personal Details</h3>
        </div>
        <div className="resume-preview--body">
          {/* nothing releated to this in create resume */}
          {/* <div className="wrap">
            <p>
              <strong>Best Mentor Award</strong>
            </p>

            <p>
              <strong>Summary</strong>
            </p>

            <p>
              Aut quia repudiandae non sit. Cupiditate aut mollitia nisi vel eum
              ipsa labore. Officia officia minus aperiam odit perferendis aut
              earum quia voluptatem. Quia et ut vero odit accusamus aut commodi.
              Maxime et quia et omnis dolor.
            </p>
            <p>
              Voluptatibus cum illo repellat. Blanditiis est magnam assumenda
              velit. Tenetur provident delectus blanditiis ut. Corrupti est
              quae.
            </p>
            <p>
              Dolor ea non iste repudiandae quisquam harum quidem adipisci ab.
              Maiores molestiae repudiandae ut mollitia vel tempore
              exercitationem. Cumque delectus aut repellendus deserunt quam quos
              eos nemo consectetur.
            </p>
          </div> */}

          {resume?.hobbies && <div className="wrap">
            <p>
              <strong>Hobbies &amp; Interests</strong>
            </p>
            <p>{resume?.hobbies}</p>
          </div>}

          <div className="wrap">
            <p>
              <strong>Other Details</strong>
            </p>

            {resume?.city && <Row spacing={20} className="mt-2">
              <Col xs={12} sm={2}>
                <p>Current Location</p>
              </Col>
              <Col xs={12} sm={10}>
                <p>{resume?.city}</p>
              </Col>
            </Row>}

            {resume?.passport && <Row spacing={20} className="mt-2">
              <Col xs={12} sm={2}>
                <p>Passport Holding</p>
              </Col>
              <Col xs={12} sm={10}>
                <p>{resume?.passport ? 'Yes' : 'No'}</p>
              </Col>
            </Row>}

            {resume?.dob &&<Row spacing={20} className="mt-2">
              <Col xs={12} sm={2}>
                <p>Date of Birth</p>
              </Col>
              <Col xs={12} sm={10}>
                <p>{resume?.dob}</p>
              </Col>
            </Row>}

            {resume?.fatherName && <Row spacing={20} className="mt-2">
              <Col xs={12} sm={2}>
                <p>Fathers Name</p>
              </Col>
              <Col xs={12} sm={10}>
                <p>{resume?.fatherName}</p>
              </Col>
            </Row>}

            {resume?.nationality && <Row spacing={20} className="mt-2">
              <Col xs={12} sm={2}>
                <p>Nationality</p>
              </Col>
              <Col xs={12} sm={10}>
                <p>{resume?.nationality}</p>
              </Col>
            </Row>}

            {resume?.languageKnown.length>0 && <Row spacing={20} className="mt-2">
              <Col xs={12} sm={2}>
                <p>Languages Known</p>
              </Col>
              <Col xs={12} sm={10}>
                <p>{resume?.languageKnown}</p>
              </Col>
            </Row>}

            { resume?.address && <Row spacing={20} className="mt-2">
              <Col xs={12} sm={2}>
                <p>Address:</p>
              </Col>
              <Col xs={12} sm={10}>
                <p>{resume?.address}</p>
              </Col>
            </Row>}
          </div>

          <div className="wrap">
            <p>
              <strong>Declaration: </strong>
            </p>
            <p>
              I hereby declare that the above mentioned details are true and
              correct to the best of my knowledge and belief.
            </p>
          </div>

          <div className="wrap my-5">
            <Row spacing={20} className="my-5 justify-content-end">
              <Col xs={12} sm={2}>
                <p>
                  <strong>Signature</strong>
                </p>
              </Col>
            </Row>
          </div>
          
          <Button type="button" onClick={()=>
          setModal(false)} shape="primary" >Close</Button>
          
        </div>
      </div>
    </div>
  );
};

export default ResumePreviews;
