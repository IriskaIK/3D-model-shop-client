<template lang="">
    <v-container>
        <v-row justify="center">
            <v-col md="4">
                <LoginCardComponent></LoginCardComponent>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import LoginCardComponent from '../components/LoginComponents/LoginCardComponent.vue';


export default {
    components:{
        LoginCardComponent
    }
    
}
</script>
<style lang="">
    
</style>