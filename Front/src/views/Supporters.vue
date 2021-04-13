<template>
    <div>
        <div>
            <Header/>
        </div>
        <nav>
            <ul>
                <li id="lihead">
                    <div id="position">
                        <router-link to="/SupportersUser"><img src="../assets/User.png" alt="Users" onmouseover="this.width=400;this.height=400;" onmouseout="this.width=300;this.height=300;" width="300" height="300" /><h1>USERS</h1></router-link>
                        <router-link to="/SupportersSupp"><img src="../assets/Support.png" alt="Supporters" onmouseover="this.width=400;this.height=400;" onmouseout="this.width=300;this.height=300;" width="300" height="300" /><h1>SUPPORTER</h1></router-link>
                    </div>
                </li>
            </ul>
        </nav>
        <router-view></router-view>
            <SupportersUser/>
        <router-view></router-view>
            <SupportersSupp/>
        <router-view></router-view>
            <!-- <div id="container">
                <register id="float"/>
                <RegSup id="float"/>
            </div>
            <div>
                <ListUser/>
            </div>
            <div>
                <ListSup/>
            </div> -->
    </div>    
</template>

<script>
// import register from '@/components/register.vue';
// import RegSup from '@/components/RegSup.vue';
// import ListSup from '@/components/ListSup.vue';
// import ListUser from '@/components/ListUser.vue';
import Header from '@/components/header.vue';
// import SupportersSupp from '@/views/SupportersSupp.vue';
// import SupportersUser from '@/views/SupportersUser.vue';
// import Supporters from '@/views/Supporters.vue';

export default {
    name: 'Supporters',
    components: {
        // register,
        // ListSup,
        // RegSup,
        // ListUser,
        Header,
        // Supporters,
        // SupportersSupp,
        // SupportersUser,
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

#position {
    display: flex;
    justify-content: space-around;
    padding-top: 18%;
}

</style>