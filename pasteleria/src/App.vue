<template>
  <nav>
  <img src="../src/assets/logoPasteleria.png" alt="">
    <router-link to="/" class="nav-inblock">Inicio</router-link> 
    <router-link to="/about" class="nav-inblock">Pedido</router-link>
  </nav>
  <router-view/>
</template>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  
}

.nav-inblock{
    display: inline-block;
    text-decoration: none;
    padding: 10px 30px;
    color: #ABADB3;
    font-weight: bold;
}
nav a {
  
  margin-left: 25px;
  font-weight: bold;
  color: black;
  text-decoration: none;
 
}

nav a.router-link-exact-active {
  color: rgb(188, 143, 145);
}

.titulo{
  font-size: 20px;
  font-weight: bolder;
  color: black;
  font-family: baskerville;
}
img{
  width: 75px;
  border-radius: 50%;
}
*{
  margin: 0px;
  padding: 0px;
  background-color: #FFE3D2;
}
</style>
