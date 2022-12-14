import React from 'react';
import { Modal, Row, Col, Button } from '@lipihipi/ec-ui';
import { FaTimes } from 'react-icons/fa';
import { Form, Input, Select } from '@lipihipi/form';
import { EducationSchema } from './Education.schema';

const degree = [
  { label: 'Bachelors Degree', value: 'Bachelors Degree' },
  { label: 'Masters Degree', value: 'Masters Degree' },
];

const AddEditModal = ({
  isOpen,
  onRequestClose,
  onSubmit,
  initialValues,
}: any) => {

  initialValues.passedMonth = initialValues.passedMonth || '';
  initialValues.passedYear = initialValues.passedYear || '';
  initialValues.isStudying = initialValues.isStudying || false;

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <FaTimes
        style={{ float: 'right', cursor: 'pointer' }}
        color="black"
        onClick={onRequestClose}
      />
      <Form
        validationSchema={EducationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
        render={({ values, errors, ...rest }: any) => {
          return (<>
        <Row spacing={20}>
          <Col xs={12}>
            <Input
              name="schoolName"
              label="School/University name"
              required
              placeholder="Enter here.."
            />
          </Col>
          <Col xs={12} sm={6}>
            <Select
              id={'degree'}
              name={'degree'}
              label="Select a Degree"
              options={degree}
              required
            />
          </Col>
          <Col xs={12} sm={6}>
            <Input
              name="percentage"
              label="Percentage/CGPA"
              required
              placeholder="Enter here.."
            />
          </Col>

          <Col xs={12}>
            <div className="custom-control custom-checkbox mb-3">
              <input
                name="isStudying"
                type="checkbox"
                className="custom-control-input"
                checked={values.isStudying}
                id="isStudying"
                onChange={e =>{
                  rest.setFieldValue('isStudying', e.target.checked);
                  rest.setFieldValue('passedMonth','');
                  rest.setFieldValue('passedYear', '');
                }
                }
              />
              <label htmlFor="isStudying" className="custom-control-label">
                    Studying here
              </label>
            </div>
          </Col>

          <Col xs={12} sm={6}>
            <Input
              name="passedMonth"
              label="Completed on"
              required
              disabled={values.isStudying}
              placeholder="Month"
            />
          </Col>

          <Col xs={12} sm={6}>
            <Input
              name="passedYear"
              label="&nbsp;"
              disabled={values.isStudying}
              placeholder="Year" />
          </Col>
        </Row>

        <div className="text-center mt-3">
          <Button type="submit" shape="primary">
            Save &amp; Continue
          </Button>
        </div>
      </>);
      }}
      />
    </Modal>
  );
};

export default AddEditModal;
