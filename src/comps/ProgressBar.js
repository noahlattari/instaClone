import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ files, setFiles }) => {

    const { urls } = useStorage(files);

    useEffect(() => {
        if (urls.length === files.length) {
            setFiles([]);
        }
    }, [urls, setFiles]);

    return <div></div>
}

export default ProgressBar;