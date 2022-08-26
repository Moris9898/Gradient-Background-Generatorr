import '../all.css'
import React, {useRef, useState, useEffect} from 'react'


function Home() {

  const inputref=useRef()
  const inputrefri=useRef()
  const inputrefle=useRef()
  const parref=useRef()
  const chgco = () => {
    inputref.current.style.backgroundImage= `linear-gradient(to right, ${inputrefri.current.value}, ${inputrefle.current.value})`
  }
  const chgtx = () => {
    parref.current.textContent =`linear-gradient(to right, ${inputrefri.current.value}, ${inputrefle.current.value})`
  }

  useEffect(() =>
  {
    inputrefri.current.value= '#59FF00'
    inputrefle.current.value='#97990A'
    chgtx()
  })
  return (
    <div className='app' ref={inputref}  >
          
        <h1  >Background Generator</h1>
        <h2> Current Background</h2>
        <form className='color-pickeur' onChange={chgtx}>
          <input type="color"  ref={inputrefri}    onChange={chgco}  />
          <input type="color" ref={inputrefle}  onChange={chgco} />
        </form>
        <p ref={parref} className='paratxt' ></p>
        
    
    </div>
  )
}

export default Home