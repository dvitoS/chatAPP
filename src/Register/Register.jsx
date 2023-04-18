import React from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "../firebase";
import { doc, setDoc } from "firebase/firestore"; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Register.css';
import Avatar from '../Assets/avatar.png';


const Register = () =>{
    const[err,setErr] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = async (e) =>{
        e.preventDefault();

        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try{
            const res = await createUserWithEmailAndPassword(auth, email, password)
            
            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            // Register three observers:
           
            uploadTask.on(
                
              (error) => {
                setErr(true);          
              }, 

              () => {
                getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
                    await updateProfile(res.user,{
                        displayName,
                        photoURL: downloadURL,
                    });

                    await setDoc(doc(db, "users", res.user.uid),{
                        uid: res.user.uid,
                        displayName,
                        email,
                        photoURL: downloadURL,
                    });

                    await setDoc(doc(db, "userChats", res.user.uid),{});
                    navigate("/");
                });
              }
            );
              

        } catch(err) {  
            setErr(true);
        }
    };

    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">VeryChat</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="display name" />
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <input style={{display:"none"}} type="file" id="file" />
                    <label htmlFor="file">
                        <img src={Avatar} alt="" />
                        <p>Add an avatar</p>
                    </label>
                    <button>Sign up</button>
                    {err && <span>Something went wrong</span>}
                </form>
            </div>
        </div>
    )
}

export default Register;