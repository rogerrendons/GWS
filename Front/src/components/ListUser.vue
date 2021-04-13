<template>
  <div class="UserSup">
    <div class="wrapper fadeInDown">
        <form class="FormUserSup" >

          <div>
            <div class="title-box">
              <h1>USUARIOS</h1>
            </div>
            <table class="table table-responsive table-bordered table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NOMBRES</th>
                  <th>APELLIDOS</th>
                  <th>CORREO</th>
                  <th>SUPPORTER</th>
                  <th>ACCION</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for = "user in users" :key = "user.data" >
                    <td> {{ user.id }} </td>
                    <td> {{ user.first_name }} </td>
                    <td> {{ user.last_name }} </td>
                    <td> {{ user.email }} </td>
                    <td> {{ user.supporter }} </td>
                    <td>
                      <a class="btn-nueva">Editar</a>
                      <div class="form-group">
                        <label id="buton">
                            <input id="stilo" class="form-control" @click="deleteUser(user.id)"  type="submit" value="Eliminar" />
                        </label>
                      </div>                      
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  // import Vue from 'vue'
  export default {
      data() {
        return {
          users: []
        }
      },
      mounted() {
        let vue = this;
        axios.get('http://localhost:4000/api/users')
        .then( function (response) {
          console.log(response)
          vue.users = response.data.data
        })
      },
      methods: {
        async deleteUser(id) {
          console.log(id)
          const userDelete = await axios.delete(`http://localhost:4000/api/users/${id}`)
          console.log(userDelete)
        },
        select(project) {
        project.selected = true
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  align-content: center;
  font: bold 40px arial;
  text-align: center;
}
table {
  font-size: calc(0.4em + 1vw);
}

* {
    margin: 0;
    padding: 0;
}

.FormUserSup {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 50px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(98, 96, 96, 0.979);
  box-shadow: 0 30px 60px 0 rgba(98, 96, 96, 0.979);
  width: 100%;
  height: 80%;
  margin-top: 5%;
}

.title-box {
  align-content: center;
  font: bold 40px arial;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
}

#stilo {  
  background-color: #630986f5 ;
  color: white;
  padding: 10px 40px 10px;
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
#stilo:hover {
  background-color: #922189bc;
}


</style>