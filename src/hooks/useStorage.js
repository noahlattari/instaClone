import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';
//Hooks make our code more reusable!

//A hook is to create a small chunk of reusable code to be used in multiple components.
//This hook will be responsable for handeling file uploads with the storage SDK, will return progress and stuff.

const useStorage = (file) => {
    console.log("THE FILE IS" + file); //Runs everytime we get a new file
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null); //image URL from storage after uploading, stores in DB.

    useEffect(() => { //This will happen everytime the dependancy changes.

        const storageRef = projectStorage.ref(file.name); //Reference to file in firebase bucket
        const collectionRef = projectFirestore.collection('images');

        storageRef.put(file).on('state_changed', (snap) => { //When state changes, put the file in firebase
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100 //Percentage progress of upload
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async() => { //Asynchronous, whenever progress changes, use this function
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({ url, createdAt });
            setUrl(url); //Image url is now in storage
        }) 
    }, [file])
    return { progress, url, error } //Accessible in other components

}

export default useStorage;