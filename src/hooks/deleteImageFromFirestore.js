import { projectFirestore, projectStorage } from '../firebase/config';

const deleteImageFromFirestore = (currentDoc) => {
    projectFirestore.collection("images").doc(currentDoc.id).delete().then(function() {
        console.log("Document successfully deleted!");
        let url = currentDoc.url;
        let imageName = url.substring(url.indexOf("/o")+ 3, url.indexOf("?"));
        const storageRef = projectStorage.ref(imageName);
        console.log("image name is: " + imageName)
        storageRef.delete().then(() => {
            console.log("byebye jojo");
          }).catch((error) => {
            console.log("ugh oh " + error);
          });
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
    //window.location.reload(true);
}

export default deleteImageFromFirestore;