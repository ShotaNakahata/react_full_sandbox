/* eslint-disable react/prop-types */
"use client"
import React, { useRef, useState } from 'react'
import classes from "./ImagePicker.module.css";
import Image from 'next/image';

function ImagePicker({ label, name }) {
    const imageInputRef = useRef()
    const [packedImage, setPickedImage] = useState()
    function handleClick() {
        imageInputRef.current.click();
    }
    function handleImageChange(e) {
        const file = e.target.files[0]
        if (!file) return;
        const fileReader = new FileReader()
        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(file);

    }
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!packedImage && <p>No image picked</p>}
                    {/* なぜここではpackedImage.srcではなくpackedImageだけでいいのか */}
                    {packedImage && <Image src={packedImage} alt='user picked image' fill/>}
                </div>
                <input
                    className={classes.input}
                    onChange={handleImageChange}
                    ref={imageInputRef}
                    type="file"
                    id={name}
                    name={name}
                    accept='image/png, image/jpg'
                />
                <button
                    className={classes.button}
                    type="button"
                    onClick={handleClick}>
                    Pick an Image
                </button>
            </div>
        </div>
    )
}

export default ImagePicker