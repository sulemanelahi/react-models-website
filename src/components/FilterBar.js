import { useState } from 'react';

const FilterBar = ({
  genders,
  professions,
  casts,
  onFirstNameFilter,
  onProfessionFilter,
  onGenderFilter,
  onDateFilter,
  onLastNameFilter,
  onShoeSizeFilter,
  onHairColorFilter,
  onHairLengthFilter,
  onBraSizeFilter,
  onHeightFilter,
  onWeightFilter,
  onCasteFilter,
}) => {
  const [filters, setFilters] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    age: 0,
    profession: '',
    shoesize: null,
    hairColor: null,
    hairLength: null,
    braSize: null,
    height: null,
    weight: null,
    cast: '',
  });

  const handleInput = (field) => (event) => {
    const { value } = event.target;

    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case 'firstName':
        onFirstNameFilter(value);
        break;
      case 'lastName':
        onLastNameFilter(value);
        break;

      case 'hairColor':
        onHairColorFilter(value);
        break;

      case 'hairLength':
        onHairColorFilter(value);
        break;

      case 'braSize':
        onBraSizeFilter(value);
        break;

      case 'height':
        onHeightFilter(value);
        break;

      case 'weight':
        onWeightFilter(value);
        break;

      case 'cast':
        onCasteFilter(value);
        break;
      case 'gender':
        onGenderFilter(value);
        break;
      case 'profession':
        onProfessionFilter(value);
        break;
      case 'shoeSize':
        onShoeSizeFilter(value);
        break;
      case 'from':
        onDateFilter(value, 'from');
        break;
      case 'to':
        break;
      default:
        break;
    }
  };

  return (
    <div className='row my-5'>
      <div className='col'>
        <h4 className='border-bottom'>Filters</h4>
      </div>
      <div className='col-sm-12 my-2'>
        <label htmlFor='name'>First</label>
        <input type='text' className='form-control' id='firstName' value={filters.firstName} onChange={handleInput('firstName')} />
      </div>
      <div className='col-sm-12 my-2'>
        <label htmlFor='name'>Last Name</label>
        <input type='text' className='form-control' id='lastName' value={filters.lastName} onChange={handleInput('lastName')} />
      </div>
      <div className='col-sm-12 my-2'>
        <label htmlFor='gender'>Gender</label>
        <select className='form-control' id='gender' onChange={handleInput('gender')}>
          <option value=''>Select</option>
          {genders.map((gender) => (
            <option value={gender} key={gender}>
              {gender}
            </option>
          ))}
        </select>
      </div>
      {/* age */}
      {/* <div className='col-sm-12 my-2'>
        <label htmlFor='email'>Email</label>
        <input type='text' className='form-control' id='email' onChange={handleInput('email')} />
      </div> */}
      {/* age */}
      {/* <div className='col-sm-12 my-2'>
        <label htmlFor='startDate'>From</label>
        <input type='date' className='form-control' id='startDate' onChange={handleInput('from')} />
      </div>
      <div className='col-sm-12 my-2'>
        <label htmlFor='endDate'>To</label>
        <input type='date' className='form-control' id='endDate' onChange={handleInput('to')} />
      </div> */}
      <div className='col-sm-12 my-2'>
        <label htmlFor='profession'>Profession</label>
        <select className='form-control' id='profession' onChange={handleInput('profession')}>
          <option value=''>Select</option>
          {professions.map((profession) => (
            <option value={profession} key={profession}>
              {profession}
            </option>
          ))}
        </select>
      </div>
      <div className='col-sm-12 my-2'>
        <label htmlFor='shoeSize'>Shoe Size</label>
        <input type='text' className='form-control' id='shoeSize' value={filters.shoesize} onChange={handleInput('shoeSize')} />
      </div>
      <div className='col-sm-12 my-2'>
        <label htmlFor='hairColor'>Hair Color</label>
        <input type='text' className='form-control' id='hairColor' value={filters.hairColor} onChange={handleInput('hairColor')} />
      </div>
      <div className='col-sm-12 my-2'>
        <label htmlFor='hairLength'>Hair Length</label>
        <input type='text' className='form-control' id='hairLength' value={filters.hairLength} onChange={handleInput('hairLength')} />
      </div>
      <div className='col-sm-12 my-2'>
        <label htmlFor='braSize'>Bra Size</label>
        <input type='text' className='form-control' id='braSize' value={filters.braSize} onChange={handleInput('braSize')} />
      </div>
      <div className='col-sm-12 my-2'>
        <label htmlFor='height'>Height</label>
        <input type='text' className='form-control' id='height' value={filters.height} onChange={handleInput('height')} />
      </div>
      <div className='col-sm-12 my-2'>
        <label htmlFor='weight'>Weight</label>
        <input type='text' className='form-control' id='weight' value={filters.weight} onChange={handleInput('weight')} />
      </div>
      <div className='col-sm-12 my-2'>
        <label htmlFor='cast'>Cast</label>
        <select className='form-control' id='cast' onChange={handleInput('cast')}>
          <option value=''>Select</option>
          {casts.map((cast) => (
            <option value={cast} key={cast}>
              {cast}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
