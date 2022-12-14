import React from 'react';
import { Row, Col } from '@lipihipi/ec-ui';
import { Input, Select, Form } from '@lipihipi/form';
import { FaTrashAlt } from 'react-icons/fa';
import { ISkill } from '../../resume.types';
import { SkillsSchema } from './Skills.schema';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FieldArray } from 'formik';
import Footer from '../Footer';

const level = [
  { label: 'Novice', value: 1 },
  { label: 'Beginner', value: 2 },
  { label: 'Skillful', value: 3 },
  { label: 'Experienced', value: 4 },
  { label: 'Expert', value: 5 },
];
const Skills = ({ defaultSkills = [], onSubmit, onBack, }: any) => {
  let initialValues = { skills: [{}] };

  if (defaultSkills.length) {
    initialValues.skills = defaultSkills;
  }

  return (
    <>
      <Form
        initialValues={initialValues}
        onSubmit={(data: any) => {
          console.log('fatattata:::', data);
          onSubmit(data);
        }}
        validationSchema={SkillsSchema}
        render={({ values }: any) => (
          <FieldArray
            name="skills"
            render={arrayHelpers => (
              <>
                {values.skills.map((_: ISkill, index: number) => (
                  <div key={index} className="list-with-delete">
                    <Row spacing={20}>
                      <Col xs={12} sm={6}>
                        <Input
                          placeholder="Enter here.."
                          required
                          name={`skills[${index}].name`}
                          label="Skill Name"
                        />
                      </Col>
                      <Col xs={12} sm={6}>
                        <Select
                          id={'rating'}
                          name={`skills[${index}].rating`}
                          label="Level"
                          options={level}
                          required
                        />
                      </Col>
                    </Row>
                    <FaTrashAlt
                      onClick={() => {
                        if (values.skills.length > 1)
                          arrayHelpers.remove(index);
                      }}
                    />
                  </div>
                ))}

                <div className="add-more-info">
                  <p
                    onClick={() => {
                      if (values.skills.length < 6) arrayHelpers.push({});
                    }}
                  >
                    <AiOutlinePlusCircle />
                    Add more skills
                  </p>
                  <span>(max 6 skills can be added)</span>
                </div>

                <br />
                <Footer onBack={onBack}  />
              </>
            )}
          />
        )}
      ></Form>
    </>
  );
};

export default Skills;
