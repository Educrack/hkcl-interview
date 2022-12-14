import {
  TCreateResource,
  TGetResource,
  // TUpdateResource,
} from '@lipihipi/client-sdk/dist/types';
import { IResumeDocument } from '@lipihipi/client-sdk/dist/resume';

export interface IProject {
  projectName: string;
  company: string;
  technology: string[];
  url: string;
  teamSize: number;
  year: number;
  description: string;
}

export interface ISkill {
  name: string;
  rating: number;
}

export interface IExperience {
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  isWorking: boolean;
}

export interface IInternship {
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  isWorking: boolean;
}

export interface IEducation {
  schoolName: string;
  degree: string;
  percentage: string;
  passedYear: number;
  passedMonth: number;
  isStudying: boolean;
}

export interface IResume {
  firstName: string;
  lastName: string;
  emailId: string;
  mobile: string;
  gender: string;
  passport: boolean;
  city: string;
  pincode: string;
  languageKnown: string;
  nationality: string;
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  address: string;
  objective: string;
  hobbies: string;
  educations: IEducation[];
  internships: IInternship[];
  experiences: IExperience[];
  skills: ISkill[];
  projects: IProject[];
  draft: boolean;
}

export interface ICreateResumeProps {
  getResume: TGetResource<IResumeDocument>;
  createResume: TCreateResource<IResume, IResumeDocument>;
  updateResume: (id: string, resume: IResume) => Promise<import("axios").AxiosResponse<any>>;
  id?: string;
}
