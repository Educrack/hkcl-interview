import React, { useState } from 'react';
// import { Button } from '@lipihipi/ec-ui';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Modal from './AddEditModal';
import Footer from '../Footer';
import { IProject } from '../../resume.types';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const ProjectsAssignmentsRewards = ({
  // setComponent,
  initialValues = [],
  onSubmit,
  onBack,
  onPreview,
}: any) => {
  const [isOpen, setModal] = useState(false);
  const [projects, setProjects] = useState(initialValues);
  const [selectedProject, setSelectedProject] = useState(-1);

  // useEffect(() => {
  //   setComponent(
  //     <Button shape={'secondary'} onClick={() => setModal(true)}>
  //       Add Project/assignment/rewards
  //     </Button>
  //   );
  //   return () => {
  //     setComponent(null);
  //   };
  // }, []);

  function onEdit(index: number) {
    setSelectedProject(index);
    setModal(true);
  }

  function onDelete(index: number) {
    const newProjects = [...projects];
    newProjects.splice(index, 1);
    setProjects(newProjects);
  }

  function onSubmitModal(data: IProject) {
    const newProjects = [...projects];
    if (selectedProject > -1) {
      newProjects[selectedProject] = data;
      setSelectedProject(0);
    } else {
      newProjects.push(data);
    }
    setProjects(newProjects);
    setModal(false);
  }

  return (
    <>
      {projects.map((project: IProject, index: number) => (
        <div className="horizontal-card">
          <div className="wrap">
            <h3>{project.projectName}</h3>
            <ul className="vertcal-list">
              <li>
                <span>Organisaion Name</span>
                <span>{project.company}</span>
              </li>
              <li>
                <span>Team Size</span>
                <span>{project.teamSize}</span>
              </li>
              <li>
                <span>Year</span>
                <span>{project.year}</span>
              </li>
              <li>
                <span>URL</span>
                <span>{project.url}</span>
              </li>
              <li>
                <span>Technology used</span>
                <span>{project.technology}</span>
              </li>
            </ul>
            <p>
              <strong>Description</strong>
            </p>
            <p style={{ marginTop: 2 }}>{project.description}</p>
          </div>
          <div className="primary-dropdown">
            <div className="primary-dropdown--item">
              <BsThreeDotsVertical />
            </div>
            <ul className="primary-dropdown--menu">
              <li onClick={() => onEdit(index)}>Edit</li>
              <li onClick={() => onDelete(index)}>Delete</li>
            </ul>
          </div>
        </div>
      ))}
      <div className="add-more-info justify-content-end mt-3">
        <p onClick={() => setModal(true)}>
          <AiOutlinePlusCircle />
          Add Project/assignment/rewards
        </p>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => {
          setModal(false);
          setSelectedProject(0);
        }}
        initialValues={{ ...projects[selectedProject] }}
        onSubmit={onSubmitModal}
      />
      <br />
      <Footer
        onBack={onBack}
        onPreview={onPreview}
        onSubmit={() => onSubmit({ projects })}
      />
    </>
  );
};

export default ProjectsAssignmentsRewards;
