firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        //User is signed in.
      var uid = user.uid;
      console.log(uid);
      // ...
    } else {
        window.location.replace("index.html");
      // User is signed out.
    }
  });
function signOff(){
	firebase.auth().signOut().then(function() {
        console.log('Signed Out');
        window.location.replace("index.html");
      }, function(error) {
        console.error('Sign Out Error', error);
      });
}