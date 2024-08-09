import React from 'react'
import { Button } from '@mui/material'
import ToggleHoc from './ToggleHoc'

 function Btns({isShow, toggleHandler}) {
  return (
    <div>
      <Button variant='contained' color='warning' className='hook_button' onClick={toggleHandler}>
        {isShow ? '<<<<' : '>>>>'}
      </Button>
      {isShow && <Button variant='outlined' color='warning'>Hello !</Button>}
    </div>
  )
}

export default ToggleHoc(Btns)