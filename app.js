// const container;
// const error;
let year = document.getElementById("years");
let month = document.getElementById("months");
let days = document.getElementById("days");
let getEnteredDate = document.getElementById("dob");
let error =    document.getElementsByClassName("error")[0];
let age = document.getElementsByClassName("age")[0];
let darkBtn = document.getElementById("btn");

getEnteredDate.addEventListener("blur", calcAge);

function calcAge(){ 
    let cur = new Date(),
        curDate = cur.getDate(),
        curMonth = cur.getMonth(),
        curYear = cur.getFullYear(); 
    
    let date = new Date(getEnteredDate.value),
        dobDate = date.getDate(),
        dobMonth = date.getMonth(),
        dobYear = date.getFullYear();
        console.log(curYear);
    let YearAge = curYear - dobYear;
    let monthAge,dateAge;

    if(curMonth<dobMonth){
        YearAge--;
        monthAge = 12+curMonth-dobMonth;
    }else{
        monthAge = curMonth-dobMonth;
    }
    if(curDate<dobDate){
        monthAge--;
        dateAge = 31+curDate - dobDate;
    }else{
        dateAge = curDate-dobDate;
    }
    if(monthAge<0){
        monthAge=11;
        YearAge--;
    }
    if (YearAge<0) {
        error.style.display="block";
        age.style.display= "none"
    } else {
        error.style.display="none";
        age.style.display= "block";
        year.textContent = YearAge;
        month.textContent = monthAge;
        days.textContent = dateAge;    
    }  
}
let count =1;
darkBtn.addEventListener("click",()=>{
    let bdy = document.body;
    count++;
    if(count%2==0){
    bdy.style.backgroundColor="#343434";
    bdy.style.color="#fff";
    darkBtn.style.backgroundColor="#fff";
    darkBtn.style.color="#343434";
    darkBtn.textContent="Light Mode";
    }else{
        bdy.style.backgroundColor="#fff";
         bdy.style.color="#343434";
         darkBtn.style.backgroundColor="#343434";
         darkBtn.style.color="#fff";
         darkBtn.textContent="Dark Mode";
    }
} )

