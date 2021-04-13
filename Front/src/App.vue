<template>
  <div id="app">
      <b-container fluid="sm">
        <router-view/>
      </b-container>
  </div>
</template>

<script>

import Header from './components/header.vue'
import login from './components/login';
import RegSup from './components/RegSup';
import register from './components/register';
import ListUser from './components/ListUser';
import ListSup from './components/ListSup';
import ListSupFromUsers from './components/ListSupFromUsers';
import Supporters from './views/Supporters';
import Users from './views/Users';
import SupportersSupp from './views/SupportersSupp.vue';
import SupportersUser from './views/SupportersUser.vue';
// import Modify from './views/Modify';

export default {
  name: 'App',
  components: {
    Header,
    login,
    RegSup,
    register,
    ListUser,
    ListSup,
    ListSupFromUsers,
    Supporters,
    Users,
    SupportersSupp,
    SupportersUser,
          // Modify,
  }
}
</script>

<style>
h1, h2 {
  font-weight: bolder;
  margin: 20px 0px;
  text-align: center;
  align-content: center;
}

#app {
  font-family: "Arial";
  font-size: 100%;
  text-align: center;
  color:  #000000 ;
}
/* BASIC */

/* html {
  background-color: white;
} */

/* 
a {
  color: #A569BD  ;
  display:inline-block;
  text-decoration: none;
  font-weight: 400;
}

h2 {
  text-align: center;
  font-size: 50px;
  font-weight: 600;
  text-transform: uppercase;
  display:inline-block;
  margin: 40px 8px 10px 8px; 
  color: #cccccc;
} */

/* STRUCTURE */
.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column; 
  justify-content: center;
  width: 100%;
  min-height: 200%;
  padding-top: 100px;
  padding-bottom: 50px;
}

#formRegSup {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 50px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(98, 96, 96, 0.979);
  box-shadow: 0 30px 60px 0 rgba(98, 96, 96, 0.979);
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(98, 96, 96, 0.979);
  box-shadow: 0 30px 60px 0 rgba(98, 96, 96, 0.979);
  text-align: center;
}

/* #formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
} */

/* TABS */
/* h2.inactive {
  color: #cccccc;
}

h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #bcb0df;
} */

/* FORM TYPOGRAPHY*/
input[type=b-button], input[type=submit], input[type=reset]  {
  background-color: #630986f5 ;
  border: none;
  color: white;
  /* padding: 10px 10px; */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 15px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(195, 176, 238, 0.4);
  box-shadow: 0 10px 30px 0 rgba(129, 140, 146, 0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  /* margin: 5px 5px 5px 5px; */
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

input[type=b-button]:hover, input[type=submit]:hover, input[type=reset]:hover  {
  background-color: #922189bc;
  
}

input[type=b-button]:active, input[type=submit]:active, input[type=reset]:active  {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

input[type=text], input[type=email], input[type=password] {
  background-color: #f6f1f1;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px; 
  text-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 80%;
  border: 2px solid #f6f1f1;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type=checkbox] {
  margin: 5px;
  border-radius: 3px solid black;
  width: 20px; 
  height: 20px;
}

input[type=text]:focus, input[type=email]:focus, input[type=password]:focus {
  background-color: rgb(214, 189, 189);
  border-bottom: 0.2px solid #A569BD ;
}
/* 

/* ANIMATIONS */

/* Simple CSS3 Fade-in-down Animation */
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

/* Simple CSS3 Fade-in Animation */
/* @-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@keyframes fadeIn { from { opacity:0; } to { opacity:1; } } */

/* .fadeIn {
  opacity:0;
  -webkit-animation:fadeIn ease-in 1;
  -moz-animation:fadeIn ease-in 1;
  animation:fadeIn ease-in 1;

  -webkit-animation-fill-mode:forwards;
  -moz-animation-fill-mode:forwards;
  animation-fill-mode:forwards;

  -webkit-animation-duration:1s;
  -moz-animation-duration:1s;
  animation-duration:1s;
}

.fadeIn.first {
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.fadeIn.second {
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.fadeIn.third {
  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.fadeIn.fourth {
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  animation-delay: 1s;
} */

/* Simple CSS3 Fade-in Animation */
/* .underlineHover:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  background-color: #A569BD ;
  content: "";
  transition: width 0.2s;
} */

.underlineHover:hover {
  color: #0d0d0d;
}

.underlineHover:hover:after{
  width: 100%;
}

/* OTHERS */
*:focus {
    outline: none;
} 

/* #icon {
  width:60%;
} */
</style>
