<template>
  <div>
    <header>
      <nav>
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/menu1">Menu1</nuxt-link>
        <nuxt-link to="/menu2">Menu2</nuxt-link>
        <nuxt-link to="/menu3">Menu3</nuxt-link>
        <nuxt-link to="/menu4">Menu4</nuxt-link>
      </nav>
    </header>
    <nuxt />
  </div>
</template>

<style>
/* Fonts */
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400');

/* fontawesome */
@import url('http://weloveiconfonts.com/api/?family=fontawesome');
[class*='fontawesome-']:before {
  font-family: 'FontAwesome', sans-serif;
}

/* Simple Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* body */
body {
  background: #e9e9e9;
  color: #5e5e5e;
  font: 400 87.5%/1.5em 'Open Sans', sans-serif;
}

/* header */
header {
  width: 100%;
  background-color: #3498db;
  text-align: center;
  top: 0;
  overflow: hidden;
}

header nav {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
}

header nav a {
  color: #fff;
  display: inline-block;
  padding: 15px 25px;
  line-height: 1;
  text-decoration: none;
}

header nav a:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
