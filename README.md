# Showcacse Template

## Getting Started

```
git clone https://github.com/RealLankinen/showcase-template.git
npm install
mkdir showcase-template/src/assets
```

Add a video with a name `video.mp4` to this new asset directory. This video is used in the website. If you want to use an image instead of a video it's possible by adding `image.jpg` to the same directory and then changing `showVideoBackground` to false in config.

When you want to customize the code to your own purpose almost all of the modifications should be done in Config.js file. The idea is that this way developer should almost never touch the code and even a person without any coding skills should be available to do it. The only expection is that you probably want to add title and icon to the website which requires modifying things in `public` directory.

Question answers are saved to Firestore database. It's free up to certain point which is often enough. More here: https://firebase.google.com/pricing

When you have an account add the project id to `src/Firebase.js`. Also change `collectionName` in `src/utils/Config.js` to match with the collection you have created to Firestore. Make sure your security rules allow writing from anyone.

## Run Locally

```
npm run
```

[http://localhost:3000](http://localhost:3000)

## Deploy [Firebase](https://firebase.google.com/)

Run these in the root directory.

```
npm run-script build
npm install firebase-tools -g
firebase login
firebase init
```

Choose **Hosting: Configure and deploy Firebase Hosting sites**, **Create a new project**, What do you want to use as your public directory? => **build**, Configure as a single-page app? => **Yes**, File build/index.html already exists. Overwrite? **n**

```
firebase deploy
```
