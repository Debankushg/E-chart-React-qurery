import React from 'react'

const Service = () => {
    const  [fullScreen, setFullScreen] = useState()

     

   let goFullScreen = () =>{

        let elem = document.getElementById("main");
        
        if(elem.requestFullscreen){
            elem.requestFullscreen();
        }
        else if(elem.mozRequestFullScreen){
            elem.mozRequestFullScreen();
        }
        else if(elem.webkitRequestFullscreen){
            elem.webkitRequestFullscreen();
        }
        else if(elem.msRequestFullscreen){
            elem.msRequestFullscreen();
        }
        }
         setFullScreen =goFullScreen()

  return (
    <>
    <h1>Hello India</h1>
    <button onClick={setFullScreen}>Enable Full Screen</button>

    </>
  )
}

export default Service