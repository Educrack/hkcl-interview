import {
  IListParams,
  TCreateResource,
  TGetResource,
  TListResource,
  TUpdateResource,
  ObjectId
} from '@lipihipi/client-sdk/dist/types';

import {
  IInterview,
  IInterviewDocument,
  IInterviewListResponse
} from '@lipihipi/client-sdk/dist/interview';
import { ICourseListResponse } from '@lipihipi/client-sdk/dist/course';

export interface IInterviewListParams extends IListParams {
  course?: ObjectId;
  status?: ObjectId;
}

export interface IInterviewListProps {
  user: any;
  statusUpdate: any;
  getInterviews: TListResource<IListParams, IInterviewListResponse>;
  getCourses: TListResource<IListParams, ICourseListResponse>;
  onAdd: () => void;
  onEdit: (interview: any) => void;
  title?: string;
  breadCrumbs?: any[];
  currentModulePermission: any[];
}

