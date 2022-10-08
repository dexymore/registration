////////////////////////////////////////////////////////////////signup////////////////////////////
let inputup1 = document.querySelector(".inputup1");
let inputup2 = document.querySelector(".inputup2");
let inputup3 = document.querySelector(".inputup3");
let upbut = document.querySelector(".upbut");
let alertup=document.querySelector(".alertup");
let succ=document.querySelector(".succup");
let arr=[];
////////////////////////////////////checking function///////////////////////////////////////
regex=/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;


if(localStorage.getItem('info')!==null){
    arr=JSON.parse(localStorage.getItem('info'))
}

let check = function (inputup2="",arr=[])
{
    let temp=0
    for(let i=0;i<arr.length;i++)
    {
        if( arr[i].email===inputup2.value)
        temp=1;
     
    }
 if(regex.test(inputup2.value)!=true)
{
    temp =2;

}
console.log (temp);
    return temp;
}


///////////////////////////////////////////////////////////////////////////
function signup(){
  if(inputup1.value===""||inputup3.value==="")
  {
    alertup.classList.remove('hidden')
    return;
  }
  
  
    if(check(inputup2,arr)==2)
  {
   
alertup.classList.remove('hidden')
return;
  }
   if(check(inputup2,arr)==1){
    alertup.classList.remove('hidden')
    return;
  }

  else {
    alertup.classList.add('hidden')
    let obj= {
username : inputup1.value,
email : inputup2.value,
password :inputup3.value
};


arr.push(obj);

alertup.classList.add('hidden')
localStorage.setItem('info',JSON.stringify(arr))
succ.classList.remove('hidden')

inputup1.value=""
inputup2.value=""
inputup3.value=""
console.log(arr);
} }


////////////////////////////////////////////////////////////finishing signup page////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////signin////////////////////////////
let maintext= document.querySelector('.maintext')
let inputin1=document.querySelector('.inputin1')
let inputin2=document.querySelector('.inputin2')
let butin=document.querySelector('.butin')
let alertin=document.querySelector('.alertin')

function signin(){
for(let i=0;i<arr.length;i++){
  
    if((arr[i].email===inputin1.value&&arr[i].password===inputin2.value))
{
    localStorage.setItem('username', arr[i].username)


   location.href = "home.html";

   

} 
else if(arr[i].email!==inputin1.value&&arr[i].password!==inputin2.value)
{
alertin.classList.remove('hidden')

}
}}
////////////////////////////////////////////////////////////////////home page/////////////////////////
let welcomeUser=localStorage.getItem('username')
maintext.textContent=`welcome ${welcomeUser}`
/////////////////////////////////////////////////////log out/sign up link /sign in link/////////////////////////////////////////////////
function logout()
{
  location.href = "index.html";
}
function SignUP(){
    location.href = "signup.html"
}

function index(){
    location.href = "index.html"
}