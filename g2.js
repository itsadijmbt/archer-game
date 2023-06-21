const bow= document.querySelector('.bow');
const arr=document.querySelector('.arrow');
const target=document.querySelector('.target');
const cc=document.querySelector('.color');
const card=document.querySelector('.card');
const sc=document.querySelector('.sc');
const baller=document.querySelector('.baller')
const bodycontroller=document.querySelector('.body-controller')
const scorepts=document.querySelector('.pts')
const rebtn=document.querySelector('.retry')


let tpts=0;
let pts=0;
 arr.addEventListener('click',()=>{
 arr.className='arrow-mov';


 setTimeout(getData,100); 

 setTimeout(()=>{
  arr.className='arrow'
 },200)
});
let cx=1;
function getData(){

  
  let tdata=target.getBoundingClientRect();
 
  let tdataLeftRange=tdata.left

  const newB=document.createElement('div');
  newB.className='ballin';
     

  if(tdataLeftRange>=837 && tdataLeftRange<=994 && cx<=3)
  {
 
    if(tdataLeftRange>974 && tdataLeftRange<=994 ){tpts=30;
     
     cc.style.border="1rem solid black";
     card.textContent=tpts;
     newB.style.border="1rem solid black";

    }
    else if(tdataLeftRange>961 && tdataLeftRange<=974 )
    {tpts=50;
      
      cc.style.border="1rem solid blue";
      card.textContent=tpts;
      newB.style.border="1rem solid blue";
    }
    else if(tdataLeftRange>951 && tdataLeftRange<=961 )
    {tpts=70;
      
      card.textContent=tpts;
      cc.style.border="1rem solid orange";
      newB.style.border="1rem solid orange";
 }
    else if(tdataLeftRange>932 && tdataLeftRange<=951 )
    {tpts=90;
      
      cc.style.border="1rem solid yellow";
      card.textContent=tpts;
      newB.style.border="1rem solid yellow";
 }
    else if(tdataLeftRange>910 && tdataLeftRange<=932 )
    {tpts=100;
      
      cc.style.border="1rem solid green";
      newB.style.border="1rem solid green";
 
      card.textContent=tpts;
       }
    else if(tdataLeftRange>894 && tdataLeftRange<=910 )
    {tpts=90;
      
      cc.style.border="1rem solid yellow";
      card.textContent=tpts;
      newB.style.border="1rem solid yellow";
 }
    else if(tdataLeftRange>883 && tdataLeftRange<=894 )
    {tpts=80;
      
      cc.style.border="1rem solid red";
      card.textContent=tpts;
      newB.style.border="1rem solid red";
    }
    else if(tdataLeftRange>875 && tdataLeftRange<=883 )
    {tpts=70;
      
      cc.style.border="1rem solid orange";
      card.textContent=tpts;
      newB.style.border="1rem solid orange";

 }
    else if(tdataLeftRange>856 && tdataLeftRange<=875 )
    {tpts=50;
      
      cc.style.border="1rem solid blue";
      card.textContent=tpts;
      newB.style.border="1rem solid blue";
 }
    else if(tdataLeftRange>837 && tdataLeftRange<=856 )
    {tpts=30;
     
     card.textContent=tpts;
     cc.style.border="1rem solid black";
     newB.style.border="1rem solid black";
}
    
  }
  else{
    tpts=0;
    newB.style.border="1rem solid white";
  }

  baller.appendChild(newB)

  if(cx<=3){

  pts=pts+tpts;
  console.log(pts);
  sc.textContent=pts;
  }
  else{

   bodycontroller.style.filter="blur(10px)"
   scorepts.style.top="40%";
   scorepts.style.left="39%"
   scorepts.style.zoom="130%";
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
  scorepts.style.top="35%";
  scorepts.style.left="80.3%"
  scorepts.style.zoom="100%";
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