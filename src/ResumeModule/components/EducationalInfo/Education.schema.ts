import moment from 'moment';
import * as Yup from 'yup';

export const EducationSchema = Yup.object().shape({
  isStudying: Yup.boolean(),
  schoolName: Yup.string().required('School Name is Required'),
  degree: Yup.string().required('Degree is Required'),
  percentage: Yup.string().required('Percetage is Required'),
  passedMonth: Yup.number().when('isStudying', {
    is: false,
    then: Yup.number()
      .required('Passed Month is Required')
      .min(1, 'Minimum value 1')
      .max(12, 'Maximum value 12')
      .typeError('Should be a number'),
  }),
  passedYear: Yup.number().when('isStudying', {
    is: false,
    then: Yup.number()
      .required('Passed Year is Required')
      .min(1980, 'Year should be on or after 1980')
      .max(moment().year(), 'Year should be on or before current year'),
  }),
});
