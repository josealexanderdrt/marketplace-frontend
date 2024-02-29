import React from 'react'
import mundo_cubo from "../../src/assets/image/mundo_cubo.png"
import Formulary from './Formulary'
import Input_view from './Input_view'

const Image_worl = () => {
  return (
    <>
    <div className='home' /* style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} */ >
     <img className="cubos3" src={mundo_cubo} alt="mundo_cubos" />
     <Input_view />
     <Formulary />
    </div>
    </>
  )
}

export default Image_worl