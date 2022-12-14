import * as Yup from 'yup';

export const interviewSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  course: Yup.string().required('Course is required'),
  description: Yup.string().required('Description is required'),
  displayPicture: Yup.string().required('Display image is required'),
  noOfLinks: Yup.number()
    .typeError('Only number required')
    .max(100, 'Be less than 100')
    .required('Noumber Of Links is required'),
  price: Yup.number()
    .typeError('Only number required')
    .max(5000, 'Be less than 5000')
    .required('Price is required'),
  interviewId : Yup.string()
});
