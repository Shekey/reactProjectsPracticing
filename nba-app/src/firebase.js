import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyABdCoLSl2fe6rYla-6rzWlP6KE6F35s3w",
  authDomain: "nba-full-bfe53.firebaseapp.com",
  databaseURL: "https://nba-full-bfe53.firebaseio.com",
  projectId: "nba-full-bfe53",
  storageBucket: "nba-full-bfe53.appspot.com",
  messagingSenderId: "154033564107",
  appId: "1:154033564107:web:3dc7bc0e1e00c2277bae4e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
  const data = [];

  snapshot.forEach((child) => {
    data.push({
      ...child.val(),
      id: child.key
    })
  });
  return data;
}
export {
  firebase,
  firebaseDB,
  firebaseTeams,
  firebaseArticles,
  firebaseVideos,
  firebaseLooper
}