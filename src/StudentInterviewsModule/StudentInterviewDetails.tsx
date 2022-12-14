import React from 'react';
import {
  // Advertisement,
  PageHeader, Button } from '@lipihipi/ec-ui';
import {
  IInterviewDocument,
  IInterviewListResponse,
} from '@lipihipi/client-sdk/dist/interview';
import swal from 'sweetalert';
import {PaymentDetailsModal} from '@lipihipi/promotion';
import EduCrackAPI from '@lipihipi/client-sdk';


import InterviewCard from './components/InterviewCard';
interface Props {
  getInterview: any;
  onSubscribe: any;
  getOtherInterviews: any;
  selectedCourse: any;
  onInterviewClick: any;
  viewAllOptionsClick: any;
  initCashFreePayment: any;
  id: string;
  title?: any;
  description?: string;
  breadCrumbs?: any;
  assetsBaseUrl?: string;
  getAssetUrl: (key: string) => string;
}
const StudentInterviewDetails: React.FC<Props> = ({
  getInterview,
  getOtherInterviews,
  selectedCourse,
  onInterviewClick,
  viewAllOptionsClick,
  onSubscribe,
  initCashFreePayment,
  getAssetUrl,
  id,
  title,
  breadCrumbs,
  description,
  // assetsBaseUrl
}) => {
  const [interview, setInterview] = React.useState<any>({});

  const [otherInterviews, setOtherInterviews] = React.useState<
    IInterviewListResponse
  >({
    totalItems: 0,
    interviews: [],
  });

  const [paymentModal, setPaymentModal] = React.useState("");

  React.useEffect(() => {
    if (id) {
      getInterview(id, { populate: true }).then((res: any) => {
        setInterview(res.data);
      });
    }
    if (selectedCourse._id) {
      getOtherInterviews({ course: selectedCourse._id, populate: true }).then(
        (response: any) => {
          setOtherInterviews(response.data);
        }
      );
    }
  }, [id]);

  React.useEffect(() => {
    if (id) {
      getInterview(id, { populate: true }).then((res: any) => {
        setInterview(res.data);
      });
    }
    if (selectedCourse._id) {
      getOtherInterviews({ course: selectedCourse._id, populate: true }).then(
        (response: any) => {
          setOtherInterviews(response.data);
        }
      );
    }
  }, [id, selectedCourse]);

  const userSubscribeForInterview = (interviewId: string) => {
    try {
      setPaymentModal(interviewId);
    } catch (err) {
      console.error(err);
      swal({
        title: 'Error',
        text: err.message || 'Server error!',
        icon: 'error',
        dangerMode: false,
      });
    }
  };

  if (!interview._id) {
    return null;
  }

  return (
    <>
      <div className="d-flex flex-wrap">
        <div className="main-mid">
          <PageHeader
            title={title || ''}
            breadCrumbs={
              breadCrumbs || [
                { title: 'Mock Interviews', link: '/course/interviews' },
                { title: `${interview.name || 'Interview Pack'}`, link: '#' },
              ]
            }
            description={
              description ||
              ''
            }
          />

          <div className="mock-interviews-box detail">
            <div className="d-md-flex justify-content-between align-items-center">
              <h4>{interview.name}</h4>
              {/* <div className="action-wrap">
                  <a  target="_blank" href={`${assetsBaseUrl}file/AnalyticsReport.pdf`} download>See a Sample Report</a>
                </div> */}
            </div>

            <div className="wrap">
              <div className="image">
                <img src={getAssetUrl(interview.displayPicture)} />
                <div className="mt-3 d-flex align-items-center">
                  <Button onClick={() => userSubscribeForInterview(interview._id)} shape={'primary'}>Purchase</Button>
                <p className="m-0 ml-3" style={{fontWeight: 600, color: '#239F87'}}>₹ {interview.price}</p>
                </div>
              </div>
              <div className="content">
                <p>
                  {interview.description}
                </p>
                <p>You will get <strong style={{fontWeight: 'bold'}}>{interview.noOfLinks} attempts</strong> to perform AI based
                  bock Interview Practice</p>
              </div>
            </div>
          </div>

          {otherInterviews.interviews.length != 0 && (
            <div className="practice-mock">
              <h3>
                 Available options
                <a href="javascript:void(0)" onClick={viewAllOptionsClick}>View All</a>
              </h3>
              <div className="row">
                {otherInterviews.interviews
                  .slice(0, 2)
                  .map((interview: IInterviewDocument) => (
                    <>
                      <InterviewCard
                        getAssetUrl ={getAssetUrl}
                        interview={interview}
                        onInterviewClick={onInterviewClick}
                      />
                    </>
                  ))}
                </div>
            </div>
          )}
        </div>
        {/* <Advertisement rewardsPoint={'200'} viewDetailsClick={() => {}} /> */}
      </div>
      {
        paymentModal && (
          <PaymentDetailsModal
            isOpen={!!paymentModal}
            onRequestClose={() => setPaymentModal("")}
            resourceName={interview.name}
            id={interview._id}
            type={"INTERVIEW"}
            applyCoupon={EduCrackAPI.payment.applyStudentCoupon}
            modulePurchase={onSubscribe}
            moduleData = {interview}
            viewAllOption = {viewAllOptionsClick}
            initCashFreePayment={initCashFreePayment}
          />
        )
      }
    </>
  );
};

export default StudentInterviewDetails;
