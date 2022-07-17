import dayjs from 'dayjs';

const age = (dateOfBirth) => dayjs?.(new Date()).diff(dateOfBirth, 'month');

const PersonItem = ({ item }) => {
  return (
    <div className='col-sm-4'>
      <div className='card my-2'>
        <img src={item?.picture} className='img-fluid card-img-top' alt='' />
        <div className='card-body'>
          <h5 className='card-title'>
            {item?.firstName} {item?.lastName}
          </h5>
          <p className='card-text'>{item?.profession}</p>
          <p className='card-text'>{item?.gender}</p>
          <p className='card-text'>Age: {age(item?.dateOfBirth)}</p>
          {/* {/* <p className='card-text'>Age: {age(item?.dateOfBirth)}</p> */}
          {/* <p className='card-text'>{dayjs(item?.dateOfBirth).format('DD MMMM YYYY')}</p> */}
        </div>
      </div>
    </div>
  );
};

export default PersonItem;
