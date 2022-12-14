import React, { useState } from 'react';
// import { Button } from '@lipihipi/ec-ui';
import Modal from './AddEditModal';
import Footer from '../Footer';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IInternship } from '../../resume.types';
import { getDuration } from '../../helper';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import moment from 'moment';

const Internship = ({
  // setComponent,
  initialValues = [],
  onSubmit,
  onBack,
  // onPreview,
}: any) => {
  const [isOpen, setModal] = useState(false);
  const [internships, setInternships] = useState(initialValues);
  const [selectedInternship, setSelectedInternship] = useState(-1);

  // useEffect(() => {
  //   setComponent(
  //     <Button shape={'secondary'} onClick={() => setModal(true)}>
  //       Add Internship
  //     </Button>
  //   );
  //   return () => {
  //     setComponent(null);
  //   };
  // }, []);

  function onEdit(index: number) {
    setSelectedInternship(index);
    setModal(true);
  }

  function onDelete(index: number) {
    const newInternships = [...internships];
    newInternships.splice(index, 1);
    setInternships(newInternships);
  }

  function onSubmitModal(data: IInternship) {
    const newInternships = [...internships];
    if (selectedInternship > -1) {
      newInternships[selectedInternship] = data;
      setSelectedInternship(0);
    } else {
      newInternships.push(data);
    }
    setInternships(newInternships);
    setModal(false);
  }

  return (
    <>
      {internships.map((internship: IInternship, index: number) => (
        <div className="horizontal-card">
          <div className="wrap">
            <h3>{internship.companyName}</h3>
            <p>{internship.position}</p>
            <ul>
              <li>
                <span>From:</span>
                <span>{moment(internship.startDate, "MM, YYYY").format("YYYY-MM")}</span>
              </li>
              <li>
                <span>To:</span>
                <span>
                  {internship.isWorking ? 'Currently' : moment(internship.endDate, "MM, YYYY").format("YYYY-MM")}
                </span>
              </li>
              <li>
                <span>
                  {getDuration(
                    internship.startDate,
                    internship.isWorking ? '' : internship.endDate
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
          Add Internship
        </p>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => {
          setModal(false);
          setSelectedInternship(-1);
        }}
        initialValues={{ ...internships[selectedInternship] }}
        onSubmit={onSubmitModal}
      />

      <br />
      <Footer
        onSubmit={() => onSubmit({ internships })}
        onBack={onBack}
        // onPreview={onPreview}
      />
    </>
  );
};

export default Internship;
