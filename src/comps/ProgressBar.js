import React from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ files, setFiles }) => {

    useStorage(files);
    return <div></div>
}

export default ProgressBar;