import React, { useState } from 'react';
// import { Button } from '@lipihipi/ec-ui';
import Modal from './AddEditModal';
import Footer from '../Footer';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IExperience } from '../../resume.types';
import { getDuration } from '../../helper';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import moment from 'moment';

const JobExperience = ({
  // setComponent,
  initialValues = [],
  onSubmit,
  onBack,
  // onPreview,
}: any) => {
  const [isOpen, setModal] = useState(false);
  const [experiences, setExperiences] = useState(initialValues);
  const [selectedExperience, setSelectedExperience] = useState<number>(-1);

  // useEffect(() => {
  //   setComponent(
  //     <Button shape={'secondary'} onClick={() => setModal(true)}>
  //       Add Job Experience
  //     </Button>
  //   );
  //   return () => {
  //     setComponent(null);
  //   };
  // }, []);

  function onEdit(index: number) {
    setSelectedExperience(index);
    setModal(true);
  }

  function onDelete(index: number) {
    const newExperiences = [...experiences];
    newExperiences.splice(index, 1);
    setExperiences(newExperiences);
  }

  function onSubmitModal(data: IExperience) {
    const newExperiences = [...experiences];
    if (selectedExperience > -1) {
      newExperiences[selectedExperience] = data;
      setSelectedExperience(0);
    } else {
      newExperiences.push(data);
    }
    setExperiences(newExperiences);
    setModal(false);
  }

  return (
    <>
      {experiences.map((experience: IExperience, index: number) => (
        <div className="horizontal-card">
          <div className="wrap">
            <h3>{experience.companyName}</h3>
            <p>{experience.position}</p>
            <ul>
              <li>
                <span>From:</span>
                <span>{moment(experience.startDate, "MM, YYYY").format("YYYY-MM")}</span>
              </li>
              <li>
                <span>To:</span>
                <span>
                  {experience.isWorking
                    ? 'Currently Working'
                    : moment(experience.endDate, "MM, YYYY").format("YYYY-MM")}
                </span>
              </li>
              <li>
                <span>
                  {getDuration(
                    experience.startDate,
                    experience.isWorking ? '' : experience.endDate
                  )}
                </span>
              </li>
            </ul>
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
          Add Experience
        </p>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => {
          setModal(false);
          setSelectedExperience(-1);
        }}
        initialValues={{ ...experiences[selectedExperience] }}
        onSubmit={onSubmitModal}
      />

      <br />
      <Footer
        onSubmit={() => onSubmit({ experiences })}
        onBack={onBack}
        // onPreview={onPreview}
      />
    </>
  );
};

export default JobExperience;
