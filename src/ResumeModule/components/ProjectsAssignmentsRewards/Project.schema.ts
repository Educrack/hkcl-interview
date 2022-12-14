import moment from 'moment';
import * as Yup from 'yup';

export const ProjectSchema = Yup.object().shape({
  projectName: Yup.string().required('Project Name is Required'),
  company: Yup.string().required('Company Name is Required'),
  technology: Yup.string().required('Technology is Required'),
  url: Yup.string().matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    'Enter correct url!'
  ),
  teamSize: Yup.number()
    .required('Team is required')
    .typeError('Should Be a Number'),
  year: Yup.number()
    .required('Year is Required')
    .min(1980, 'Year should be on or after 1980')
    .max(moment().year(), 'Year should be on or before current year')
    .typeError('Should Be a Number')
    .nullable(),
  description: Yup.string(),
});
