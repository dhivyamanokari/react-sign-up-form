import React,{useState} from "react";
import "./App.css";  
import {useFormik} from 'formik';
import popup from './components/popup';

const validate = values => {
  const errors = {};
  if(!values.firstName){
    errors.firstName = "*Required";
 }
 else if(values.firstName.length>8){
   errors.firstname = "*Must be 8 characters or less";
 }
 if(!values.lastName){
  errors.lastName = "*Required";
}
else if(values.lastName.length>8){
 errors.lastname = "*Must be 8 characters or less";
}
if(!values.email){
  errors.email = "*Required";
}
else if(!/^\w+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
 errors.email = "*Invalid Email Address";
}
if(!values.password){
  errors.password = "*Required";
  }
  else if(values.password.lenght >8){
    errors.password = "*Maximum 8 characters";
  }
  else if (values.password.length>3){
    errors.password = "Maximum 5 characters";
  }
  if(!values.confirmPassword){
    errors.confirmPassword = "*Required";
 }
 else if( values.Password  !== values.confirmPassword){
   errors.confirmPassword = "*Password must match";
 }
 return errors;

}


const App = () => {
  const [bool , setBool ] = useState(0);
  const formik = useFormik({
    initialValues : {
      firstName : '',
      lastName : '',
      email : '',
      Password : '',
      confirmPassword: ''

    },
    validate,
    onSubmit : (values , {resetForm}) => {
      if(bool){
        setBool(0);
        resetForm({value : ''});
      }
      else{
        setBool(1);
      }
    }

  });

  



    return(
       <div className = "main"> 
       <div className = "SignUp form">
         <h2>Sign Up Here</h2>
         <form onSubmit = {formik.handleSubmit}>
           <input type = "text" placeholder = "first Name..." name = "first Name" autocomplete = "off" onChange = {formik.handleChange} value = {formik.values.firstName} onBlur = {formik.handleBlur}/>{
             formik.touched.firstName && formik.errors.firstName ? <span>{formik.errors.firstName}</span>:null
           }
           <input type = "text" placeholder = "Last Name..." name = "Last Name" autocomplete = "off" onChange = {formik.handleChange} value = {formik.values.lastName} onBlur = {formik.handleBlur}/>{
             formik.touched.lastName && formik.errors.lastName ? <span>{formik.errors.lastName}</span>:null
           }
           <input type = "text" placeholder = "Email..." name = "email" autocomplete = "off" onChange = {formik.handleChange}value = {formik.values.email}onBlur = {formik.handleBlur}/>{
             formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span>:null
           }
           <input type = "Password" placeholder = "Password..." name = "Password" autocomplete = "off"onChange = {formik.handleChange} value = {formik.values.Password}onBlur = {formik.handleBlur}/>{
            formik.touched.confirmPassword && formik.errors.Password? <span>{formik.errors.Password}</span>:null
           }
           <input type = "Password" placeholder = "confirm Password..." name = "confirm Password" autocomplete = "off" onChange = {formik.handleChange} value = {formik.values.confirmPassword} onBlur = {formik.handleBlur}/>{
             formik.touched.confirmPassword && formik.errors.confirmPassword ? <span>{formik.errors.confirmPassword}</span>:null
           }
           <input type = "submit" value = "submit" />
         </form>

       </div>
       <div className ="message-box">
         {
           bool ? (<popup onClick = {formik.handleSubmit}/>) : null
         }
         </div>

       </div>
    )
}



export default App;

