import React from 'react';
import { Form, Input, Select, TextArea } from '@lipihipi/form';
import { Row, Col } from '@lipihipi/ec-ui';
import { PersonalSchema } from './PersonalInfo.schema';
import Footer from '../Footer';

const sex = [
  { label: 'Male', value: 'MALE' },
  { label: 'Female', value: 'FEMALE' },
  { label: 'Other', value: 'OTHER' },
];

const passportHolding = [
  { label: 'Yes', value: '1' },
  { label: 'No', value: '0' },
];
const PersonalInfo = ({
  onSubmit,
  initialValues = {},
  onBack,
  // onPreview,
}: any) => {
  if ('passport' in initialValues) {
    initialValues = { ...initialValues };
    if (initialValues.passport === true) initialValues.passport = '1';
    if (initialValues.passport === false) initialValues.passport = '0';
  }

  return (
    <>
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={PersonalSchema}
      >
        <div className="default-card">
          <Row spacing={20}>
            <Col xs={12} sm={6}>
              <Input
                placeholder="Enter here.."
                required
                name="firstName"
                label="First &amp; Middle Name "
              />
            </Col>

            <Col xs={12} sm={6}>
              <Input
                placeholder="Enter here.."
                required
                name="lastName"
                label="Last Name"
              />
            </Col>

            <Col xs={12} sm={6}>
              <Input
                placeholder="Enter here.."
                name="emailId"
                label="Email ID"
                required
              />
            </Col>

            <Col xs={12} sm={6}>
              <Input
                placeholder="Enter here.."
                name="mobile"
                label="Mobile No"
                required
              />
            </Col>

            <Col xs={12} sm={6}>
              <Select
                id={'sex'}
                name={'gender'}
                label="Gender"
                options={sex}
                required
              />
            </Col>

            <Col xs={12} sm={6}>
              <Select
                id={'passportHolding'}
                name={'passport'}
                label="Passport Holding"
                options={passportHolding}
                required
              />
            </Col>

            <Col xs={12} sm={6}>
              <Input placeholder="Enter here.." name="city" label="City" required/>
            </Col>

            <Col xs={12} sm={6}>
              <Input
                placeholder="Enter here.."
                name="pincode"
                label="Pin Code"
                required
              />
            </Col>

            <Col xs={12} sm={6}>
              <Input
                placeholder="Enter here.."
                name="languageKnown"
                label="Languages Known"
                required
              />
            </Col>

            <Col xs={12} sm={6}>
              <Input
                placeholder="Enter here.."
                name="nationality"
                label="Natioanality"
                required
              />
            </Col>

            <Col xs={12} sm={6}>
              <Input
                placeholder="Enter here.."
                name="fatherName"
                label="Father’s name"
                required
              />
            </Col>

            <Col xs={12} sm={6}>
              <Input
                placeholder="Enter here.."
                name="fatherOccupation"
                label="Occupation"
                required
              />
            </Col>

            <Col xs={12} sm={6}>
              <Input
                placeholder="Enter here.."
                name="motherName"
                label="Mothers name"
                required
              />
            </Col>

            <Col xs={12} sm={6}>
              <Input
                placeholder="Enter here.."
                name="motherOccupation"
                label="Occupation"
                required
              />
            </Col>

            <Col xs={12}>
              <Input
                placeholder="Enter here.."
                name="address"
                label="Address"
                required
              />
            </Col>

            <Col xs={12}>
              <TextArea
                id="summary"
                name="objective"
                label="Objective/summary"
                placeholder="Description"
                required
              />
            </Col>

            <Col xs={12}>
              <TextArea
                id="hobbies"
                name="hobbies"
                label="Hobies and Interests"
                placeholder="Reading books, Playing Cricket, Visiting new places etc"
                required
              />
            </Col>
          </Row>
        </div>

        <Footer onBack={onBack}  />
      </Form>
    </>
  );
};

export default PersonalInfo;
