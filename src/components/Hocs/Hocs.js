import React from 'react'
import Reactjs from './Libraries/Reactjs'
import Vuejs from './Libraries/Vuejs'
import Angularjs from './Libraries/Angularjs'
import Btns from './Toggle/Btns'

export default function Hocs() {
  return (
    <div>
        <h1>HOCs (Higher Order Component)</h1>
        <Reactjs />
        <Vuejs />
        <Angularjs />
        <hr />
        <Btns />
    </div>
  )
}
