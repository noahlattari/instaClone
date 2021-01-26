import { projectFirestore, projectStorage } from '../firebase/config';

//Hook to delete an indidual document from the firestore db, and its associated image from the storage db.
const deleteImageFromFirestore = (currentDoc) => {
    //Delete the current doc from the "images" colelction.
    projectFirestore.collection("images").doc(currentDoc.id).delete().then(function() {
        console.log("Document successfully deleted!");
        let url = currentDoc.url;

        let imageName = url.substring(url.indexOf("/o")+ 3, url.indexOf("?"));
        /* imageName is the name of the picture from the generated url, for example
          https://firebasestorage.googleapis.com/v0/b/noah-instaclone.appspot.com/o/help.jpg?
            alt=media&token=3ae1a72f-bbda-4a0d-a546-addabbff634e
            imageName in this case would be: "help.jpg".
        */

        const storageRef = projectStorage.ref(imageName);
        console.log("image name is: " + imageName)

        //We need to also delete from our other database holding just the images.
        storageRef.delete().then(() => {
            console.log("byebye jojo");
          }).catch((error) => {
            console.error("Error on image deletion from database: " + error);
          });

    }).catch(function(error) {
        console.error("Error removing document from firestore: ", + error);
    });
}

export default deleteImageFromFirestore;