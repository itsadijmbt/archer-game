const bow= document.querySelector('.bow');
const arr=document.querySelector('.arrow');
const target=document.querySelector('.target');
const cc=document.querySelector('.color');
const card=document.querySelector('.card');
const sc=document.querySelector('.sc');
const baller=document.querySelector('.baller');
const bodycontroller=document.querySelector('.body-controller');
const scorepts=document.querySelector('.pts');
const rebtn=document.querySelector('.retry');
const scpt=document.querySelector('.pts-c');
const arm=document.querySelector('.arrow-move')


let tpts=0;
let pts=0;
 bow.addEventListener('click',()=>{

  arm.style.display='block'
  arm.style.animationName='ar';
 setTimeout(getData,50); 

 setTimeout(()=>{
  arr.className='arrow'
 },200)


});
let cx=1;
function getData(){

  let arrowData= arr.getBoundingClientRect();

  console.log("arrow l",arrowData.left)
  console.log("arrow r",arrowData.right)
 
  let cen=parseFloat( (arrowData.left+arrowData.right)/2);

  let tdata=target.getBoundingClientRect();
  console.log("taget left",tdata.left)
  console.log("target right",tdata.right)
  let tdataLeftRange=tdata.left
 
  let targetCalc=parseFloat( (tdata.left+tdata.right)/2);


  let t =parseFloat((tdata.right-tdata.left)/6);
  const newB=document.createElement('div');
  newB.className='ballin';
     
  console.log("positoin of hitting ",Math.abs(targetCalc-cen));
  console.log("point barrier",t);

  if(  Math.abs(targetCalc-cen)<=parseFloat(targetCalc/2)  && cx<=3)
  {
 
    if(  Math.abs(targetCalc-cen)>2*t && Math.abs(targetCalc-cen)<=3*t ){tpts=30;
     
     cc.style.border="1rem solid black";
     card.textContent=tpts;
     newB.style.border="1rem solid black";

    }
    else if(  Math.abs(targetCalc-cen)<=2*t &&  Math.abs(targetCalc-cen)>1*t)
    {tpts=50;
      
      cc.style.border="1rem solid blue";
      card.textContent=tpts;
      newB.style.border="1rem solid blue";
    }
    else if( Math.abs(targetCalc-cen)<=1*t &&  Math.abs(targetCalc-cen)>t*0.5 )
    {tpts=70;
      
      card.textContent=tpts;
      cc.style.border="1rem solid red";
      newB.style.border="1rem solid red";
 }
    else if( Math.abs(targetCalc-cen)<=t*0.5 &&  Math.abs(targetCalc-cen)>=0)
    {tpts=100;
      
      cc.style.border="1rem solid yellow";
      card.textContent=tpts;
      newB.style.border="1rem solid yellow";
   }
   else{
    tpts=0;
      
      
      card.textContent=tpts;
      newB.style.border="1rem solid white";
   }
    
  }
  else{
    tpts=0;
    newB.style.border="1rem solid white";
  }
  
  arm.style.display='none';
  
  arm.style.animationName='none';
  baller.appendChild(newB)

  if(cx<=3){

  pts=pts+tpts;
  console.log(pts);
  sc.textContent=pts;
  }
  else{

   bodycontroller.style.filter="blur(10px)"
  
  
   
   scpt.style.justifyContent="center"
  
   rebtn.style.display='block';
   baller.removeChild(baller.lastChild);
   
  cc.style.border="1rem solid white";
  
 
    //to remove element all nodes     baller.innerHTML='';
  }

   cx++;
  tpts=0;
}

rebtn.addEventListener('click',resetGame);

function resetGame()
{
  while(baller.firstChild)
  {
   baller.removeChild(baller.firstChild);
  }
  bodycontroller.style.filter="blur(0px)";
  pts=0;
  sc.textContent='';
  if(window.innerWidth>700)
  scpt.style.justifyContent="end"
  else
  scpt.style.justifyContent="center"
  
  card.textContent='';
  rebtn.style.display='none';
  cx=1;
     
}
// 0 180 913.4375 1093.4375 centre 100pts
//0 180 894.40625 1074.40625 right 90pts
//0 180 884.890625 1064.890625 right 80pts
//0 180 875.375 1055.375 right 70pts
//0 180 856.34375 1036.34375 right 50pts
//0 180 837.3125 1017.3125 right 30pts

//0 180 932.46875 1112.46875 left 90pts
//0 180 951.5 1131.5 left 80pts
//0 180 961 1141 left 70pts
//0 180 974.328125 1154.328125 left 50pts
//0 180 993.359375 1173.359375 left 30pts

/* red arrow top 46.046875
g2.js:31 arrow l 864
g2.js:32 arrow r 1164
g2.js:33 arrow b 214.421875
g2.js:36 taget left 884.609375
g2.js:37 target right 1064.609375*/

/* green g2.js:30 arrow top 57.609375
g2.js:31 arrow l 864
g2.js:32 arrow r 1164
g2.js:33 arrow b 225.984375
g2.js:36 taget left 925.3125
g2.js:37 target right 1105.3125*/

