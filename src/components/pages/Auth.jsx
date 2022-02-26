import React from 'react';
import { Footer } from '../organisms/index'
import { Login, Register } from '../moleculs/index'
import { useModal } from '../hooks/index';

export default function Auth() {
  const {show, toggleModal} = useModal()

  return (
    <>
    <Register toggleModal={toggleModal} />
    <Footer />
    <Login show={show} toggleModal={toggleModal} />
    </>
  )
}
