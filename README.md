# instaClone 📷

instaClone is a full-stack photo sharing application using React.js and Firebase. This was made as a part of Shopify's 2021 Summer Internship requirements.

## Usage & Features:

##### Uploading photos:
Click the "📁" folder emoji at the top to upload one or many photos and watch the site update in real time.
##### Secured uploads:
Both firebase, and my backend will check to only allow .jpg, .png, and .gif files resulting in a secure, scalable database solution.

##### Deleting photos:
Click the "❌" emoji to delete all photos.
Click the small "✖" emoji under each photo to delete an individual photo.

## Technology used:
instaClone uses a number of projects to work properly:
* [React.js](https://reactjs.org/) - A front-end framework for creating applications.
* [Google Cloud Storage](https://firebase.google.com/docs/storage/web/start) - An exabyte scale object storage solution with high availability and global redundancy.
* [Google Firestore](https://cloud.google.com/firestore) - A serverless NoSQL document database that effortlessly scales to meet any demand, with no maintenance.
* [Twitter Bootstrap](https://getbootstrap.com/) - A UI boilerplate for modern web apps.
* [npm](https://www.npmjs.com/get-npm) - A package manager for all our dependancies
* **HTML, CSS, and JavaScript** - The basics 😎.

## Installation

None: **Simply go to: https://noah-instaclone.web.app/.**
#### Running locally:
instaClone requires [npm](https://www.npmjs.com/get-npm) to run.
Install the dependencies and start the server.
```sh
$ cd instaClone
$ npm install -d
$ npm start
```
This will **not work** off the bat as you need to poulate **config.js** with my firebase secrets. Posting your secrets online is a huge security concern (someone can hi-jak your application with the keys), these fields are populated from an uncommited **.env file** and read from PROCESS.ENV.

## Issue
After uploading photos and waiting for it to finish, uploading again will not work. To fix this simply refresh the page after you've uploaded the photos. This is due to the **setFiles** array not emptying properly and forcing a refresh on that component.