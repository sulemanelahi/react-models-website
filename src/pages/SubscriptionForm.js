import { useState, useRef } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { create } from '../api/model';

const genders = ['Male', 'Female', 'Others'];
const professions = ['Commedian', 'Actor', 'Actress', 'Model'];
const casts = ['Movies', 'Actor', 'Actress', 'Model', 'Others'];

const SubscriptionForm = () => {
  const avatarRef = useRef(null);

  const values = {
    firstName: '',
    lastName: '',
    picture: '',
    gender: '',
    dateOfBirth: '',
    profession: '',
    shoeSize: undefined,
    hairColor: undefined,
    hairLength: undefined,
    braSize: undefined,
    waistSize: undefined,
    height: undefined,
    weight: undefined,
    cast: '',
  };

  const modelSchema = Yup.object().shape({
    firstName: Yup.string().max(20, 'Too Long!').required('First Name is required'),
    lastName: Yup.string().max(20, 'Too Long!').required('Last Name is required'),
    gender: Yup.string().required('Gender is required'),
    picture: Yup.string().required('Picture is required'),
    dateOfBirth: Yup.string().required('Date of birth is required'),
    profession: Yup.string().required('Profession is required'),
    shoeSize: Yup.number().required('Shoe size is required'),
    hairColor: Yup.number().required('Hair color is required'),
    hairLength: Yup.number().required('Hair length is required'),
    braSize: Yup.number().required('Bra size is required'),
    waistSize: Yup.number().required('Waist size is required'),
    height: Yup.number().required('Height is required'),
    weight: Yup.number().required('Weight is required'),
    cast: Yup.string().required('Cast is required'),
  });

  let avatar;

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (values) => {
    console.log(values);
    const response = create(values);
    response
      .then((res) => {
        setSuccess(true);
      })
      .catch((err) => {
        setError(true);
      });
    setSuccess(false);
    setError(false);
  };

  return (
    <Formik enableReinitialize initialValues={values} validationSchema={modelSchema} onSubmit={handleSubmit}>
      {({ errors, touched, handleSubmit, isSubmitting, getFieldProps, dirty, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <div className='container my-5'>
            <div className='row fs-5'>
              <div className='mb-3 my-2 w-25'>
                <label htmlFor='firstName' className='form-label'>
                  First Name
                </label>
                <input type='text' className='form-control' id='firstName' {...getFieldProps('firstName')} />
                <ErrorMessage name='firstName' className='text-danger' component='div' />
              </div>
              <div className='mb-3 my-2 w-25'>
                <label htmlFor='lastName' className='form-label'>
                  Last Name
                </label>
                <input type='text' className='form-control' {...getFieldProps('lastName')} id='lastName' />
                <ErrorMessage name='lastName' className='text-danger' component='div' />
              </div>
            </div>
            <div className='mb-3 my-2 fs-5'>
              <b>Picture</b>
              <div
                className='rounded-circle border d-flex justify-content-center align-items-center'
                style={{ width: '60px', height: '60px' }}
                alt='Avatar'
                onClick={() => {
                  avatarRef.current.click();
                }}
              >
                {!avatar && <i className='fas fa-user-alt fa-3x text-info'></i>}

                {avatar && <img src={avatar} className='rounded-circle' style={{ width: '40px', height: '40px' }} alt='hello world' />}
              </div>
              <input
                type='file'
                name='avatar'
                ref={avatarRef}
                onChange={(event) => {
                  setFieldValue('picture', event.currentTarget.files[0]);
                  avatar = URL.createObjectURL(event.currentTarget.files[0]);
                }}
                hidden
              />
              <ErrorMessage name='picture' className='text-danger' component='div' />
            </div>
            <div className='row fs-5'>
              <div className='mb-3  w-25'>
                <label htmlFor='gender'>Gender</label>
                <select className='form-control' id='gender' {...getFieldProps('gender')}>
                  <option value=''>Select</option>
                  {genders.map((gender) => (
                    <option value={gender} key={gender}>
                      {gender}
                    </option>
                  ))}
                </select>
              </div>
              <ErrorMessage name='gender' className='text-danger' component='div' />
            </div>
            <div className='row fs-5'>
              <div className='col-sm-12 w-25 my-2'>
                <label htmlFor='dateOfBirth'>Date of Birth</label>
                <input type='date' className='form-control' id='dateOfBirth' {...getFieldProps('dateOfBirth')} />
                <ErrorMessage name='dateOfBirth' className='text-danger' component='div' />
              </div>
            </div>
            <div className='row fs-5'>
              <div className='mb-3  w-25'>
                <label htmlFor='profession'>Profession</label>
                <select className='form-control' id='profession' {...getFieldProps('profession')}>
                  <option value=''>Select</option>
                  {professions.map((profession) => (
                    <option value={profession} key={profession}>
                      {profession}
                    </option>
                  ))}
                </select>
                <ErrorMessage name='profession' className='text-danger' component='div' />
              </div>
            </div>
            <div className='mb-3 my-2 w-25'>
              <label htmlFor='shoeSize' className='form-label'>
                Shoe Size
              </label>
              <input type='number' className='form-control' id='shoeSize' {...getFieldProps('shoeSize')} />
              <ErrorMessage name='shoeSize' className='text-danger' component='div' />
            </div>
            <div className='mb-3 my-2 w-25'>
              <label htmlFor='hairColor' className='form-label'>
                Hair Color
              </label>
              <input type='number' className='form-control' id='hairColor' {...getFieldProps('hairColor')} />
              <ErrorMessage name='hairColor' className='text-danger' component='div' />
            </div>
            <div className='mb-3 my-2 w-25'>
              <label htmlFor='hairLength' className='form-label'>
                Hair Length
              </label>
              <input type='number' className='form-control' id='hairLength' {...getFieldProps('hairLength')} />
              <ErrorMessage name='hairLength' className='text-danger' component='div' />
            </div>
            <div className='mb-3 my-2 w-25'>
              <label htmlFor='braSize' className='form-label'>
                Bra Size
              </label>
              <input type='number' className='form-control' id='braSize' {...getFieldProps('braSize')} />
              <ErrorMessage name='braSize' className='text-danger' component='div' />
            </div>
            <div className='mb-3 my-2 w-25'>
              <label htmlFor='waistSize' className='form-label'>
                Waist Size <small>(in cm)</small>
              </label>
              <input type='number' className='form-control' id='waistSize' {...getFieldProps('waistSize')} />
              <ErrorMessage name='waistSize' className='text-danger' component='div' />
            </div>
            <div className='mb-3 my-2 w-25'>
              <label htmlFor='height' className='form-label'>
                Height <small>(in cm)</small>
              </label>
              <input type='number' className='form-control' id='height' {...getFieldProps('height')} />
              <ErrorMessage name='height' className='text-danger' component='div' />
            </div>
            <div className='mb-3 my-2 w-25'>
              <label htmlFor='weight' className='form-label'>
                Weight <small>(in cm)</small>
              </label>
              <input type='number' className='form-control' id='weight' {...getFieldProps('weight')} />
              <ErrorMessage name='weight' className='text-danger' component='div' />
            </div>
            <div className='mb-3 my-2 w-25'>
              <label htmlFor='cast' className='form-label'>
                Type of castings you will like to attend
              </label>
              <select className='form-control' id='cast' {...getFieldProps('cast')}>
                <option value=''>Select</option>
                {casts.map((cast) => (
                  <option value={cast} key={cast}>
                    {cast}
                  </option>
                ))}
              </select>
              <ErrorMessage name='cast' className='text-danger' component='div' />
            </div>
            {success && <div>Submitted</div>}
            {error && <div>Something went wrong</div>}
            <button type='submit' className='btn btn-primary mb-3'>
              Subscribe
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default SubscriptionForm;
