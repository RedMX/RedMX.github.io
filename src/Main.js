import React, {useState } from "react";
import {useScroll,animated } from '@react-spring/web'
function map(x, in_min, in_max, out_min, out_max) {
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
function TextPL() {
  return (
    "I'm from Poland and I'm currently attending a technical school, majoring in programming technology. I know languages ​​such as C#, JavaScript, Python. I can create websites using HTML and CSS, I also have experience with programming microcontrollers using Arduino IDE." 
  );
}
export default function Main() {
  const [hght,setHeight]=useState(0);
  const [_,setPos] = useState(20);
  const {scrollYProgress}=useScroll({
    onChange: ({ value:  {scrollY}  }) => {

        
          if(document.getElementById("txt2")!==null) {
            setHeight(document.getElementById("txt2").offsetHeight);
          }
          setPos(scrollY);
         

   
     
    }},
  );
 
   if(scrollYProgress.animation.values[0]!==undefined) {
    
    if(scrollYProgress.animation.values[0]._value<0.2) {
     
    return (
    <>
   
   
     <animated.div style={{opacity: map(scrollYProgress.animation.values[0]._value,0,0.2,1,0)}}>
     
      <h1 className="abt" >⬇️About me⬇️</h1>
      
     
    </animated.div> 
  





    </>
    );
    } else if(scrollYProgress.animation.values[0]._value>0.2 && scrollYProgress.animation.values[0]._value<0.4) {
     
      return (
     
     <>
      <animated.h1 style={{left: map(scrollYProgress.animation.values[0]._value,0.21,0.4,window.innerWidth,0)+"px"}} className="text title" >Hi, I'm Michał </animated.h1>
      <animated.p style={{left: map(scrollYProgress.animation.values[0]._value,0.21,0.4,window.innerWidth,0)+"px",top: "100px",width:"100%"}} className="text" ><TextPL/></animated.p>
      </>
      );
  }
  else if(scrollYProgress.animation.values[0]._value>0.4 && scrollYProgress.animation.values[0]._value<0.5) {
     
    return (
   
   <>
    <animated.h1 style={{left: "0px"}} className="text title" >Hi, I'm Michał </animated.h1>
    <animated.p style={{left: "0px",top: "100px",width:"100%"}} className="text" ><TextPL/></animated.p>
  </>
    );
}  else if(scrollYProgress.animation.values[0]._value>0.5 && scrollYProgress.animation.values[0]._value<0.7) {
     
  return (
 
 <> 
 <animated.h1 style={{left: map(scrollYProgress.animation.values[0]._value,0.5,0.7,0,window.innerWidth)+"px"}} className="text title" >Hi, I'm Michał </animated.h1>
  <animated.p style={{left: map(scrollYProgress.animation.values[0]._value,0.5,0.7,0,window.innerWidth)+"px",top: "100px",width:"100%"}} className="text" ><TextPL/></animated.p>
  </>

  );
}
else if(scrollYProgress.animation.values[0]._value>0.7 && scrollYProgress.animation.values[0]._value<0.85) {
     
  return (
 
   
    <animated.div id="circle" style={{width: map(scrollYProgress.animation.values[0]._value,0.7,0.85,0,window.innerHeight+window.innerWidth),height: map(scrollYProgress.animation.values[0]._value,0.7,0.85,0,window.innerHeight+window.innerWidth)}}>
     
    
    
   
  </animated.div> 

  );
}
else if(scrollYProgress.animation.values[0]._value>0.85) {
    
  return (
 
   
    <animated.div id="end" >
    <animated.div style={{opacity: map(scrollYProgress.animation.values[0]._value,0.85,1,0,1)}}>
      <h2 className="center" style={{fontSize:"3vw"}}>This website was made using react.js and the react-spring library</h2>
      <h3 className="center" id="txt2" style={{top:"100px",fontSize:"3vw"}}>⬇️My github profile⬇️</h3>
      <button onClick={redir} className="center" id="git" style={{top:hght*2+100}}>
      <i style={{scale:"2"}} className="fa-brands fa-github"></i>
      </button>
    </animated.div>
  </animated.div> 

  );
}
} else {
  return (
    <>
   
   
     <animated.div >
     
      <h1 className="abt" >⬇️About me⬇️</h1>
      
     
    </animated.div> 
  





    </>
    );
}

  
}

function redir() {
  window.open("https://github.com/RedMX");
}