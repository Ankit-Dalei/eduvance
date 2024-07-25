import { configureStore } from '@reduxjs/toolkit'
import sliderReducer from '../Redux/sidebar'
import formReducer from '../Redux/formon'
import formbackReducer from '../Redux/formback'
import formmanabackReducer from '../Redux/formmanagementback'
import formcampusbackReducer from '../Redux/formcampusback'
import formdegreebackReducer from '../Redux/formdegreeback'

export const store = configureStore({
  reducer: {
    sider:sliderReducer,
    formr:formReducer,
    forbac:formbackReducer,
    formbac:formmanabackReducer,
    formcampus:formcampusbackReducer,
    formdegree:formdegreebackReducer,
  },
})