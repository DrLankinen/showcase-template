# Showcacse Template

## Getting Started

```
git clone https://github.com/RealLankinen/showcase-template.git
npm install
mkdir showcase-template/src/assets
```

Add a video with a name `video.mp4` to this new asset directory. This video is used in the website.

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
