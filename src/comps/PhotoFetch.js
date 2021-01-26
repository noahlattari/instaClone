import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

//PhotoFetch component to allow us to easily call our useStorage hook.
const PhotoFetch = ({ files, setFiles }) => {

    const { urls } = useStorage(files); //Call the useStorage hook to upload to our db.

    useEffect(() => {
        if (urls.length === files.length) {
            setFiles([]); //If we have the same amount of URLS as Files, we have uploaded every file, empty the array.
        }
    }, [urls, setFiles]);

    return <div></div>
}

export default PhotoFetch;