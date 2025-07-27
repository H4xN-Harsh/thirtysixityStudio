import React from 'react'
import Canvas from './Canvas'
import data from './data'

function App() {
  return (<>
    <div className='w-full relative min-h-screen text-white'>
      {data[0].map((canvasdets,index)=>(
        <Canvas details={canvasdets}/>
      ))

      }
    </div>
    <div className='w-full relative min-h-screen text-white'>
      {data[1].map((canvasdets,index)=>(
        <Canvas details={canvasdets}/>
      ))

      }
    </div>
    <div className='w-full relative min-h-screen text-white'>
      {data[2].map((canvasdets,index)=>(
        <Canvas details={canvasdets}/>
      ))

      }
    </div>
    </>
  )
}

export default App
