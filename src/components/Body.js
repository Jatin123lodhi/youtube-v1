import React from 'react'
import { Outlet } from 'react-router-dom';
import {SideBar} from './SideBar';
 
export const Body = () => {
  return (
    <div className='flex'>
      <SideBar/>
      {/* <MainContainer/>    we want dynamic changes so outlet will help
      <WatchPage/>
      <ResultPage/> */}
      <Outlet/>
    </div>
  )
}
