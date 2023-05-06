// function printfunc(){
//     window.print();
// }

// document.getElementById('imgmy').appendChild=localStorage.getItem('myimg');

const url=localStorage.getItem('myimg');
const myimg=document.getElementById("myimg");
myimg.src=url;

document.getElementById('name1').textContent=localStorage.getItem('Firstname')+(' ')+localStorage.getItem('Lastname');
document.getElementById('name2').textContent=localStorage.getItem('Firstname')+(' ')+localStorage.getItem('Lastname');
document.getElementById('phno').textContent=localStorage.getItem('Ph_no');
document.getElementById('address').textContent=localStorage.getItem('Current Address');
document.getElementById('email').textContent=localStorage.getItem('Personal Email');
document.getElementById('hobbies').textContent=localStorage.getItem('Hobbies');




document.getElementById('dob').textContent=localStorage.getItem('DOB');
document.getElementById('gen').textContent=localStorage.getItem('Gender');
document.getElementById('rel').textContent=localStorage.getItem('Religion');
document.getElementById('nation').textContent=localStorage.getItem('Nationality');
document.getElementById('ob').textContent=localStorage.getItem('Objectives');
document.getElementById('refn').textContent=localStorage.getItem('Reference_Name');
document.getElementById('rph').textContent=localStorage.getItem('Ref_Ph_no');
document.getElementById('rdesg').textContent=localStorage.getItem('Reference_designation');
document.getElementById('rem').textContent=localStorage.getItem('Reference_email');
document.getElementById('rad').textContent=localStorage.getItem('Reference_address');

document.getElementById('y1').textContent=localStorage.getItem('Year Of 10 pass');
document.getElementById('b1').textContent=localStorage.getItem('10thBoard');
document.getElementById('p1').textContent=localStorage.getItem('10thPercentage');

document.getElementById('y2').textContent=localStorage.getItem('Year Of 12 pass');
document.getElementById('s2').textContent=localStorage.getItem('12thStream');
document.getElementById('b2').textContent=localStorage.getItem('12thBoard');
document.getElementById('p2').textContent=localStorage.getItem('12thPercentage');

document.getElementById('y3').textContent=localStorage.getItem('Year Of Diploma pass');
document.getElementById('s3').textContent=localStorage.getItem('DiplomaStream');
document.getElementById('b3').textContent=localStorage.getItem('DiplomaBoard');
document.getElementById('p3').textContent=localStorage.getItem('DiplomaPercentage');
document.getElementById('pro').textContent=localStorage.getItem('DiplomaProject');

document.getElementById('skills').textContent=localStorage.getItem('Skills');

document.getElementById('curri').textContent=localStorage.getItem('Other_activity');

document.getElementById('otheredu').textContent=localStorage.getItem('ExtraQualification');




        // const img=new Image();
        // img.src=url;
        // document.body.appendChild(img);



document.getElementById('languages').textContent=JSON.parse(localStorage.getItem('languages'));

const printbtn=document.getElementById('Print');
printbtn.addEventListener('click',function(){
        print();
})
// function mprint(){
//         window.print();
// }
function mexit(){
        window.location.href="1stpage.html";
        localStorage.clear();
}