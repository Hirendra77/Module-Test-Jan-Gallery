
let firstImage = document.querySelector('#img1')
let secondImage = document.querySelector("#img2")
let thirdImage = document.querySelector('#img3')
let fourthImage = document.querySelector('#img4')

let name1 = document.getElementById('name')
let email1 = document.getElementById('email')
let username1 = document.getElementById('username')
let addBtn1 = document.getElementById('addbtn')
let div= document.getElementById("userData");

// secondImage.disabled=true;
// thirdImage.disabled=true;

// part first on click first image it will show form
firstImage.addEventListener("click", registration)
function registration() {
   document.getElementById('formGroup').classList.remove('hidden')
}

addBtn1.addEventListener("click", add)

let arr=[];
function add() {
    document.getElementById('formGroup').classList.add('hidden')
    let name = name1.value;
    let email = email1.value;
    let username = username1.value;
    let obj1={
        Name:name,
        Email:email,
        Username:username,
    }
    arr.push(obj1);
    firstImage.disabled=true;
}
 

  //part 2 - on clicking second image it will display user data 
secondImage.addEventListener('click',data)

function data(){
    document.getElementById('formGroup').classList.add('hidden')
      document.getElementById('userData').classList.remove('hidden')
   
      div.innerHTML=`"Name"+obj1.Name+"Username"+obj1.Username ` 
    
    }
  
      
// part 3 - on clicking third image it will show dice
let imageDice = document.getElementById('diceImg')

thirdImage.addEventListener('click',dice)
 function dice(){
    div.classList.add("hidden")
    imageDice.classList.remove("hidden")
 }


 let playerName=document.getElementById("player")
 let dicegame = document.getElementById("dicegame")
 let span = document.getElementById("score")
 let count = 0;
 let randomsum=0;
function diceG(){
   
    dicegame.classList.remove('hidden');
    count++;
    let arr=["1","2","3","4","5","6"]
   
   
     if(count<=3){   
     //to generate random number between 0 to 5 but not included 6 only integer
     let randomIndex= Math.floor(Math.random()*6)
     let randomDice=arr[randomIndex]
     randomsum+=parseInt(randomDice)
     span.innerText= randomsum; 
     }

}


fourthImage.addEventListener('click', generatecoupan)
let coupan =document.getElementById("coupan");
let congratulations = document.getElementById('congrates')

function generatecoupan() {
    imageDice.classList.add("hidden");
    dicegame.classList.add('hidden');
    let letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let number = "0123456789"
    let digit = number + letter;
    let token = " ";
    for (let i = 0; i < 12; i++) {
        let random = Math.floor(Math.random()*digit.length)
        token = token+ digit[random] 
   
    }
    coupan.innerText=token;
    congratulations.classList.remove('hidden')
}


















//       let table = document.createElement('table')
//       let tr = document.createElement('tr')
//       table.appendChild(tr);
//       tr=table.insertRow(-1);
//        for(let t of arr){
//         for(let key in t){
//             td = document.createElement("td")
//             tr.appendChild(td);
//             td.innerText = `${key}:${t[key]}`
//         }
//        }
//   document.div.appendChild(table);