import React from 'react';

//Modal component: Hanles enlarging images.
const Modal = ({ selectedImg, setSelectedImg }) => {

    //Click listener to handle enlargement of photos when clicked.
    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){ //Close the photo when the user clicks out of it.
            setSelectedImg(null);
        }
    }

    /* TODO: Add a smooth animation/transitions to the photos being enlarged. */

    //Return JSX for the backdrop (outside of the photo)
    return (
        <div className="backdrop" onClick={handleClick}>
            <img src={selectedImg} alt="User submission."/>
        </div>
    )

}

export default Modal;