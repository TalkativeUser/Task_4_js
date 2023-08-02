var btnSub=document.querySelector('.btnSub');
var inpName=document.querySelector('.inpName');
var inpEmail=document.querySelector('.inpEmail');
var inpPass=document.querySelector('.inpPass');
var properEmail='';
var allUsers=[]

if(localStorage.getItem('allUsers')!=null) {
    allUsers=JSON.parse(localStorage.getItem('allUsers'));
    document.querySelector('.login').classList.add('d-none')
    document.querySelector('.ourSide').classList.remove('d-none')

document.getElementById('userEmail').innerHTML=allUsers[allUsers.length-1].proEmail;

    }

 


btnSub.addEventListener('click',function() {

    if(errorMassage()==true) {


var userProperties={

    proName:inpName.value,
    proEmail:inpEmail.value,
    proPass:inpPass.value
}


allUsers.push( userProperties);
localStorage.setItem('allUsers',JSON.stringify(allUsers))
clearForm();

document.querySelector('.nm-error').classList.add('d-none')
document.querySelector('.em-error').classList.add('d-none')
document.querySelector('.pass-error').classList.add('d-none')
document.querySelector('.ourSide').classList.remove('d-none')
document.querySelector('.login').classList.add('d-none')



document.getElementById('userEmail').innerHTML=allUsers[allUsers.length-1].proEmail;

    }
else{

    errorMassage();
}

})


document.querySelector('.repeatAdd').addEventListener('click',function() {

    document.querySelector('.ourSide').classList.add('d-none')
    document.querySelector('.login').classList.remove('d-none')
   
  

} )

document.querySelector('.repeatLog').addEventListener('click',function() {


    document.querySelector('.ourSide').classList.add('d-none')
    document.querySelector('.login').classList.remove('d-none')
    

} )

document.querySelector('.signUp').addEventListener('click',function (info) {

    info.preventDefault()
inpName.classList.remove('d-none');
document.querySelector('.h5signUp').classList.add('d-none')
document.querySelector('.h5signIn').classList.remove('d-none')

} );

document.querySelector('.signin').addEventListener('click',function (info) {

    info.preventDefault(); 
inpName.classList.add('d-none');
document.querySelector('.h5signUp').classList.remove('d-none')
document.querySelector('.h5signIn').classList.add('d-none')

} )



function errorMassage() {

    var regexName=/[a-z0-9]{6,}/i;
    var regexEmail=/[a-z0-9]{6,}@[a-z0-9]/i;
    var regexPass=/[a-z0-9]{6,}/i;

   var isRepeat=false; 


        for(var i=0;i<allUsers.length;i++) {

        if(allUsers[i].proEmail==inpEmail.value)  {
            isRepeat=true;
        break;
            }
        }

        if( regexName.test( inpName.value)==false )
            {

                document.querySelector('.nm-error').classList.remove('d-none')
            return false;
            }
        if( regexEmail.test( inpEmail.value)==false )
            {

                document.querySelector('.em-error').classList.remove('d-none')
            return false;
            }


        if(regexPass.test(inpPass.value)==false) {

            document.querySelector('.pass-error').classList.remove('d-none')
        return false;

        }

        if(isRepeat) {

        document.querySelector('.repeatAcc').classList.remove('d-none');
        return false;

        }

        return true;

    
}

function clearForm(){

inpName.value=''
    inpEmail.value='' 
    inpPass.value=''
}



// THIS IS JS FOR HOME BAGE STYLE THIS IS OPSSION

var allImg=document.querySelectorAll('img');
allImg=Array.from(allImg);
for(var i=0;i<allImg.length;i++) {

allImg[i].addEventListener('click',function (info) {

var lyear=document.querySelector('.lyar');

lyear.classList.remove('d-none');

var curosl= document.querySelector('.lyar .curosl');

var srcOfClicked=info.target.getAttribute('src');
curosl.style.backgroundImage=`url(${srcOfClicked})`

var indexOfclicked =allImg.indexOf(info.target)
kobry=indexOfclicked;

})

}

var kobry=0;// 0

document.querySelector('.fa-xmark') .addEventListener('click',function() {
       var lyear2=document.querySelector('.lyar');
        
       lyear2.classList.add('d-none')
        
        })

var btn_left=document.querySelector('.fa-left-long ');
var btn_right=document.querySelector('.fa-right-long ');


btn_left.addEventListener('click',funLeft)
btn_right.addEventListener('click',funRight)

function funLeft (info) {
    kobry--;
    if(kobry==-1)
    kobry=allImg.length-1

    var curosl= document.querySelector('.lyar .curosl');

    indexOfimgsrc=allImg[kobry].getAttribute('src');
    curosl.style.backgroundImage=`url(${indexOfimgsrc})`
   

   
}

function funRight () {

    kobry++;
    if(kobry==allImg.length)
kobry=0

    var curosl= document.querySelector('.lyar .curosl');

    indexOfimgsrc=allImg[kobry].getAttribute('src');
    curosl.style.backgroundImage=`url(${indexOfimgsrc})`
  

}

document.addEventListener('keyup',function (info ) {

if(info.code=='ArrowRight') 
{
    funRight()
}

else if(info.code=='ArrowLeft') 
{
    funLeft()
}

 else if (info.code=='Delete') {
var lyear=document.querySelector('.lyar');

lyear.classList.add('d-none');
 }

} )

var lyear=document.querySelector('.lyar');
lyear.addEventListener('click',function (info) {

if(info.target==lyear)
{

 

    lyear.classList.add('d-none');

}


})