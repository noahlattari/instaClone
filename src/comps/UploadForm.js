import React, {useState} from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0]; // JUST THE FIRST FILE, THIS IS HOW U DO MULTIPLE 

        if(selected && types.includes(selected.type)) {
            setFile(selected); //File in local state
            setError('');
        } else {
            setFile(null);
            setError('Select only image files! (png/jpg)');
        }
    }

    return (
        <form>
          <label>
            <input type="file" onChange={changeHandler} />
            <span>+</span>
          </label>
          <div className="output">
            { error && <div className="error">{ error }</div>}
            { file && <div>{ file.name }</div> }
            { file && <ProgressBar file={file} setFile={setFile} /> }
          </div>
        </form>
      );
    }

export default UploadForm;