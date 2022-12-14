import * as Yup from 'yup';

export const SkillsSchema = Yup.object().shape({
  skills: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('Name is Required'), 
      rating: Yup.number().required('Level is Required'),
    })
  ),
});
