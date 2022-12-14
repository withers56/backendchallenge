import CreateView from "../createView.js"

export default function Register(props) {
    return `
    <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8"/>
                <title>Register</title>
            </head>
            <body>
<!--                <h1>Register</h1>-->
        
<!--                <form id="register-form">-->
<!--                    <label for="username">Username</label>-->
<!--                    <input id="username" name="username" type="text"/>-->
<!--                    <label for="email">Email</label>-->
<!--                    <input id="email" name="email" type="email">-->
<!--                    <label for="password">Password</label>-->
<!--                    <input id="password" name="password" type="password"/>-->
<!--                    <button id="register-btn" type="button">Register</button>-->
<!--                </form>-->
                
                
<!--                <div class="card w-50 m-auto">-->
<!--                  <div class="card-body">-->
<!--                    <h5 class="card-title">Register</h5>-->
<!--                    -->
<!--                    <form id="register-form">-->
<!--                        <div><label for="username">Username</label>-->
<!--                        <input id="username" name="username" type="text"/></div>-->
<!--                        <div><label for="email">Email</label>-->
<!--                        <input id="email" name="email" type="email"></div>-->
<!--                        <div><label for="password">Password</label>-->
<!--                        <input id="password" name="password" type="password"/></div>-->
<!--                         <a href="#" id="register-btn" class="btn btn-primary">register</a>-->

<!--                    </form>-->
                    
                    
                    <div class="card w-50 m-auto register-card">
                        <div class="card-header background-card-dark">
                            <h2>Register</h2>
                        </div>
                      <div class="card-body background-card-dark">
                        <form id="register-form">
                      <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control background-card-dark" id="username" aria-describedby="emailHelp">
                        
                      <div class="mb-3">
                        <label for="first" class="form-label">Firstname</label>
                        <input type="email" class="form-control background-card-dark" id="first" aria-describedby="emailHelp">
                        
                        <label for="last" class="form-label">Lastname</label>
                        <input type="email" class="form-control background-card-dark" id="last" aria-describedby="emailHelp">
                        
                        <label for="dob" class="form-label">DOB</label>
                        <input type="date" class="form-control background-card-dark" id="dob" aria-describedby="emailHelp">
                        
                      <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control background-card-dark" id="password">
                      </div>
                      <button type="button" class="btn btn-primary" id="register-btn">Register</button>
                    </form>
                      </div>
                    </div>
                    
                    
                    
                    
                  
                
            </body>
        </html>
`;
}

export function RegisterEvent(){
    $("#register-btn").click(function(){

        const username = $("#username").val();
        const firstName = $("#first").val();
        const lastName = $("#last").val();
        const password = $("#password").val()
        const dob = $("#dob").val();

        let newUser = {
            username,
            firstName,
            lastName,
            password,
            dob
        }

        console.log(newUser);

        let request = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newUser)
        }

        fetch("http://localhost:8080/backendChallenge/persons/addPerson", request)
            .then(response => {
                console.log(response.status);
                CreateView("/");
            })

    })
}