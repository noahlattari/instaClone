import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] =useState([]);

    useEffect(() => { //Callback function that runs when we have a change, provides real time updates with active listener
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc') //sort by newest first
            .onSnapshot((snap) => { //Snap is a snapshot of the db at that time with all the documents.
                let documents = [];
                snap.forEach(doc => {
                 documents.push({...doc.data(), id: doc.id}); //Each has both properties + an id
             });
             setDocs(documents);
            });
        return () => unsub(); //Unsubscribe from collection when we don't use it, clean up.
    }, [collection])

    return { docs };
}

export default useFirestore;