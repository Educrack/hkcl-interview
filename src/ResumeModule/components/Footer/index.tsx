import React from 'react';
import { Button } from '@lipihipi/ec-ui';

const Footer = ({
  onSubmit,
   onBack,
   onPreview,
   onPersonalInfoPreview,
   onPersonalInfoSubmit
   }: any) => {
  return (
    <div className="button-group justify-content-end mt-5">
      
      <div className="d-flex align-items-center">
        {onBack && (
          <Button type="button" onClick={onBack} shape="secondary">
            Back
          </Button>
        )}
        {onPersonalInfoPreview && (
          <Button type="submit" onClick={onPersonalInfoSubmit} shape="primary">
            Save &amp; Preview
          </Button>
        )}
        {!onPreview && (
          <Button onClick={onSubmit} type="submit" shape="primary">
          Save
        </Button>
        )}
        {onPreview && (
          <Button type="submit" onClick={onSubmit} shape="primary">
            Save &amp; Preview
          </Button>
        )}      
      </div>
    </div>
  );
};

export default Footer;
