import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
        <Button name='All'/>
        <Button name='Gaming'/>
        <Button name='Songs'/>
        <Button name="Live"/>
        <Button name='News'/>
        <Button name='Gaming'/>
        <Button name='Cricket'/>
        <Button name="Live"/>
    </div>
  )
}

export default ButtonList