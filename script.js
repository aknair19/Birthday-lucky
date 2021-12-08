var dateOfBirth=document.querySelector("#date-of-birth");
var luckyNumber=document.querySelector("#lucky-number");
var checkNumberButton=document.querySelector("#check-number");
var outputBox=document.querySelector("#output-box");

checkNumberButton.addEventListener("click", checkBirthDateIsLucky);

function checkBirthDateIsLucky(){
    const dob= dateOfBirth.value;
    const sum= calculateSum(dob);
    if(dob&&sum)

    compareValues(sum,luckyNumber.value);
    else
    outputBox.innerText="Oops! Please enter both the fields"
  
}

function calculateSum(dob){
    dob=dob.replaceAll("-", "");
    var sum=0;
    for(i=0;i<dob.length;i++){
        sum=sum+ Number(dob.charAt(i));
    }
    return sum;
  
  }

function compareValues(sum,luckyNumber){
if(sum%luckyNumber===0){
    outputBox.innerText="Whoa! Your Birthday is lucky";
}
else{
    outputBox.innerText="Oops! Your birthday is not lucky"
}
}




