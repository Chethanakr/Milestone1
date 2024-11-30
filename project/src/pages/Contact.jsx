import { useState } from "react"
function Contact(){
    const[formData,setFormData]=useState({
        username:'',
        useremail:'',
        message:''
    })
    const handleChange=(echange)=>{
        const{name,value}=echange.target //triger
        //compare data
        setFormData({...formData , [name] : value})//... it will create a copy 
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("Thankyou")
        console.log("formdata:->",formData)
    }
    return(
        <div className="form">
            <label>UserName:</label>
            <input
             type='text'
             name='username'
             value={formData.username}
             onChange={handleChange}
             placeholder="enter user name"
             required
             /><br />
             <label>Email:</label>
            <input
             type='text'
             name='useremail'
             value={formData.useremail}
             onChange={handleChange}
             placeholder="enter the email"
             required
             /><br />
             <label>Feedback:</label>
             <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
             placeholder="message"
             />       
             <button onClick={handleSubmit}>Submit</button>
              </div>
    )
}
export default Contact