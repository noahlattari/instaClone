import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

//Hook to call and interact with firestore.
const useFirestore = (collection) => {

    const [docs, setDocs] =useState([]);

    useEffect(() => { //Callback function that runs when we have a change, provides real time updates.
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc') //Sort images by newest first
            .onSnapshot((snap) => { //Snap is a state of the db at that time
                let documents = [];
                snap.forEach(doc => {
                 documents.push({...doc.data(), id: doc.id}); //Upload each document with two fields.
             });
             setDocs(documents);
            });
        return () => unsub(); //Unsubscribe from collection when we don't use it, clean up.
    }, [collection])

    //return our docs array.
    return { docs };
}

export default useFirestore;