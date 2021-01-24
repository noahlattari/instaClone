import React, {useState} from 'react';
import ProgressBar from './ProgressBar';
import uploadButton from '../comps/uploadButton.png'

const UploadForm = () => {
    const [file, setFile] = useState(null); //react hooks
    const [error, setError] = useState(null);

    const types = ['image/*'];

    const changeHandler = (e) => {
        let selected = e.target.files[0]; // JUST THE FIRST FILE, THIS IS HOW U DO MULTIPLE 
        console.log(selected);
        if(selected /*&& types.includes(selected.type)*/) {
            for (let i = 0; i < e.target.files.length; i++) {
                console.log("setting file of "+ i )
                setFile(selected[i]);
                setError('');
            }
            //setFile(selected); //File in local state
           
        } else {
            setFile(null);
            setError('Select only image files! (png/jpg)');
        }
    }

    return (
        <form>
          <label class="grow">
            <input type="file" id="files" multiple onChange={changeHandler} />
             📁 
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