import React from 'react';
import { PageHeader, Button } from '@lipihipi/ec-ui';
import { Form, Input, Select, ImageCropper } from '@lipihipi/form';
import { interviewSchema } from './Interview.schema';
import { initialValues } from './helper';
import swal from 'sweetalert';

const mapOptions = (values: any[]) => {
  return values.map(value => ({ label: value.name, value: value._id }));
};

export default function CreateInterviews(props: any) {
  const {
    createAsset,
    deleteFile,
    getAssetUrl,
    createInterview,
    updateInterview,
    getCourses,
    getInterview,
    onAddEditSuccess,
    id,
    title,
    breadCrumbs,
  } = props;

  const [courses, setCourse] = React.useState<any>({
    totalItems: 0,
    courses: [],
  });
  const [initialVal, setinitialVal] = React.useState({});
  const formValues = initialValues(initialVal);
  React.useEffect(() => {
    if (id)
      getInterview(id).then((res: any) => {
        console.log('res.data', res.data);
        setinitialVal(res.data);
      });

    getCourses({all:true}).then((response: any) => {
      setCourse(response.data);
    });
  }, []);

  const handleSubmit = (values: any) => {
    let payload = {
      ...values,
      price: parseFloat(values.price),
    };

    let fn = id
      ? updateInterview({ ...payload, _id: id })
      : createInterview(payload);
    fn.then(({ status }: any) => {
      if (status === 200) {
        swal({
          title: 'Success',
          text: id ? 'Interview updated' : 'Interview Created',
          icon: 'success',
        }).then(function() {
          onAddEditSuccess();
        });
      } else {
        swal({
          title: 'Error',
          text: 'Server error!',
          icon: 'error',
          dangerMode: false,
        });
      }
    }).catch((error: any) => {
      swal({
        title: 'Error',
        text: `Server error! ${error}`,
        icon: 'error',
        dangerMode: false,
      });
    })
  };

  return (
    <section className="main-structure">
      <PageHeader
        title={title || 'Add Interview'}
        breadCrumbs={
          breadCrumbs || [
            { title: 'Home', link: '/dashboard' },
						{ title: 'Interviews', link: '/admin/manage-interviews' },
						{ title: 'Edd Interview', }
          ]
        }
      />

      <Form
        initialValues={formValues}
        validationSchema={interviewSchema}
        onSubmit={handleSubmit}
        render={({ values, errors, ...rest }: any) => (
          <>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <Input
                  id={'name'}
                  name={'name'}
                  label={'Interview Name'}
                  required
                  placeholder="Enter the interview name"
                />

                <Select
                  id="course"
                  name="course"
                  label="Course"
                  options={mapOptions(courses.courses)}
                  required
                />

                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    rows={4}
                    className="primary-form-control"
                    name="description"
                    id="description"
                    value={values.description}
                    onChange={e =>
                      rest.setFieldValue('description', e.target.value)
                    }
                    placeholder="Enter description here"
                  ></textarea>
                  <div
                    className="invalid-feedback"
                    style={{
                      display: errors.description ? 'block' : 'none',
                    }}
                  >
                    {errors.description}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <Input
                      id="price"
                      label="Offer Price(In Rupees)"
                      name="price"
                      type="text"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <Input
                      id="actualPrice"
                      name="actualPrice"
                      label="Actual Price(In Rupees)"
                      type="text"
                    />
                  </div>
                </div>
                <div className="row">
                <div className="col-md-6">
                    <Input
                      id={'noOfLinks'}
                      name={'noOfLinks'}
                      label={'No of Links'}
                      required
                      placeholder="Enter No of Links"
                    />
                  </div>
                  <div className="col-md-6">
                    <Input
                      id="interviewId"
                      label="Interview Id"
                      name="interviewId"
                      type="text"
                      placeholder="Enter the interview ID"
                    />
                    
                    <p style={{ fontSize: "12px" }}>
                      This ID should match with
                      <a style={{ color: "red" }} href="https://services.cognicue.in/educrack" target="_blank"> cognicue </a>
                      Inetrview ID.

                    </p>
                  </div>
                  
                  </div>
              </div>

              <div className="col-md-6 col-lg-8">
                <div className="form-group">
                  <ImageCropper
                    id="displayPicture"
                    name="displayPicture"
                    previewPic={values?.displayPicture}
                    label="Choose Image"
                    className="test"
                    required
                    ratio={2 / 1}
                    accept={['image/jpeg', 'image/jpg', 'image/png']}
                    getAssetUrl={getAssetUrl}
                    uploadFile={createAsset}
                    deleteFile={deleteFile}
                    getUploadFile={e => {
                      rest.setFieldValue('displayPicture', e);
                    }}
                    getDeleteFile={() => {
                      rest.setFieldValue('displayPicture', undefined);
                    }}
                  />
                </div>
              </div>
            </div>

            <Button shape="primary" type="submit" className="mt-3">
              Save
            </Button>
          </>
        )}
      />
    </section>
  );
}
