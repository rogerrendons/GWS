<template>
  <div class="UserSup">
    <div class="wrapper fadeInDown">
        <div class="FormUserSup" >

          <div>
            <div class="title-box">
              <h1>TUS SOPORTES</h1>
            </div>
            <!-- <a class=" btn-nueva" href="d"><b>+ </b>Añadir Usuario</a> -->
            <table class="table table-responsive table-bordered table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>TITULO</th>
                  <th>DESCRIPCIÓN</th>
                  <th>ESTADO</th>
                  <th>CREADO</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for = "sup in supporte" :key = "sup.item" >
                    <td> {{ sup.id }} </td>
                    <td> {{ sup.tittle}} </td>
                    <td> {{ sup.description }} </td>
                    <td> {{ sup.status }} </td>
                    <td> {{ sup.createdAt }} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    data() {
        return {
          supporte: []
        }
      },
      mounted() {
        let vue = this;
        const id = this.$store.state.user.id
        console.log(id)
        axios.get(`http://localhost:4000/api/supports/user/${id}`)
        .then( function (response) {
          console.log(response)
          vue.supporte = response.data.data
        })
      },
      // methods: {
      //   async getSup() {
      //     let bkusers = await axios.get("colocar url")
      //   }
      // }
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

</style>