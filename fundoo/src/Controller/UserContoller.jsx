import axios from 'axios';


require('dotenv').config()

let headers={
    'Content-Type':'application/json',
    // 'Content-Type': 'application/x-www-form-urlencoded'
    // 'token':localStorage.getItem('token')
}

var contoller={
    register(registratioDetails)
    {
        console.log("its comming here "+registratioDetails)
        return axios.post('http://localhost:8080/users/register',registratioDetails,{'Content-Type':'application/json'})
        console.log("Working....")
    },
    login(logindetails)
    {
        console.log(logindetails
        )
        return axios.post
        ('http://localhost:8080/users/login/',logindetails,{'Content-Type':'application/json'})
    },
    Forgot(forgotdetails)
    {
        return axios.post("http://localhost:8080/users/forgotpassword",forgotdetails)
    },
    resetpassword(PasswordDetails)
    {
        const tokenkey= localStorage.getItem('token')
        console.log(tokenkey)
      return axios.post("http://localhost:8080/users/resetpassword/"+tokenkey,PasswordDetails)
    }
}
export default contoller
