import React, { useState, useEffect } from "react";
import {
  LoginWrapper,
  LoginHeader,
  LoginHeading,
  LoginBody,
  LoginFieldset,
  LoginInput,
  LoginButton,
} from "./components/Login";

const jsonImages = require("./data/image_data.json");

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const [selectedImage, setSelectedImage] = useState(jsonImages.images[0].url);
  const [images, setImages] = useState(jsonImages.images);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      const loggedInUser = JSON.parse(user);
      setUser(loggedInUser);
    }
  }, []);

  const handleLogout = () => {
    setUser();
    setUsername("");
    setPassword("");
    localStorage.removeItem("user");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, password };
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const handleSelect = (e) => {
    setSelectedImage(e.target.value);
  };

  // if user, show the image gallery
  return user ? (
    <>
      <div>{user.username} is logged in</div>
      {images.map((image, i) => {
        return (
          <button key={i} value={image.url} onClick={(e) => handleSelect(e)}>
            {image.filename}
          </button>
        );
      })}

      <iframe
        key={selectedImage}
        width="600"
        height="400"
        allowFullScreen
        src={`https://cdn.pannellum.org/2.5/pannellum.htm#panorama=${selectedImage}`}
      />
      <LoginButton type="button" onClick={handleLogout}>
        Logout
      </LoginButton>
    </>
  ) : (
    <LoginWrapper>
      <LoginHeader>
        <LoginHeading>Sign in</LoginHeading>
      </LoginHeader>

      <LoginBody>
        <LoginInput
          placeholder="Username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <LoginFieldset>
          <LoginInput
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </LoginFieldset>

        <LoginFieldset>
          <LoginButton type="button" onClick={handleSubmit}>
            Sign In
          </LoginButton>
        </LoginFieldset>
      </LoginBody>
    </LoginWrapper>
  );
};

export default App;
