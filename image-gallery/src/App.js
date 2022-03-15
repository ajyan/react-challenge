import React, { useState, useEffect } from "react";
import {
  LoginWrapper,
  LoginHeader,
  LoginFieldset,
  LoginInput,
  LoginButton,
  Body,
  Heading,
} from "./components/Login";

import {
  ImageButton,
  ImageButtonWrapper,
  ImageDetail,
  NavBar,
  LogoutButton,
  Gallery,
} from "./components/Gallery";

const jsonImages = require("./data/image_data.json");

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const [selectedImage, setSelectedImage] = useState(0);
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
    <div>
      <NavBar>
        <div>{user.username} is logged in</div> {/* change to logout */}
        <LogoutButton type="button" onClick={handleLogout}>
          Logout
        </LogoutButton>
      </NavBar>
      <Gallery>
        <ImageButtonWrapper>
          {images.map((image, i) => {
            return (
              <ImageButton
                key={image.id}
                value={image.id - 1}
                onClick={(e) => handleSelect(e)}
              >
                {image.title}
              </ImageButton>
            );
          })}
        </ImageButtonWrapper>

        <iframe
          key={selectedImage}
          height="600"
          width={"100%"}
          allowFullScreen
          src={`https://cdn.pannellum.org/2.5/pannellum.htm#panorama=${images[selectedImage].url}&autoLoad=true`}
        />

        <div>
          <LoginHeader>
            <Heading>Image Details</Heading>
          </LoginHeader>

          <Body>
            <div>
              <ImageDetail>ID: </ImageDetail> {images[selectedImage].id}
            </div>
            <div>
              <ImageDetail>Filename: </ImageDetail>
              {images[selectedImage].filename}
            </div>
            <div>
              <ImageDetail>Title: </ImageDetail> {images[selectedImage].title}
            </div>
            <div>
              <ImageDetail>Taken On: </ImageDetail>{" "}
              {images[selectedImage].taken_on}
            </div>
            <div>
              <ImageDetail>Location: </ImageDetail>{" "}
              {images[selectedImage].location}
            </div>
          </Body>
        </div>
      </Gallery>
    </div>
  ) : (
    <LoginWrapper>
      <LoginHeader>
        <Heading>Sign in</Heading>
      </LoginHeader>

      <Body>
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
      </Body>
    </LoginWrapper>
  );
};

export default App;
