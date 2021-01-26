import React from 'react';
import useFirestore from '../hooks/useFirestore';
import deleteImageFromFirestore from '../hooks/deleteImageFromFirestore';

//ImageGrid component: Define the square grid photos should be populated into
const ImageGrid = ({ setSelectedImg })  => {
    const { docs } = useFirestore('images'); //Define a docs object to hold our collection of documents.

    //Return JSX to represent the image grid. Also handle enlarging the selected image and deleting the individual image.
    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                <div className="img-wrap" key ={doc.id}> 
                    <img src={doc.url} className="userImage" alt="User Submittion" key ={doc.id} width="215" height="215"
                        onClick={() => setSelectedImg(doc.url)} //OnClick enlarge the photo.
                    ></img>
                    <span role="img" className="deleteButton" aria-label="folder emoji" onClick={() => deleteImageFromFirestore(doc)}>✖️</span>
                </div>
            ))}
        </div>
    )
}

export default ImageGrid;