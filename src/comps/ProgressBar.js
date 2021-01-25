import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ files, setFiles }) => {

    useStorage(files);
    /*
    useEffect( () => {
        if(urls.length === files.length) {
            setFiles([]); //Remove progress bar when image is uploaded
        }
    }, [setFiles, urls])

    return (
        <div className="progress-bar" style ={{ width: (progress * files.length) + '%' }}></div> 
    )
        */
    return <div></div>
}

export default ProgressBar;