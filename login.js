function validate(){
    username = document.getElementById("username").value;
    password = document.getElementById("password").value
    
    if(username==="admin" && password==="admin")
    {
        alert("Administrator Login Successful");
        location.href="homepage-admin.html";
    }
    else if (username === "student1" && password === "1234") {
        alert("You have successfully logged in.")
        location.href='homepage-student.html';
    }
    else if (username === "teacher1" && password === "1234") {
        alert("You have successfully logged in.");
        location.href="homepage-teacher.html";
    }
    else {
        alert("The Entered Username or Password is Incorrect")
        return false;
    }


}