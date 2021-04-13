<template>
  <div>
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <div class="fadeIn first">
          <br>
          <img src="../assets/LogoGW.jpeg" >
          <h1 >GLOBALWORK</h1>
          <h1>SUPPORT</h1>
        </div>
        <div>
          <input type="email" placeholder="Correo electrónico" v-model="email" name="email">
          <input type="password" placeholder="Contraseña" v-model="password" name="password">
          <div class="form-group">
          <br><br>
            <label id="buton">
              <input id="stilo" class="form-control" @click="login" type="submit" value="Iniciar" >
              <div class="error" v-html="error"/>
            </label>
          </div>
          <!-- <div id="buton">
            <br>

            <div class="error" v-html="error"/> -->
          <!-- </div> -->
        </div>
      </div>
    </div>
    <h1>BIENVENID@</h1>
  </div>
</template>

<script>

import authService from '@/service/authenticationService'
export default {
    data () {
        return {
            email: '',
            password: '',
            error: null
        }
    },
    methods: {
        async login() {
            try {
                const response = await authService.login({
                    email: this.email,
                    password: this.password
                    })
                console.log(response)
                this.$store.dispatch('setToken', response.data.token)
                this.$store.dispatch('setUser', response.data.user)
                if (this.$store.state.user.supporter) {
                  this.$router.push('/supporters')
                } else {
                  this.$router.push('/users')
                }} catch (error) {
                    this.error = error.response.data.error

                    }
        }
    },
    name: 'login'

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  margin: 0px 0px;
  text-align: center;
  align-content: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0px 0px;
}
#buton {
  align-items: center;  
  align-content: center;
  
}
#stilo {
  background-color: #630986f5 ;
  color: white;
  padding: auto;
  width: 80%;
  font-size: 15px; 
  -webkit-box-shadow: 0 10px 30px 0 rgba(195, 176, 238, 0.4);
  box-shadow: 0 10px 30px 0 rgba(129, 140, 146, 0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  
}

label {
  font-size: calc(0.5em + 1vw);
  width: 100%;
  align-content: center;
  text-align: center; 
}

</style>
