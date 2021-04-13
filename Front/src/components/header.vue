<template>
    <div>
        <b-navbar id= "right" variant="faded" type="light">
                <input @click="logout"  id="move" type="submit" class="fadeIn fourth" value="Salir" >
        </b-navbar>
    </div>
</template>

<script>
export default {
    methods: {
        logout () {
            this.$store.dispatch('logout')
            console.log(this.$store)
            this.$router.push('/')
        }
    },
}
</script>

<style>
/* #right {
    width: 100%;
} */
    
#move {
    align-items: auto;
    align-content: auto;
    margin-left: 80%;
    padding: 15px 80px;
}

</style>
