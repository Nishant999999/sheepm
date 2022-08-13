function addRoom()
window.location="kwitter.html";


const firebaseConfig = {
    apiKey: "AIzaSyDNOPGEO_MvvpG2PfdBf-d5QkaIjsh7OCM",
    authDomain: "c-94-project-beda0.firebaseapp.com",
    projectId: "c-94-project-beda0",
    storageBucket: "c-94-project-beda0.appspot.com",
    messagingSenderId: "495763553035",
    appId: "1:495763553035:web:aa1d6fd6a201f8c33d800e"
  };
  
  // Initialize Firebase
  
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();

  const app = initializeApp(firebaseConfig);

function logout(){
  localStorage.removeItem("user_name")
  window.location="kwitter.html"



}