
  let editUsername = document.getElementById("username");
  let editPassword = document.getElementById("password");

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        //User is signed in.
        window.location.replace("logged-in.html");
      var uid = user.uid;
      console.log(uid);
      // ...
    } else {
      // User is signed out.
    }
  });

  function login(){
      console.log("login clicked "+ editUsername.value);
      console.log("login clicked "+ editPassword.value);

      firebase.auth().signInWithEmailAndPassword(editUsername.value, editPassword.value)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                window.location.replace("logged-in.html");
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
  }