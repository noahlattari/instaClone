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

## Improvements
If I had more time, these are the things I would have added:
1. An authentication service using fireAuth and Google/Email/Github that would be tied to your database entries in firestore
   1. Ability to upload files for other users to see or just for yourself.
2. A docker image/kubernetes pod for aditional scalability and an easier setup to ensure the app runs locally on any OS.
3. A dedicated hosting service/url, this could be done for money on AWS, Heroku, or Google Cloud.
   1. A prod and dev environment url
4. The ability to "like/upvote" public photos which would be configured in the firestore db.
5. A self-written backend. 
   1. firebase is a headless CMS (conent-management system) that provides data through its API. For more flexability, I could manually create a REST input to interface with a different NoSQL db (I would have chose MongoDB).
