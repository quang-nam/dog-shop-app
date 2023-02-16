import { useFormik} from 'formik'
import * as Yup from 'yup'
import './SignUp.css'
const SignUpForm = () => {
    // const [email, setEmail]= useState('');
    // const [name, setName]= useState('');
    // const [phone, setPhone]= useState('');
    // const [password, setPassword]= useState('');
    // const [confirmPassword, setConfirmPassword]= useState('');
  
    const formik= useFormik({// object initialValues ko lien quan den o tren, id, name phai giong initial value
        initialValues:{
            email:'',
            name:'',
            phone:'',
            password:'',
            confirmPassword:''
        },
        validationSchema: Yup.object({
            name:Yup.string().required("Required").min(4,"Must be at least 4 characters"),
            email:Yup.string().required("Required").matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ,"Please enter the valid email address"),
            password:Yup.string().required("Required").matches(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,15})/,
            "Password must be 6 or 15 characters, special characters"),
            confirmPassword:Yup.string().required("Required").oneOf([Yup.ref('password'),null]
            ,"Password must match"),
            phone:Yup.string().required("Required").matches( /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
            "Must be a valid phone number")
        }), 
        onSubmit: (value) =>{
            window.alert('Submitted successfully')
            console.log(value)
        }
    });
   // formik: handleChange, handleSubmit
   // formik: values, touches, errors 
    return ( 
          <section className='App' >
            <form action="" className='infoform' onSubmit={formik.handleSubmit}>
                <label>Your name</label>
                <input type='text'
                 name='name' 
                 id='name' 
                 //onChange={(e)=>setName(e.target.value)}    
                 value={formik.values.name}
                 onChange={formik.handleChange}
                 placeholder='Enter your name'> 
                 </input>
                 {formik.errors.name && (
                <p className="errorMsg"> {formik.errors.name} </p>
                )}
                 <label>Email address</label>
                <input type='email'
                 name='email' 
                 id='email'
                 //onChange={(e)=>setEmail(e.target.value)}    
                 value={formik.values.email}
                 onChange={formik.handleChange}
                 placeholder='Enter your email'>
                 </input>
                 {formik.errors.email && (
                <p className="errorMsg"> {formik.errors.email} </p>
                )}
                 <label>Password</label>
                <input type='text'
                 name='password' 
                 //onChange={(e)=>setPassword(e.target.value)}    
                 id='password' 
                 value={formik.values.password}
                 onChange={formik.handleChange}
                 placeholder='Enter your password'>
                 </input>
                 {formik.errors.password && (
                 <p className="errorMsg"> {formik.errors.password} </p>
                 )}

                 <label>Confirm Password</label>
                <input type='text'
                 name='confirmPassword' 
                 id='confirmPassword' 
                 //onChange={(e)=>setConfirmPassword(e.target.value)} 
                 value={formik.values.confirmPassword}
                 onChange={formik.handleChange}   
                 placeholder='Enter your confirm Password'>
                 </input>
                 {formik.errors.confirmPassword && (
                <p className="errorMsg"> {formik.errors.confirmPassword} </p>
                )}

                 <label>Phone number</label>
                <input type='text'
                 name='phone' 
                 id='phone' 
                // onChange={(e)=>setPhone(e.target.value)} 
                 value={formik.values.phone}
                 onChange={formik.handleChange}   
                 placeholder='Enter your phone number'>
                 </input>
                 {formik.errors.phone &&  (
                <p className="errorMsg"> {formik.errors.phone} </p>
                )}

                <button type='submit'>Continue</button>
            </form>
          </section>
     );
}
 
export default SignUpForm;