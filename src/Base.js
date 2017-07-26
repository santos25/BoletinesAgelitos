import Rebase from 're-base';
import firebase from 'firebase';

var app = firebase.initializeApp({
  apiKey: "AIzaSyCAHZlkqQ-1Nl6Tqlf4yXaHmts653ACysk",
  authDomain: "cinforme-angelitos.firebaseapp.com",
  databaseURL: "https://informe-angelitos.firebaseio.com",
  projectId: "informe-angelitos"
});

var base = Rebase.createClass(app.database());

export default base;
