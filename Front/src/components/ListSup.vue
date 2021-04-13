<template>
  <div class="UserSup">
    <div class="wrapper fadeInDown">
        <div class="FormUserSup" >

          <div>
            <!-- <mdb-datatable :data="data" striped bordered/>             -->
                          <div class="title-box">
                            <h1>SOPORTES</h1>
                          </div>
                          <!-- <a class=" btn-nueva" href="d"><b>+ </b>Añadir Usuario</a> -->
                          <table class="table table-responsive table-bordered table-hover">
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>ID USUARIO</th>
                                <th>TITULO</th>
                                <th>DESCRIPCIÓN</th>
                                <th>ESTADO</th>
                                <th>PRIORIDAD</th>
                                <th>SUPPORTER</th>
                                <th>CREADO</th>
                                <th>ACTUALIZADO</th>
                                <th>ACCIÓN</th>                    
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for = "sup in supports" :key = "sup.item" >
                                  <td> {{ sup.id }} </td>
                                  <td> {{ sup.id_usr }} </td>
                                  <td> {{ sup.tittle}} </td>
                                  <td> {{ sup.description }} </td>
                                  <td> {{ sup.status }} </td>
                                  <td> {{ sup.user_priority }} </td>
                                  <td> {{ sup.supporter_id }} </td>
                                  <td> {{ sup.createdAt }} </td>
                                  <td> {{ sup.updatedAt }} </td>

                                  <td> 
                                    <div class="form-group">
                                      <label>
                                        <input id="stilo" class="form-control" href="" type="button" value="Modificar" />
                                      </label>                        
                                    </div>
                                  </td>
                              </tr>
                                  <!-- <button v-on:click = "deleteUser(user)">X</button> -->
                                    <!-- <button v-on:click = "deleteUser(user)">X</button> -->
                            </tbody>
                          </table>




          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
      //   name: 'DatatablePage',
      //   components: {
      //   mdbDatatable
      // },
      data() {
        return {
            supports: []
        }
      },
      mounted() {
        let vue = this;
        axios.get('http://localhost:4000/api/supports')
        .then( function (response) {
          vue.supports = response.data.data
        })
      },
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
  font-size: calc(0.1em + 1vw);
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