import * as Yup from 'yup';

export const PersonalSchema = Yup.object().shape({
  firstName: Yup.string().required('FirstName is Required'),
  lastName: Yup.string().required('LastName is Required'),
  emailId: Yup.string().required('emailId is Required'),
  mobile: Yup.string().required('mobile is Required'),
  gender: Yup.string().required('gender is Required'),
  passport: Yup.string().required('passport is Required'),
  city: Yup.string().required('city is Required'),
  pincode: Yup.string().required('pincode is Required'),
  languageKnown: Yup.string().required('languageKnown is Required'),
  nationality: Yup.string().required('nationality is Required'),
  fatherName: Yup.string().required('fatherName is Required'),
  fatherOccupation: Yup.string().required('fatherOccupation is Required'),
  motherName: Yup.string().required('motherName is Required'),
  motherOccupation: Yup.string().required('motherOccupation is Required'),
  address: Yup.string().required('address is Required'),
  objective: Yup.string().required('objective is Required'),
  hobbies: Yup.string().required('hobbies is Required')
});
