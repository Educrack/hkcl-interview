import moment from 'moment';
import * as Yup from 'yup';

export const InternshipSchema = Yup.object().shape({
  isWorking: Yup.boolean(),
  companyName: Yup.string().required('Company Name is Required'),
  position: Yup.string().required('Position is Required'),
  fromMonth: Yup.number()
    .min(1, 'Minimum value 1')
    .max(12, 'Maximum value 12')
    .required('From Month is Required')
    .typeError('Should be a number'),
  fromYear: Yup.number()
    .required('From Year is Required')
    .min(1980, 'Year should be on or after 1980')
    .max(moment().year(), 'Year should be on or before current year'),
  toMonth: Yup.number().when('isWorking', {
    is: false,
    then: Yup.number()
      .required('To Month is Required')
      .min(1, 'Minimum value 1')
      .max(12, 'Maximum value 12')
      .typeError('Should be a number'),
  }),
  toYear: Yup.number().when('isWorking', {
    is: false,
    then: Yup.number()
      .required('To Year is Required')
      .min(1980, 'Year should be on or after 1980')
      .max(moment().year(), 'Year should be on or before current year'),
  }),
});
