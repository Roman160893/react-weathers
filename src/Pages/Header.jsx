import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { fetchWeathers, setValueInputCity } from '../redux/actions/weathers';

const Header = () => {

   const [valueCity, setValueCity] = React.useState('')
   const [onRequest, setOnRequest] = React.useState(false)

   const dispatch = useDispatch()
   const valueInputCity = useSelector(state => state.weathers.valueInputCity)

   React.useEffect(() => {
      dispatch(fetchWeathers(valueInputCity));
   }, [onRequest])

   const handleOnRequest = (e) => {
      if (e.code === 'Enter' || e.code === 'NumpadEnter' || !e.code) {
         setOnRequest(!onRequest)
         dispatch(setValueInputCity(valueCity))
         setValueCity('')
      }
   }

   return (
      <header className='weather__header header'>
         <div className='header__search'>
            <h1>{valueInputCity}</h1>
            <div className='header__search-block'>
               <div className='header__input'>
                  <input
                     value={valueCity}
                     onChange={(e) => setValueCity(e.target.value)}
                     onKeyDown={handleOnRequest}
                     placeholder='Введіть місто...'
                  />
                  <FontAwesomeIcon icon={faLocationDot} />
               </div>
               <div
                  className='header__icon'
                  onClick={handleOnRequest}
               >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;