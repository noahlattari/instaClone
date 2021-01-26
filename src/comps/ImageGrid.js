import React from 'react';
import useFirestore from '../hooks/useFirestore';

import deleteImageFromFirestore from '../hooks/deleteImageFromFirestore';

const ImageGrid = ({ setSelectedImg })  => {
    const { docs } = useFirestore('images'); //return any documents we have in db

    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                <div className="img-wrap" key ={doc.id}> 
                    <img src={doc.url} className="userImage" alt="User Submittion" key ={doc.id} width="215" height="215"
                        onClick={() => setSelectedImg(doc.url)}
                    ></img>
                    <span role="img" className="deleteButton" aria-label="folder emoji" onClick={() => deleteImageFromFirestore(doc)}>✖️</span>
                </div>
            ))}
        </div>
    )
}

export default ImageGrid;