import React, { useState } from "react";
import * as Components from "./AnimatedStyle";
import PageNav from "../Components/PageNav.jsx";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showToast } from "./showToast.jsx";

function App() {
  const [signIn, toggle] = useState(true);
  const navigate = useNavigate();

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!signUpName || !signUpEmail || !signUpPassword) {
      showToast("error", "All fields are required for sign-up.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        signUpEmail,
        signUpPassword
      );
      await setDoc(doc(db, "Users", userCredential.user.uid), {
        email: userCredential.user.email,
        name: signUpName,
        password: signUpPassword,
      });
      showToast("success", "User registered successfully!");
      setTimeout(() => {
        navigate("/app/cities");
      }, 1800);
    } catch (error) {
      const errorMessage =
        error.code === "auth/email-already-in-use"
          ? "Email already in use. Please try a different email."
          : `Error during sign-up: ${error.message}`;
      showToast("error", errorMessage);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, signInEmail, signInPassword);
      showToast("success", "User logged in successfully!");
      setTimeout(() => {
        navigate("/app/cities");
      }, 2000);
    } catch (error) {
      const errorMessage =
        error.code === "auth/user-not-found"
          ? "No user found with this email. Please sign up."
          : error.code === "auth/wrong-password"
          ? "Incorrect password. Please try again."
          : `Error during sign-in: ${error.message}`;
      showToast("error", errorMessage);
    }
  };

  const handleProviderSignIn = async (provider, successMessage) => {
    try {
      await signInWithPopup(auth, provider);
      showToast("success", successMessage);
      setTimeout(() => {
        navigate("/app/cities");
      }, 1000);
    } catch (error) {
      const errorMessage =
        error.code === "auth/popup-closed-by-user"
          ? "The popup was closed before completing sign-in."
          : `Error during sign-in: ${error.message}`;
      showToast("error", errorMessage);
    }
  };

  return (
    <main>
      <Components.EntireContentLogin>
        <Components.NavBar>
          <PageNav />
        </Components.NavBar>
        <Components.Container>
          <Components.SignUpContainer $signinIn={signIn}>
            <Components.Form>
              <Components.Title>Create Account</Components.Title>
              <Components.SocialIcons>
                <Components.Icon
                  href="#"
                  onClick={() =>
                    handleProviderSignIn(
                      new GoogleAuthProvider(),
                      "Google sign-in successful!"
                    )
                  }
                >
                  <i className="fab fa-google-plus-g"></i>
                </Components.Icon>
                <Components.Icon
                  href="#"
                  onClick={() =>
                    handleProviderSignIn(
                      new FacebookAuthProvider(),
                      "Facebook sign-in successful!"
                    )
                  }
                >
                  <i className="fab fa-facebook-f"></i>
                </Components.Icon>
                <Components.Icon
                  href="#"
                  onClick={() =>
                    handleProviderSignIn(
                      new GithubAuthProvider(),
                      "GitHub sign-in successful!"
                    )
                  }
                >
                  <i className="fab fa-github"></i>
                </Components.Icon>
              </Components.SocialIcons>
              <Components.Input
                type="text"
                placeholder="Name"
                value={signUpName}
                onChange={(e) => setSignUpName(e.target.value)}
              />
              <Components.Input
                type="email"
                placeholder="Email"
                value={signUpEmail}
                onChange={(e) => setSignUpEmail(e.target.value)}
              />
              <Components.Input
                type="password"
                placeholder="Password"
                value={signUpPassword}
                onChange={(e) => setSignUpPassword(e.target.value)}
              />
              <Components.Button onClick={handleSignUp}>
                Sign Up
              </Components.Button>
            </Components.Form>
          </Components.SignUpContainer>

          <Components.SignInContainer $signinIn={signIn}>
            <Components.Form>
              <Components.Title>Sign in</Components.Title>
              <Components.Input
                type="email"
                placeholder="Email"
                value={signInEmail}
                onChange={(e) => setSignInEmail(e.target.value)}
              />
              <Components.Input
                type="password"
                placeholder="Password"
                value={signInPassword}
                onChange={(e) => setSignInPassword(e.target.value)}
              />
              <Components.Anchor href="#">
                Forgot your password?
              </Components.Anchor>
              <Components.Button onClick={handleSignIn}>
                Sign In
              </Components.Button>
            </Components.Form>
          </Components.SignInContainer>

          <Components.OverlayContainer $signinIn={signIn}>
            <Components.Overlay $signinIn={signIn}>
              <Components.LeftOverlayPanel $signinIn={signIn}>
                <Components.Title>Welcome Back!</Components.Title>
                <Components.Paragraph>
                  To keep connected with us, please login with your personal
                  info.
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(true)}>
                  Sign In
                </Components.GhostButton>
              </Components.LeftOverlayPanel>

              <Components.RightOverlayPanel $signinIn={signIn}>
                <Components.Title>Hello, Friend!</Components.Title>
                <Components.Paragraph>
                  Enter your personal details and start your journey with us.
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(false)}>
                  Sign Up
                </Components.GhostButton>
              </Components.RightOverlayPanel>
            </Components.Overlay>
          </Components.OverlayContainer>
        </Components.Container>
      </Components.EntireContentLogin>
      <ToastContainer />
    </main>
  );
}

export default App;
