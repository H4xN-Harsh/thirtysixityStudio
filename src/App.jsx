import React, { useEffect } from 'react'
import Canvas from './Canvas'
import data from './data'
import LocomotiveScroll from 'locomotive-scroll'


function App() {
  useEffect(()=>{
    const locomotiveScroll = new LocomotiveScroll(); 
  },[])
  return (<>
    <div className='w-full relative min-h-screen text-white font-mono'>
      {data[0].map((canvasdets,index)=>(
        <Canvas details={canvasdets}/>
      ))}
    <div className='w-full h-screen '>
      <nav className=' w-full p-8 flex justify-between'>
        <div className='brand text-2xl font-bold'>BlackCode.Studio</div>
        <div className='link flex gap-10'>{
          ["Home","About","Projects","Contact"].map((link,index)=>(
            <a key={index} href={`#${link.toLowerCase()}`} className='text-md hover:text-gray-300'>{link}</a>
          ))
        }</div>
      </nav>
      <div className='textcontainer px-[20%] w-full'>

      <div className='text w-[40%]  '>
        <h3 className='text-3xl leading-[1.5]'>At BlackCode_<h1 className='text-5xl inline font-extrabold'>Studio</h1>, we build immersise digital experience for brands with a purpose</h3>
        <p className='text-md w-[80%] mt-10 font-large'>We are a team of designers,developer,and startegists who are passionate about creating digital experiences that are both beautiful and functional</p>
        <p className='mt-15'>scroll</p>
      </div>
      </div>
      <div className='overflow-x-hidden'>

      <div className='w-full absolute bottom-0 left-0'>
        <h1 className='text-[12rem] font-normal tracking-tight leading-none'>BlackCode.Studio</h1>
      </div>
      </div>
    </div>
    
    </div>
    <div className='w-full h-screen text-white mt-32 px-10'>
      <h1 className='text-8xl'>About the Brand</h1>
    <p className='text-4xl leading-[1.8] w-[80%]  mt-10 font-light'>
      We are a team of designers,developer,and startegists who are passionate about creating digital experiences that are both beautiful and functional
    </p>
    </div>
    
    
    </>
  )
}

export default App
