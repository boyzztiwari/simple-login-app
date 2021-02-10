var firebaseConfig = {
    apiKey: "AIzaSyA_MkDGDlEJeWgFnv4lPTnJ9PshRjQw0hg",
    authDomain: "simple-login-ebe0e.firebaseapp.com",
    projectId: "simple-login-ebe0e",
    storageBucket: "simple-login-ebe0e.appspot.com",
    messagingSenderId: "379602892450",
    appId: "1:379602892450:web:0fe5368574f68676d389fb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});