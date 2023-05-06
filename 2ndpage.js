const form=document.getElementById("form1")
const submit=document.getElementById("submit")
const myimg=document.getElementById("myimg")
const fname=document.getElementById("fname")
const lname=document.getElementById("lname")
const gender=document.getElementsByName("gender")
const dob=document.getElementById("dob")
const countrycode=document.getElementById("contrycd1")
const ph_no=document.getElementById("ph_no")
const cad=document.getElementById("cad")
const pemail=document.getElementById("pemail")

const objectives=document.getElementById("objectives")
const YO10P=document.getElementById("m1")
const Board10=document.getElementById("b1")
const Per10=document.getElementById("p1")

const YO12P=document.getElementById("m2")
const Board12=document.getElementById("b2")
const Stream12=document.getElementById("s2")
const Per12=document.getElementById("p2")

const YODiplomaP=document.getElementById("m3")
const BoardDiploma=document.getElementById("b3")
const StreamDiploma=document.getElementById("s3")
const PerDiploma=document.getElementById("p3")
const Project=document.getElementById("project")

const ExtraQualification=document.getElementById("xtraq")


const Skills=document.getElementById("skills")


//languge selection



    
   


const Other_activity=document.getElementById("other_activity")




const Nationality=document.getElementById("Nationality")
const Religion=document.getElementById("Religion")
const Hobbies=document.getElementById("Hobbies")




const refname=document.getElementById("rname")
const contrycd2=document.getElementById("contrycd2")
const refph_no=document.getElementById("rph_no")
const rdesg=document.getElementById("rdesg")
const remail=document.getElementById("remail")
const refad=document.getElementById("rad")

// function addnewx(){
//     let newNode1=document.createElement('input');
//     newNode1.setAttribute("type","text");

//     let xtraqfli=document.getElementById('xtraqfli');
//     let addx=document.getElementById('addx');

//     xtraqfli.insertBefore(newNode1,addx);

// }

// function addnews(){
//     let newNode1=document.createElement('input');
//     newNode1.setAttribute("type","text");

//     let skill=document.getElementById('skill');
//     let adds=document.getElementById('adds');

//     skill.insertBefore(newNode1,adds);

// }

// function addnewo(){
//     let newNode1=document.createElement('input');
//     newNode1.setAttribute("type","text");

//     let other=document.getElementById('other');
//     let addo=document.getElementById('addo');

//     other.insertBefore(newNode1,addo);

// }

// function addnewh(){
//     let newNode=document.createElement('input');
//     newNode.setAttribute("type","text");

//     let hobbies=document.getElementById('hobbies');
//     let addh=document.getElementById('addh');

//     hobbies.insertBefore(newNode,addh);

// }




form.addEventListener('submit',function(e){
    e.preventDefault();
    
    localStorage.setItem('Firstname',fname.value);
    localStorage.setItem('Lastname',lname.value);
    for(i=0;i<gender.length;i++){
        if (gender[i].checked)
        localStorage.setItem('Gender',gender[i].value);
    }
    localStorage.setItem('DOB',dob.value);
    localStorage.setItem('Ph_no',countrycode.value+ph_no.value);
    localStorage.setItem('Current Address',cad.value);
    localStorage.setItem('Personal Email',pemail.value);

    localStorage.setItem('Objectives',objectives.value);
    localStorage.setItem('Year Of 10 pass',YO10P.value);
    localStorage.setItem('10thBoard',Board10.value);
    localStorage.setItem('10thPercentage',Per10.value);


    localStorage.setItem('Year Of 12 pass',YO12P.value);
    localStorage.setItem('12thBoard',Board12.value);
    localStorage.setItem('12thStream',Stream12.value);
    localStorage.setItem('12thPercentage',Per12.value);

    localStorage.setItem('Year Of Diploma pass',YODiplomaP.value);
    localStorage.setItem('DiplomaBoard',BoardDiploma.value);
    localStorage.setItem('DiplomaStream',StreamDiploma.value);
    localStorage.setItem('DiplomaPercentage',PerDiploma.value);
    localStorage.setItem('DiplomaProject',Project.value);

    localStorage.setItem('ExtraQualification',ExtraQualification.value);

    // // if (l1.checked=true)
    // //     localStorage.setItem('l1','Bengali');
    // // if (l2.checked)
    // //     localStorage.setItem('l2','Bengali');
    // // if (l3.checked)
    // //     localStorage.setItem('l3','Bengali');

    const lang1=document.getElementsByClassName("lang1");
    const lang2=[];

    for(j=0;j<3;j++){
        if(lang1[j].checked==true){
            lang2.push(lang1[j].value);
        }
        localStorage.setItem('languages',JSON.stringify(lang2));
    }

   

               
    localStorage.setItem('Skills',Skills.value);

    localStorage.setItem('Other_activity',Other_activity.value);


    localStorage.setItem('Nationality',Nationality.value);
    localStorage.setItem('Religion',Religion.value);
    localStorage.setItem('Hobbies',Hobbies.value);

    localStorage.setItem('Reference_Name',refname.value);
    localStorage.setItem('Ref_Ph_no',contrycd2.value+refph_no.value);
    localStorage.setItem('Reference_designation',rdesg.value);
    localStorage.setItem('Reference_email',remail.value);
    localStorage.setItem('Reference_address',refad.value);


    
    window.location.href="3rdpage.html";

})

myimg.addEventListener('change',function(){
    console.log(this.files);

    const fr = new FileReader();
    fr.readAsDataURL(myimg.files[0]);
    fr.addEventListener('load',function(){
        const url = fr.result;
        // // console.log(url);
        // const img= new Image();
        // img.src=url;
        // document.body.appendChild(img);

        localStorage.setItem('myimg',url);
    });
})


