import React from 'react';
import { Modal, Row, Col, Button } from '@lipihipi/ec-ui';
import { FaTimes } from 'react-icons/fa';
import { Form, Input, TextArea } from '@lipihipi/form';
import { ProjectSchema } from './Project.schema';
// const degree = [
// 	{ label: 'Bachelors Degree', value: 'BD' },
// 	{ label: 'Masters Degree', value: 'MD' },
// ];

const AddEditModal = ({
  isOpen,
  onRequestClose,
  onSubmit,
  initialValues,
}: any) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <FaTimes
        style={{ float: 'right', cursor: 'pointer' }}
        color="black"
        onClick={onRequestClose}
      />
      <Form
        validationSchema={ProjectSchema}
        onSubmit={onSubmit}
        initialValues={initialValues}
      >
        <Row spacing={20}>
          <Col xs={12} sm={6}>
            <Input
              name="projectName"
              label="Project Name"
              required
              placeholder="Enter here.."
            />
          </Col>
          <Col xs={12} sm={6}>
            <Input
              name="company"
              label="Company associated"
              required
              placeholder="Enter here.."
            />
          </Col>

          <Col xs={12} sm={6}>
            <Input
              name="technology"
              label="Technology/Used"
              required
              placeholder="Enter here.."
            />
          </Col>
          <Col xs={12} sm={6}>
            <Input
              name="url"
              label="URL if any"
              placeholder="Enter here.."
            />
          </Col>

          <Col xs={12} sm={3}>
            <Input
              name="teamSize"
              label="Team Size"
              required
              placeholder="Enter here.."
            />
          </Col>
          <Col xs={12} sm={3}>
            <Input
              name="year"
              label="In the Year:"
              required
              placeholder="Enter here.."
            />
          </Col>

          <Col xs={12}>
            <TextArea
              name="description"
              id="Description"
              label="Description"
              placeholder="Enter here.."
            />
          </Col>
        </Row>

        <div className="text-center mt-3">
          <Button type="submit" shape="primary">
            Save &amp; Continue
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default AddEditModal;
