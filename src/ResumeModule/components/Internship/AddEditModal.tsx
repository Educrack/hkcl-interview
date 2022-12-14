import React from 'react';
import { Modal, Row, Col, Button } from '@lipihipi/ec-ui';
import { FaTimes } from 'react-icons/fa';
import { Form, Input } from '@lipihipi/form';
import { InternshipSchema } from './Internship.schema';
import { getDate, getMonthYear } from '../../helper';

const AddEditModal = ({
  isOpen,
  onRequestClose,
  onSubmit,
  initialValues,
}: any) => {
  let from: any = {},
    to: any = {};
  if (initialValues.startDate) {
    from = getMonthYear(initialValues.startDate);
    initialValues.fromMonth = from.month;
    initialValues.fromYear = from.year;
  }
  if (initialValues.endDate) {
    to = getMonthYear(initialValues.endDate);
    initialValues.toMonth = to.month || '';
    initialValues.toYear = to.year || '';
  }
  initialValues.isWorking = initialValues.isWorking || false;

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <FaTimes
        style={{ float: 'right', cursor: 'pointer' }}
        color="black"
        onClick={onRequestClose}
      />
      <Form
        validationSchema={InternshipSchema}
        onSubmit={(values: any) => {
          values.startDate = getDate(values.fromMonth, values.fromYear);
          if(!values.isWorking) {
            values.endDate = getDate(values.toMonth, values.toYear);
          }else{
            values.endDate = '';
          }
          onSubmit(values);
        }}
        initialValues={initialValues}
        render={({ values, errors, ...rest }: any) => {
          console.log(values);
          return (
            <>
              <Input
                name="companyName"
                label="Company Name"
                required
                placeholder="Enter here.."
              />
              <Input
                name="position"
                label="Position"
                required
                placeholder="Enter here.."
              />
              <div className="custom-control custom-checkbox mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="isWorking"
                  id="isWorking"
                  checked={values.isWorking}
                  onChange={e =>{
                    rest.setFieldValue('isWorking', e.target.checked);
                    rest.setFieldValue('toMonth','');
                    rest.setFieldValue('toYear', '');
                    }
                  }
                />
                <label htmlFor="isWorking" className="custom-control-label">
                  Currently Working here
                </label>
              </div>
              <Row spacing={20} style={{ alignItems: 'center' }}>
                <Col xs={12} sm={6}>
                  <Row spacing={20}>
                    <Col xs={6}>
                      <Input
                        name="fromMonth"
                        label="From"
                        required
                        placeholder="Month"
                      />
                    </Col>
                    <Col xs={6}>
                      <Input
                        name="fromYear"
                        label="&nbsp;"
                        placeholder="Year"
                      />
                    </Col>
                  </Row>
                </Col>

                <Col xs={12} sm={6}>
                  <Row spacing={20}>
                    <Col xs={6}>
                      <Input
                        name="toMonth"
                        disabled={values.isWorking}
                        label="To"
                        required
                        placeholder="Month"
                      />
                    </Col>
                    <Col xs={6}>
                      <Input
                        name="toYear"
                        disabled={values.isWorking}
                        label="&nbsp;"
                        placeholder="Year"
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>

              <div className="text-center mt-3">
                <Button type="submit" shape="primary">
                  Save
                </Button>
              </div>
            </>
          );
        }}
      />
    </Modal>
  );
};

export default AddEditModal;
