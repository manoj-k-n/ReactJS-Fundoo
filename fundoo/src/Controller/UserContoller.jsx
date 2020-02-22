import axios from 'axios';


require('dotenv').config()

let headers={
    'Content-Type':'application/json',
    'token':localStorage.getItem('logintoken')
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
        return axios.post("http://localhost:8080/users/forgotpassword",forgotdetails,headers)
    },
    resetpassword(PasswordDetails)
    {
        const tokenkey= localStorage.getItem('token')
        console.log(tokenkey)
        console.log("Welcome...")
      return axios.put("http://localhost:8080/users/resetpassword/"+tokenkey,PasswordDetails,{'Content-Type':'application/json'})
    },

    createNotes(notedetails)
    {
        const tokenkey=localStorage.getItem('logintoken')
       
        console.log("details ",notedetails)
        return axios.post("http://localhost:8080/notes/"+tokenkey,notedetails)
    },

    udateNote(notedetails,idn)
    {
        const tokenkey=localStorage.getItem('logintoken')
            console.log("working.alfj.fuhgaf.///ilialif//.ihfiah")
        return axios.put("http://localhost:8080/editeText/"+idn+"/"+tokenkey,notedetails)
    },

    deleteNote(id)
    {
        const token=localStorage.getItem('logintoken')
        return axios.delete("http://localhost:8080/deletnote/"+id+"/"+token)
    },

    getAllNotes()
    {
        
       const token=localStorage.getItem('logintoken')
        console.log("Comming....")
        return axios.get("http://localhost:8080/getAll/"+token)
    },

    editeNotes(edite,id)
    {
        const token=localStorage.getItem("logintoken")
        console.log("edtting.../")
        console.log(edite)
        return axios.put("http://localhost:8080/editNotes/"+id+"/"+token,edite)
    },

    changePin(id)
    {
        console.log(id,"ideee")
        
     const token=localStorage.getItem("logintoken")
     console.log(token,"tokennn")
     return axios.put("http://localhost:8080/pin/"+id+"/"+token)
    },

    // create(details)
    // {
    //     const token=localStorage.getItem("logintoken")
    //     return axios.post("http://localhost:8080/notes/"+token,details)
    // }

    changeArchive(id)
    {
        console.log(id,"idee")
        const token=localStorage.getItem("logintoken")
      return axios.put("http://localhost:8080/archive/"+id+"/"+token)
    },

    changeTrans(id)
    {
        const token=localStorage.getItem("logintoken")
        return axios.put("http://localhost:8080/trash/"+id+"/"+token)
    },

    getCollaboratore(idn)
    {
        const token=localStorage.getItem("logintoken")
        return axios.get("http://localhost:8080/getAllCollaborate/"+idn+"/"+token)
    },
     
    addCollaboratore(idn,email)
    {
        console.log("commin././././",email)
        const token=localStorage.getItem("logintoken")
        return axios.post("http://localhost:8080/collaboratore/"+idn+"/"+token,email)
    },

    getAllLabels()
    {
        const token=localStorage.getItem("logintoken")
        return axios.get("http://localhost:8080/getall/"+token)
    },

    createLabel(label)
    {
        const token=localStorage.getItem("logintoken")
        console.log(label,token)
        return axios.post("http://localhost:8080/labels/"+token,label) 
    },

    editeLabel(id)
    {
        const token=localStorage.getItem("logintoken")
        return axios.delete("http://localhost:8080/deletelabel/"+id+"/"+token)
    }
    
}
export default contoller
