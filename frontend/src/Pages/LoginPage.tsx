import axios from 'axios';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'


function LoginPage(){

    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate();


    async function login(event) {
        event.preventDefault();
        try{
            await axios.post("http://localhost:8091/api/v1/employee/login",{
                email: email,
                password: password,
            }).then((res) =>{
                console.log(res.data);

                if (res.data.message == "Email not exist")
                {
                    alert("Email doesn't exist");
                }
                else if(res.data.message == "Login success")
                {
                    navigate("/MainUser");
                }
                else
                {
                    alert( "Email and password doesn't match ");
                }
            },fail =>{
                console.error(fail);
            });
        }
        catch(err){
            alert(err);
        }
    }
            
            
    
  return (
    <div className="bg-white  px-10 py-20 rounded-3xl border-2 border-gray-200">
        <h1 className="text-5xl font-semibold"> Welcome Back</h1>
        <p className="font-medium text-lg text-gray-500 mt-4"> Welcome back!! Please enter your details.</p>
        <div className="mt-8 ">
        <div>
                <label className="text-lg- font-medium">Email</label>
                <input type='name' id='email'
                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
                placeholder="Enter  your email"
                value={email}
                onChange={(event) =>{
                    setEmail(event.target.value);
                }}
                />
            </div>
            <div>
                <label className="text-lg- font-medium">Password</label>
                <input type="password" id='password'
                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
                placeholder="Enter  your password"
                value={password}
                onChange={(event) =>{
                    setPassword(event.target.value);
                }}
                />
            </div>
            <div className="mt-8 flex justify-between items-center">
                <div>
                    <input
                     type ="checkbox"
                     id="remember"/>
                     <label className="ml-2 font-medium text-base" for ="remember">Remember for 30 days</label>
                </div>
                <button className="font-medium text-base text-violet-500">Forgot password</button>
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
                <button onClick={login}  className=" active:scale-[.98] active:duration-75 hover:scale[1.01] ease-in-out transition-all  py-3 rounded-xl  bg-violet-500 text-white text-lg font-bold">LogIn</button>
            </div>
            
            <div className="mt-4 flex justify-between items-center">
                <h3 className="font-medium text-base">Are you a new User?</h3>
                <Link to="/sign-up" className="font-medium text-base text-violet-500">SignIn </Link>
            </div>
            
        </div>

    </div>
  )
  
}

export default LoginPage
