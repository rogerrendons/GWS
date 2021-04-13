<template>
  <div>
    <div class="wrapper fadeInDown">
        <div class="FormRegUser" id="formRegSup">
            <form>
              <fieldset><legend>REGISTRO DE USUARIO</legend>
                <br>
                <label for="name"><span>Nombres </span>
                <br>
                  <input type="text"  placeholder="Nombres" v-model="name" name="name" value="" autocomplete="off"/>
                
                </label>
                <br>
                <label for="last_name"><span>Apellidos </span>
                <br>
                  <input type="text"  placeholder="Apellidos" v-model="last_name" name="last_name" value=""  autocomplete="off"/>
                </label>
                <br>
                <label for="email"><span>Correo Electrónico </span>
                <br>
                  <input type="email"  placeholder="Correo electrónico" v-model="email" name="email" value="" autocomplete="off" />
                </label>
                <br>
                <label  for="password"><span>Contraseña </span>
                <br>
                  <input type="password" v-model="password" placeholder="Contraseña" name="password" value="" autocomplete="off"  />
                </label>
                <br>
                <label><input type="checkbox"  v-model="check" name="checkbox" value="value"> Supporter?</label><br> 
                <br>
                <div class="form-group">
                  <label id="buton">
                      <input id="stilo" class="form-control" @click="register"  type="submit" value="Registrar" />                   
                  </label>
                </div>
              </fieldset>
            </form>
        </div>
    </div>
  </div>
</template>

<script>

import authService from '@/service/authenticationService'
export default {
    data () {
        return {
        name: '',
        last_name: '',
        //error: null,
        email: '',
        password: '',

        check: false
        }
    },
    methods: {
        async register () {
            // try{
            const response = await authService.register({
                first_name: this.name,
                last_name: this.last_name,
                email: this.email,
                password: this.password,
                supporter: this.check
            })
            console.log(response);
            // console.log(response)} catch (error) {
            //     this.error = error.response.data.error
            //     } 
        }
    },
    name: 'register'
}

</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}
legend {
  display: block;
  padding-left: 2px;
  padding-right: 2px;
  border: none;
}
fieldset legend {
    font: bold 40px arial;
    text-align: center;
    font-size: calc(2em + 1vw);
}
.FormRegUser {
    margin: auto;
    text-align: left;
    width: 100%;
    height: 80%;
}

label {
  font-size: calc(0.5em + 1vw);
  width: 100%;
  align-content: center;
  
}
#buton {
 text-align: center;
} 
#stilo {
  background-color: #630986f5 ;
  color: white;
  padding: auto;
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
#stilo:hover{
  background-color: #922189bc;
  
}

</style>

