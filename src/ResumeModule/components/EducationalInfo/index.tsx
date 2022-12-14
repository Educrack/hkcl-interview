import React, { useState } from 'react';
// import { Button } from '@lipihipi/ec-ui';
import Modal from './AddEditModal';
import Footer from '../Footer';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IEducation } from '../../resume.types';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const EducationInfo = ({
  // setComponent,
  initialValues = [],
  onSubmit,
  onBack,
  // onPreview,
}: any) => {
  const [isOpen, setModal] = useState(false);
  const [educations, setEducations] = useState(initialValues);
  const [selectedEducation, setSelectedEducation] = useState(-1);

  // useEffect(() => {
  //   setComponent(
  //     <Button shape={'secondary'} onClick={() => setModal(true)}>
  //       Add Education
  //     </Button>
  //   );
  //   return () => {
  //     setComponent(null);
  //   };
  // }, []);

  function onEdit(index: number) {
    setSelectedEducation(index);
    setModal(true);
  }

  function onDelete(index: number) {
    const newEducations = [...educations];
    newEducations.splice(index, 1);
    setEducations(newEducations);
  }

  function onSubmitModal(data: IEducation) {
    const newEducations = [...educations];
    if (selectedEducation > -1) {
      newEducations[selectedEducation] = data;
      setSelectedEducation(0);
    } else {
      newEducations.push(data);
    }
    setEducations(newEducations);
    setModal(false);
  }

  return (
    <>
      {educations.map((education: IEducation, index: number) => (
        <div className="horizontal-card" key={index}>
          <div className="wrap">
            <h3>{education.degree}</h3>
            <p>{education.schoolName}</p>
            <ul>
              <li>
                <span>Percentage/CGPA:</span>
                <span>{education.percentage}</span>
              </li>
              {education.passedYear && (
                <li>
                  <span>Passed Year:</span>
                  {education.passedMonth && (
                    <span>{education.passedMonth}/ </span>
                  )}
                  <span>{education.passedYear}</span>
                </li>
              )}
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
          Add Education
        </p>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => {
          setModal(false);
          setSelectedEducation(-1);
        }}
        initialValues={{ ...educations[selectedEducation] }}
        onSubmit={onSubmitModal}
      />
      <Footer
        onSubmit={() => onSubmit({ educations })}
        onBack={onBack}
        // onPreview={onPreview}
      />
    </>
  );
};

export default EducationInfo;
