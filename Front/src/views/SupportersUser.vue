<template>
    <div>
        <div>
            <Header/>
        </div>
            <div id="container">
                <register/>
                <!-- <RegSup id="float"/> -->
            </div>
            <div>
                <ListUser/>
            </div>
            <!-- <div>
                <ListSup/>
            </div> -->
    </div>    
</template>

<script>
import register from '@/components/register.vue';
// import RegSup from '@/components/RegSup.vue';
// import ListSup from '@/components/ListSup.vue';
import ListUser from '@/components/ListUser.vue';
import Header from '@/components/header.vue';


export default {
    name: 'SupportersUser',
    components: {
        register,
        // ListSup,
        // RegSup,
        ListUser,
        Header
    }
}
    
</script>

<style>

#float {
    float:left;
    width: 50%;
}

#lihead{
    list-style: none;
}

</style>