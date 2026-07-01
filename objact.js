// const student = {
//     Name: "Kashvi",
//     Qualification: "Graduated",
//     College: "DMPG",
//     Place: "Varanasi"
// }
// document.getElementById("student").innerHTML=student.Name+" was"+" "+student.Qualification+" from"+" "+student.College+", "+student.Place+"."

// const resume = {
//     Name: ["Ashvi"],
//     Age: ["22"],
//     Skills: ["HTML"," CSS"," JavaScript"," and"," REACT.js"],
//     Experience: ["Fresher's"]
// }
// console.log(resume.Skills);
// document.getElementById("resume").innerHTML=resume.Name+" is "+resume.Age+" year old, have some skills like "+resume.Skills+" and she is "+resume.Experience

// console.log(resume);

const person = {
    firstname : "Vaishali",
    lastname : "Patel",
    age : "22",
    skill : "Frontend Developer",
    fullname: function (){
        return this.firstname + " " + this.lastname +" is "+ this.skill;
    }
}
// console.log(person.fullname());
document.getElementById("resume").innerHTML=person.fullname();  