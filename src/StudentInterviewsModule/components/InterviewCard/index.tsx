import React from 'react';
// import { Col } from '@lipihipi/ec-ui';
import { HiCurrencyRupee } from 'react-icons/hi';
import { AiOutlineClockCircle } from 'react-icons/ai';

const InterviewCard = (props: any) => {
  const { getAssetUrl, interview, onInterviewClick } = props;
  return (
    <>
      <div className="col-sm-3" data-interview-id={interview._id}>
        <figure
          className="custom-thumbnail"
          style={{ minHeight: 289 }}
          onClick={() => onInterviewClick(interview._id)}
        >
          <span>
            <img src={getAssetUrl(interview.displayPicture)} />
          </span>
          <figcaption>
            <h3 title={interview.name}>{interview.name}</h3>
            <ul style={{ minHeight: 36 }}>
              <li>
                {interview.description.length > 80
                  ? interview.description.substr(0, 80) + '...'
                  : interview.description}
              </li>
            </ul>
            <p>
              <HiCurrencyRupee color={'#00a689'} />
              Try Now
            </p>
            <p>
              <AiOutlineClockCircle color={'#00a689'} />
              Attempts - {interview.noOfLinks}
            </p>
          </figcaption>
        </figure>
      </div>
    </>
  );
};

export default InterviewCard;
