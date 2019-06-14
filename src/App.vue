<template>
<div id="app">

  <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light">
      <router-link to="/" class="nav-link navbar-brand" href="#">
      <img src="./assets/bat-temp.png" alt="bat" style="max-height:50px;max-width:50px;height:auto;width:auto;" />
      haibatty</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/character" class="nav-link">New Characters</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <div>
    <router-view class="view"></router-view>
  </div>

</div>
</template>

<style>
@import './assets/grayscale.css';
</style>

<style>
html {
  position: relative;
  min-height: 100%;
}

body {
  margin-bottom: 60px;
  /* Margin bottom by footer height */
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  /* Set the fixed height of the footer here */
  line-height: 60px;
  /* Vertically center the text there */
  background-color: #f5f5f5;
}
</style>
