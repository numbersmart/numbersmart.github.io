/*!
 * Firebase test
 
var ref = new Firebase("https://numbersmart-oauth.firebaseio.com");

function testFB() {
  ref.set({
    title: "testing!"
  });
}

var ref = new Firebase("https://numbersmart-oauth.firebaseio.com");

ref.authWithPassword({
  email    : "bobtony@firebase.com",
  password : "correcthorsebatterystaple"
}, function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});
*/

<script>
    var signupForm = document.getElementById('signup-form');
    var signupSuccess = document.getElementById('signup-success');
    var signupError = document.getElementById('signup-error');
    var signupBtn = document.getElementById('signup-button');
    var onSignupComplete = function(error) {
      signupBtn.disabled = false;
      if (error) {
        signupError.innerHTML = 'Sorry. Could not signup.';
      } else {
        signupSuccess.innerHTML = 'Thanks for signing up!';
        // hide the form
        signupForm.style.display = 'none';
      }
    };
    function signup(formObj) {
        // Store emails to firebase
        var myFirebaseRef = new Firebase("https://numbersmart-oauth.firebaseio.com/signups");
        myFirebaseRef.push({
          email: formObj.email.value,
        }, onSignupComplete);
        signupBtn.disabled = true;
        return false;
    }
</script>