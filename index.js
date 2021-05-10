// DOM 객체 생성부
const ul = document.querySelector('.section');
const icon1 = document.querySelector('.icon1');
const icon2 = document.querySelector('.icon2');
const icon3 = document.querySelector('.icon3');
const icon4 = document.querySelector('.icon4');
const icon5 = document.querySelector('.icon5');
const icon6 = document.querySelector('.icon6');

const clothes=[
  {color:'pink', style:'t'},
  {color:'pink', style:'s'},
  {color:'pink', style:'p'},
  {color:'blue', style:'t'},
  {color:'blue', style:'s'},
  {color:'blue', style:'p'},
  {color:'yellow', style:'t'},
  {color:'yellow', style:'s'},
  {color:'yellow', style:'p'} 
]

// filter list
function filterList(num){
  if(num===1){ // pants
    const arr = clothes.filter(cloth=>{
      return cloth.style === 'p';
    })    
    return arr;
  }
  else if(num===2){ // skirt
    const arr = clothes.filter(cloth=>{
      return cloth.style === 's';
    })    
    return arr;    
  }
  else if(num===3){  // tshirt
    const arr = clothes.filter(cloth=>{
      return cloth.style === 't';
    })    
    return arr;
  }
  else if(num===4){  // blue
    const arr = clothes.filter(cloth=>{
      return cloth.color === 'blue';
    })    
    return arr;
  }
  else if(num===5){  // yellow
    const arr = clothes.filter(cloth=>{
      return cloth.color === 'yellow';
    })    
    return arr;
  }
  else{ // pink
    const arr = clothes.filter(cloth=>{
      return cloth.color === 'pink';
    })    
    return arr;
  }
}

// make a List
function makeList(color, style){
  const li = document.createElement('li');
  const pic = document.createElement('span');
  const image = new Image(`img/${color}_${style.png}`);
  pic.appendChild(image);

  const detail = document.createElement('span');
  detail.innerHTML= `${color}                ${style}`;
  li.classList.add('ls');
  
  li.appendChild(pic);
  li.appendChild(detail);
  ul.appendChild(li);
}

// click Event
function handleClick(e){  
    // ul에 남은 흔적 지우기   
    while(ul.children.length >0){
      ul.removeChild(ul.firstChild);    
    }  
  
  if(e.target.className[9]==1){ // pants     
    filterList(1).map(list=>{
      makeList(list.color,list.style);
    });    
  }
  else if(e.target.className[9]==2){ // skirt
    filterList(2).map(list=>{
      makeList(list.color,list.style);
    });  
  }
  else if(e.target.className[9]==3){  // tshirt
    filterList(3).map(list=>{
      makeList(list.color,list.style);
    });  
  }
  else if(e.target.className[9]==4){  // blue
    filterList(4).map(list=>{
      makeList(list.color,list.style);
    });  
  }
  else if(e.target.className[9]==5){  // yellow
    filterList(5).map(list=>{
      makeList(list.color,list.style);
    });  
  }
  else{ // pink
    filterList(6).map(list=>{
      makeList(list.color,list.style);
    });  
  }
}

function init(){
  icon1.addEventListener('click',handleClick);
  icon2.addEventListener('click',handleClick);
  icon3.addEventListener('click',handleClick);
  icon4.addEventListener('click',handleClick);
  icon5.addEventListener('click',handleClick);
  icon6.addEventListener('click',handleClick);
}

init();