import {configureStore} from '@reduxjs/toolkit'
import counterRuducer from '../REDUX/CounterSlice'

export default configureStore({
    reducer:{
     counter :   counterRuducer
    }
})