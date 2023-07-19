// it is not part of project

import React, { useEffect } from "react";
import { Button } from "@mui/material";

const GoogleSignIn = () => {
  useEffect(() => {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          client_id: "YOUR_CLIENT_ID",
        })
        .then(() => {
          const auth2 = window.gapi.auth2.getAuthInstance();
          const googleSignInButton = document.getElementById("google-signin-button");

          auth2.attachClickHandler(
            googleSignInButton,
            {},
            (googleUser) => {
              const id_token = googleUser.getAuthResponse().id_token;
              // Handle the Google sign-in response
              console.log("Google Sign-In successful", id_token);
            },
            (error) => {
              // Handle sign-in errors
              console.error("Google Sign-In Error", error);
            }
          );
        })
        .catch((error) => {
          console.error("Google Sign-In Error", error);
        });
    });
  }, []);

  return (
    <Button id="google-signin-button" fullWidth variant="contained">
      Sign in with Google
    </Button>
  );
};

export default GoogleSignIn;
