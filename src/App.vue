<template>
  <div id="appWrapper">
    <header class="header">
      <nav>
        <div class="navbar-container">
          <ul>
            <li>
              <router-link class="link" to="/">Home</router-link>
            </li>
            <li class="separator">|</li>
            <li>
              <router-link class="link" to="/about">About</router-link>
            </li>
            <li class="separator">|</li>
            <li>
              <router-link class="link" to="/todo">Todo</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <div id="app">
      <div id="main">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
    <footer id="footer">
      Made with
      <span style="color: blue;">❤</span> by IF
    </footer>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,500&display=swap");

* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
}

#appWrapper {
  min-height: 100%;
}

#app {
  /* font-family: "Ubuntu", sans-serif; */
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#main {
  overflow: auto;
  padding-bottom: 40px;
}

.separator {
  color: white;
}

.header {
  background: #276f4e;
}

#footer::before {
  display: none;
}

#footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-image: linear-gradient(
    to right,
    #276f4e,
    #20814c,
    #239445,
    #32a638,
    #48b720
  );
  padding: 4px 0px 4px 0px;
  text-align: center;
  color: white;
  font-size: 13px;
  display: block;
}

.navbar-container {
  text-align: center;
}

nav {
  padding: 10px;
}

nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 5px 0px 0px 0px;
  padding: 0;
}

nav li {
  padding: 0px 15px 0px 15px;
}

nav a.link {
  color: #7acea8;
  text-decoration: none;
  font-size: 18px;
}

nav a::after {
  content: "";
  display: block;
  height: 3px;
  background-color: white;
  width: 0%;
  transition: all ease-in-out 250ms;
}

nav a:hover::after {
  width: 100%;
}

nav a:hover {
  color: white;
}

nav a.router-link-exact-active {
  color: white;
}

nav a.router-link-exact-active::after{
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
