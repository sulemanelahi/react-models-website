import { useState } from 'react';
import dayjs from 'dayjs';

import PersonItem from '../components/PersonItem';
import { data } from '../utils/MOCK_DATA';
import FilterBar from '../components/FilterBar';

const isSameOrAfter = require('dayjs/plugin/isSameOrAfter');
const isSameOrBefore = require('dayjs/plugin/isSameOrBefore');
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

function Search() {
  const [allData, setData] = useState(data);

  const generateGenderDataForDropdown = () => {
    return [...new Set(data.map((item) => item.gender))];
  };

  const generateProfessionDataForDropdown = () => {
    return [...new Set(data.map((item) => item.profession))];
  };

  const generateCastDataForDropdown = () => {
    return [...new Set(data.map((item) => item.cast))];
  };

  const handleFilterFirstName = (firstName) => {
    const filteredData = data.filter((item) => {
      if (item?.firstName.toLowerCase().includes(firstName?.toLowerCase())) {
        return item;
      }
      return false;
    });

    setData(filteredData);
  };

  const handleFilterEmail = (email) => {
    const filteredData = data.filter((item) => {
      if (item.email.toLowerCase().includes(email.toLowerCase())) {
        return item;
      }
      return false;
    });

    setData(filteredData);
  };

  const handleFilterGender = (gender) => {
    const filteredData = data.filter((item) => {
      if (item.gender === gender) {
        return item;
      }

      return false;
    });

    setData(filteredData);
  };

  const handleFilterProfession = (profession) => {
    const filteredData = data.filter((item) => {
      if (item.profession === profession) {
        return item;
      }

      return false;
    });

    setData(filteredData);
  };

  const handleFilterDate = (date, field) => {
    const filteredData = data.filter((item) => {
      if (field === 'from' && dayjs(item.date).isSameOrAfter(dayjs(date))) {
        return item;
      }
      return false;
    });

    setData(filteredData);
  };

  const handleFilterLastName = (lastName) => {
    const filteredData = data.filter((item) => {
      if (item?.lastName.toLowerCase().includes(lastName?.toLowerCase())) {
        return item;
      }

      return false;
    });

    setData(filteredData);
  };

  const handleCaste = (cast) => {
    const filteredData = data.filter((item) => {
      if (item?.cast.toLowerCase().includes(cast?.toLowerCase())) {
        return item;
      }

      return false;
    });

    setData(filteredData);
  };

  const handleShoeSize = (shoeSize) => {
    const filteredData = data.filter((item) => {
      if (item?.shoeSize === Number(shoeSize)) {
        return item;
      }

      return false;
    });

    setData(filteredData);
  };

  const handleHairColor = (hairColor) => {
    const filteredData = data.filter((item) => {
      if (item?.hairColor === Number(hairColor)) {
        return item;
      }

      return false;
    });

    setData(filteredData);
  };

  const handleHairLength = (hairLength) => {
    const filteredData = data.filter((item) => {
      if (item?.hairLength === Number(hairLength)) {
        return item;
      }

      return false;
    });

    setData(filteredData);
  };

  const handleBraSize = (braSize) => {
    const filteredData = data.filter((item) => {
      if (item?.braSize === Number(braSize)) {
        return item;
      }

      return false;
    });

    setData(filteredData);
  };

  const handleHeight = (height) => {
    const filteredData = data.filter((item) => {
      if (item?.height === Number(height)) {
        return item;
      }

      return false;
    });

    setData(filteredData);
  };

  const handleWeight = (weight) => {
    const filteredData = data.filter((item) => {
      if (item?.weight === Number(weight)) {
        return item;
      }

      return false;
    });

    setData(filteredData);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-3'>
          <FilterBar
            genders={generateGenderDataForDropdown()}
            professions={generateProfessionDataForDropdown()}
            casts={generateCastDataForDropdown()}
            onFirstNameFilter={handleFilterFirstName}
            onLastNameFilter={handleFilterLastName}
            onGenderFilter={handleFilterGender}
            onProfessionFilter={handleFilterProfession}
            onShoeSizeFilter={handleShoeSize}
            onHairColorFilter={handleHairColor}
            onHairLengthFilter={handleHairLength}
            onBraSizeFilter={handleBraSize}
            onHeightFilter={handleHeight}
            onWeightFilter={handleWeight}
            onCasteFilter={handleCaste}
            onDateFilter={handleFilterDate}
            onEmailFilter={handleFilterEmail}
          />
        </div>
        <div className='col-sm-9'>
          <div className='row mt-5'>
            {allData.map((item) => (
              <PersonItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
