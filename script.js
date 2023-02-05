
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
let arr1 =[0,0,0,0]
firstImage.addEventListener("click", registration)
function registration() {
    // if(arr.length===0) 
    if(arr1[0]===0){
   document.getElementById('formGroup').classList.remove('hidden')}
   arr1[0]=1;
}

addBtn1.addEventListener("click", add)

let arr=[];
function add(e) {
   
    e.preventDefault()
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
        console.log(arr)
        // firstImage.disabled=true;
    }
    
        
    
   



  //part 2 - on clicking second image it will display user data 
secondImage.addEventListener('click',data)

function data(){
    if(arr1[1]===0){
    document.getElementById('formGroup').classList.add('hidden')
      document.getElementById('userData').classList.remove('hidden')
      arr1[1]=1;
    }
   console.log(arr);
      div.innerHTML="Name:" +arr[0].Name +", "+ "Username:" +arr[0].Username;
    
    }
  
      
// part 3 - on clicking third image it will show dice
let imageDice = document.getElementById('diceImg')

thirdImage.addEventListener('click',dice)
 function dice(){
    if(arr1[2]===0){
    div.classList.add("hidden")
    imageDice.classList.remove("hidden")
    arr1[2]=1;
    }
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
     let randomIndex= Math.floor(Math.random()*6+1)
     let randomDice=arr[randomIndex]
     randomsum+=parseInt(randomDice)
     span.innerText= randomsum; 
    
     }
}

//part 4- Generate Token

fourthImage.addEventListener('click', generatecoupan)
let coupan =document.getElementById("coupan");
let congratulations = document.getElementById('congrates')

function generatecoupan() {
    if(arr1[3]===0){
    imageDice.classList.add("hidden");
    dicegame.classList.add('hidden');
    arr1[3]=1;
    
    let letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let number = "0123456789"
    let digit = number + letter;
    let token = " ";
    for (let i = 0; i < 12; i++) {
        let random = Math.floor(Math.random()*digit.length)
        token = token+ digit[random] 
   
    }
    console.log(arr1)
    coupan.innerText=token;
    congratulations.classList.remove('hidden')
    //  arr1[3]=1;
    }
}


















