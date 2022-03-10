import React from 'react';
import { SearchHeader } from '../moleculs/index'
import { NavBar, ContainerSurveys, Footer } from '../organisms/index'

export default function Surveys() {
  return (
    <>
      <NavBar />
      <SearchHeader />
      <ContainerSurveys />
      <Footer />
    </>
  )
}
