import { format } from "date-fns"
import { uk } from 'date-fns/locale';
import { GET_WEATHER, SET_DATE, SET_LOADED, SET_VALUE } from "../types/type"

const initialState = {
   weathers: {},
   isLoaded: false,
   valueInputCity: 'Львів',
   dateNow: {
      date: '',
      hours: '',
      days: ''
   }
}

const upperCase = (srt) => srt[0].toUpperCase() + srt.slice(1).toLowerCase()

function weathers(state = initialState, action) {
   switch (action.type) {
      case GET_WEATHER: {
         return {
            ...state,
            weathers: action.payload,
            isLoaded: true
         }
      }
      case SET_LOADED: {
         return {
            ...state,
            isLoaded: action.payload
         }
      }
      case SET_VALUE: {
         return {
            ...state,
            valueInputCity: upperCase(action.payload)
         }
      }
      case SET_DATE: {
         return {
            ...state,
            dateNow: {
               date: format(new Date(), "dd MMMM yyyy ", { locale: uk }),
               hours: format(new Date(), "kk:mm:ss"),
               days: format(new Date(), "EEEE", { locale: uk })
            }
         }
      }

      default:
         return state
   }
}

export default weathers