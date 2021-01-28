import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

//A hook is to create a small chunk of reusable code to be used in multiple components.
//This hook will be responsable for handeling file uploads with the storage SDK.

//Hook to interact with our storage bucket (just photos)
const useStorage = (files) => {

    const [error, setError] = useState(null);
    const [urls, setUrl] = useState([]); //Image URLs from storage after uploading
   
    useEffect(() => { //This will happen everytime we get a new file
        for(let i = 0; i < files.length; i++){
            const storageRef = projectStorage.ref(files[i].name); //Reference to file in firebase bucket
            const collectionRef = projectFirestore.collection('images');

            //Asynchronous function that will fire when 'state_changed'
            storageRef.put(files[i]).on('state_changed', (snap) => { //When state changes, put the file in reference
            }, (err) => {
                console.error("Error on storage image upload: " + err);
                setError(err);
                return; //Continue, skip broken file
            }, async() => { //Async function that fires when upload is complete
                const url = await storageRef.getDownloadURL(); //get the URL of the image
                const createdAt = timestamp();
                collectionRef.add({ url, createdAt }); //Add the url of the image, and the created date into firestore
                const list = urls;
                list.push(url);
                setUrl(list); //Update our list of URLs
            }) 
        }
    }, [files]) //Dependancy array, will fire everytime files change.
    
    return { urls, error } //Accessible in other components
}

export default useStorage;