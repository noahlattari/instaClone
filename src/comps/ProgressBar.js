import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ files, setFiles }) => {

    const { urls, progress } = useStorage(files);

    useEffect( () => {
        console.log(urls.length);
        console.log(files.length);
        if(urls.length === files.length) {
            setFiles([]); //Remove progress bar when image is uploaded
            console.log("files empty")
            console.log("Files after empty: " + files.length);
        }
    }, [setFiles, files, urls])

    return (
        <div className="progress-bar" style ={{ width: progress + '%' }}></div> 
    )

}

export default ProgressBar;