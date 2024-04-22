const btngg = document.querySelector("#btngoogle");

const loginwithgoogle = () => {

    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    
    .then((result) => {
        var credential = result.credential;
    
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // IdP data available in result.additionalUserInfo.profile.

        console.log("Login Success!!");
      }).catch((error) => {
        console.log(error);
      });
    
}

btngg.addEventListener('click', loginwithgoogle);


/////////////////////////////////////////////////////

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("User :", user);
      getList(user);

      document.getElementById('uimage').innerHTML = "<img id='uimage' style='logged-in' src='" + user.photoURL + "'>";
      document.getElementById('uname').innerHTML =  user.displayName;
    } 
    // else {
    //     console.log("Unaviable User.")
    // }
    setupUI(user);

});

const btnLogout = document.querySelector("#btnLogout");
btnLogout.addEventListener("click", function() {
    firebase.auth().signOut();
    console.log("Logout Complete.");
})
