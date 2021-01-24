import React from 'react';
import useFirestore from '../hooks/useFirestore';

const ImageGrid = ({ setSelectedImg })  => {
    const { docs } = useFirestore('images'); //return any documents we have in db
    console.log(docs);

    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                <div className="img-wrap" key ={doc.id}
                    onClick={() => setSelectedImg(doc.url)}
                > 
                    <img src={doc.url} alt="User Submitted Image"></img>
                </div>
            ))}
        </div>
    )

}

export default ImageGrid;