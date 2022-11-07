import { faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchWeathers, setValueInputCity } from '../redux/actions/weathers.action';
import { getWeatherSelector } from '../redux/reducers/weathers.reducer';

const Header = () => {
  const [valueCity, setValueCity] = useState('');
  const [onRequest, setOnRequest] = useState(false);

  const dispatch = useDispatch();
  const { valueInputCity } = useSelector(getWeatherSelector);

  const handleOnRequest = (e) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter' || e.mouseDown || e.type === 'click') {
      setOnRequest(!onRequest);
      dispatch(setValueInputCity(valueCity));
      setValueCity('');
    }
  };

  const inputChangeHandler = (e) => setValueCity(e.target.value);

  useEffect(() => {
    dispatch(fetchWeathers(valueInputCity));
  }, [dispatch, onRequest, valueInputCity]);

  return (
    <header className="weather__header header">
      <div className="header__search">
        <h1>{valueInputCity}</h1>
        <div className="header__search-block">
          <div className="header__input">
            <input
              value={valueCity}
              onChange={inputChangeHandler}
              onKeyDown={handleOnRequest}
              placeholder="Введіть місто..."
            />
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
          <div className="header__icon" onClick={handleOnRequest}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
