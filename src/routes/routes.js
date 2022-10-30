import {Route, Routes as RoutesDom} from 'react-router-dom'
import {Home} from '../pages/home'
export default function Routes() {
  return (
    <RoutesDom>
      <Route path='/' element={<Home/>}/>
    </RoutesDom>
  )
} 