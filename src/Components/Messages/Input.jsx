import React, { useContext, useState } from "react";
import {BsSend} from 'react-icons/bs';
import {FcAddImage} from 'react-icons/fc';
import {MdAttachFile} from 'react-icons/md';
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../../firebase";

const Input = () =>{
    const [text,setText] = useState("");
    const [img,setImg] = useState(null);

    const {currentUser} = useContext(AuthContext);
    const {data} = useContext(ChatContext);

    const handleSend = async () => {
        if(img){
            const storageRef = ref(storage, uuid());

            const uploadTask = uploadBytesResumable(storageRef,img)

            
            uploadTask.on(
                (error) =>{

                },
                () =>{
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateDoc(doc(db,"chats",data.chatId),{
                            messages: arrayUnion({
                                id: uuid(),
                                text,
                                senderId: currentUser.uid,
                                date: Timestamp.now(),
                                img: downloadURL
                            }),
                        });
                    });
                }
            );
        } else {
            await updateDoc(doc(db,"chats",data.chatId),{
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    date: Timestamp.now(),
                }),
            });
        }

        await updateDoc(doc(db,"userChats", currentUser.uid),{
            [data.chatId + ".lastMessage"] : {
                text,
            },
            [data.chatId + ".date"] : serverTimestamp(),
            
        });

        await updateDoc(doc(db,"userChats", data.user.uid),{
            [data.chatId + ".lastMessage"] : {
                text,
            },
            [data.chatId + ".date"] : serverTimestamp(),
            
        });

        

        setText("");
        setImg(null);
        

    };

    return(
        <div className="input">
            <input type="text" placeholder="type something..."
            onChange={(e) => setText(e.target.value)}
            value={text}/>
            <div className="send">
                <MdAttachFile className="img"/>
                <input type="file" style={{display:"none"}} id="file" onChange={(e)=>setImg(e.target.files[0])}/>
                <label htmlFor="file">
                    <FcAddImage className="img"/>
                </label>
                <button className="button" onClick={handleSend}>
                    <BsSend className="imgbtn" />
                </button>
            </div>
        </div>
    );
};

export default Input;