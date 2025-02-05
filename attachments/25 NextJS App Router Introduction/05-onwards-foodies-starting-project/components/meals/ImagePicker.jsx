/* eslint-disable react/prop-types */
"use client"
import React, { useRef } from 'react'
import classes from "./ImagePicker.module.css";

function ImagePicker({ label, name }) {
    const imageInputRef = useRef()
    function handleClick() {
        imageInputRef.current.click();
    }
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <input
                    className={classes.input}
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