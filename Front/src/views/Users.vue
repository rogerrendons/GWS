<template>
    <div>
        <div>
            <Header/>
        </div>
        <div id="container">
            <RegSup id="sub"/>
        </div>
        <div>
            <ListSupFromUsers/>
        </div>
    </div>    
</template>

<script>
import RegSup from '@/components/RegSup.vue';
import Header from '@/components/header.vue';
import ListSupFromUsers from '@/components/ListSupFromUsers.vue';



export default {
    name: 'Users',
    components: {
        RegSup,
        ListSupFromUsers,
        Header
    }
}
    
</script>

<style>
/* #container {
    margin-left: 10.5%;
    width: 100%;

}
#sub {
    width: 100%;
} */

</style>