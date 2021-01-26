import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';
//Hooks make our code more reusable!

//A hook is to create a small chunk of reusable code to be used in multiple components.
//This hook will be responsable for handeling file uploads with the storage SDK, will return progress and stuff.

const useStorage = (files) => {

    const [error, setError] = useState(null);
    const [urls, setUrl] = useState([]); //image URL from storage after uploading, stores in DB.
   
    useEffect(() => { //This will happen everytime the dependancy changes.
        for(let i = 0; i < files.length; i++){
            const storageRef = projectStorage.ref(files[i].name); //Reference to file in firebase bucket
            const collectionRef = projectFirestore.collection('images');

            storageRef.put(files[i]).on('state_changed', (snap) => { //When state changes, put the file in firebase
            }, (err) => {
                setError(err);
            }, async() => { //Asynchronous, whenever progress changes, use this function
                const url = await storageRef.getDownloadURL();
                const createdAt = timestamp();
                collectionRef.add({ url, createdAt });
                const list = urls;
                list.push(url);
                setUrl(list); //Image url is now in storage
            }) 
        }
    }, [files, urls])
    console.log("urls in usestorage size: " + urls.length);
    
    return { error } //Accessible in other components
}

export default useStorage;