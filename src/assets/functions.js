import _01n from './img/01n.svg';
import _02d from './img/02d.svg';
import _02n from './img/02n.svg';
import _01d from './img/01d.svg';
import _03d from './img/03d.svg';
import _03n from './img/03n.svg';
import _04d from './img/04d.svg';
import _04n from './img/04n.svg';
import _09d from './img/09d.svg';
import _09n from './img/09n.svg';
import _10d from './img/10d.svg';
import _10n from './img/10n.svg';
import _11d from './img/11d.svg';
import _11n from './img/11n.svg';
import _13d from './img/13d.svg';
import _13n from './img/13n.svg';
import _50d from './img/50d.svg';
import _50n from './img/50n.svg';

export const getImage = (icon) => {
  switch (icon) {
    case '01d':
      return _01d;
    case '01n':
      return _01n;
    case '02d':
      return _02d;
    case '02n':
      return _02n;
    case '03d':
      return _03d;
    case '03n':
      return _03n;
    case '04d':
      return _04d;
    case '04n':
      return _04n;
    case '09d':
      return _09d;
    case '09n':
      return _09n;
    case '10d':
      return _10d;
    case '10n':
      return _10n;
    case '11d':
      return _11d;
    case '11n':
      return _11n;
    case '13d':
      return _13d;
    case '13n':
      return _13n;
    case '50d':
      return _50d;
    case '50n':
      return _50n;
    default:
      return _01d;
  }
};

export const upperCase = (srt) => (srt[0].toUpperCase() + srt.slice(1).toLowerCase()).trim();
