
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import imageToBase64 from 'image-to-base64/browser';
// import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'

export const Form = () => {
    const navigate = useNavigate()
    let disabled = true;
    const [user, setUser] = useState({
        img: '',
        author: '',
        location: '',
        description: '',
        likes: Math.floor(Math.random() * 150),
        date: Date.now()

    })

    const convertFile = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => { reject(error) }
        });
    }

    const handleFile = async (e) => {
        const imgPath = await convertFile(e.target.files[0]);
        setUser({ ...user, img: imgPath })
    }
    const saveInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]: value })
        // console.log(user)
    }
    if (user.author !== "" && user.img !== "" && user.description !== "" && user.location !== "") {
        disabled = false
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const { img, author, location, description } = user;
            await fetch('https://instaclone-app-node.herokuapp.com/form', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    img, author, location, description
                })
            })
            console.log("Post added successfully")
            navigate('/postView')
        } catch (err) {
            console.log(err.message)
        }

    }

    return (
        <div className="postForm">
            <form className="form" method="POST" >
                <input type="file" placeholder="Path of the photo" id="post" name="img" onChange={(e) => { handleFile(e) }} />
                <div className="info1">
                    <input onChange={(e) => { saveInput(e) }} type="text" placeholder="Author" name="author" /> <input onChange={(e) => { saveInput(e) }} type="text" placeholder="location" name="location" />
                </div>
                <input onChange={(e) => { saveInput(e) }} type="text" placeholder="Description" name="description" />
                <div className="postBtn"><button className="btn btn-success mt-2" id="postBtn" onClick={handleSubmit} disabled={disabled} >Post <br /> <p className="wait">(Please wait after clicking once)</p> </button></div>
            </form>
        </div >
    )
}
