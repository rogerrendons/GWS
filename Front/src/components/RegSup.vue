<template>
  <div>
    <div class="wrapper fadeInDown" >
        <div class="FormRegUser" id="formRegSup">
            <form>
            <fieldset><legend>SOLICITAR SOPORTE</legend>
                <br>
                <label><span>Titulo: </span>
                  <br>
                  <input type="text" v-model="title" placeholder="Ingrese un titulo de su caso" class="input-field" name="Supfield1" value="" />
                </label>
                <br>
                <label><span>Descripción: </span>
                  <br>
                  <textarea placeholder="Ingrese una breve descripción de su caso" v-model="description"  class="textcont"></textarea>
                </label>
                <br>
                <label><span>Nivel De Prioridad: </span>
                   <select  v-model="userPriority" >
                    <option disabled value=""> selecciona del 1 al 10 </option>
                    <option >1</option>
                    <option >2</option>
                    <option >3</option>
                    <option >4</option>
                    <option >5</option>
                    <option >6</option>
                    <option >7</option>
                    <option >8</option>
                    <option >9</option>
                    <option >10</option>
                </select>
                </label>
                <br>
                <div class="form-group">
                  <br><br>
                  <label id="buton">
                    <input id="stilo" class="form-control" @click="register" type="submit" value="Enviar" />
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
        title: '',
        userPriority: '',
        description: ''
        }
    },
    methods: {
        async register() {
          console.log('xdd')
          const response = await authService.ticketRegister({
              tittle: this.title,
              id_usr: this.$store.state.user.id,
              user_priority: this.userPriority,
              description: this.description
          })
          console.log(response)
        }
    },
    name: 'forms'

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
    font: bold 40px Arial;
    text-align: center;
    font-size: calc(2em + 1vw);
}

.textcont{
  height: 208px;
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
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin-left: 2px;
}

.textcont:focus {
  background-color: #fff;
  border-bottom: 0.2px solid #A569BD ;
}
label {
  font-size: calc(0.5em + 1vw);
  width: 100%;
  align-content: center;
  text-align: left; 
}

.FormRegUser {
    margin: auto;
    text-align: left;
    width: 100%;
    height: 80%;
}
/* #buton {
  text-align: center;
  padding-top: 10%;
  height: 5px;
  border: solid black 1px;
} */

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


