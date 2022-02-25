<template>
    <section class="section">
        <p class='title'>Conversations</p>
        <!--<router-link to-->
        <div v-for='produit in $store.state.conversation'>
            <p>{{produit}}</p>
        </div>
    </section>
</template>

<script>
export default{
    data() {
        return {
            conversations : [],
            nomConversation : ''
        };
    },
    mounted(){/*
        this.$api
            .get('channels')
            .then((response) => {
            this.conversations = response.data;
            console.log(response.data);
        })*/
        console.log("le composant App est affiché");
        this.$api.get('channels').then(response => {
            console.log(response.data);
            let produits = response.data;
            this.$store.commit('setConver', produits);
        })
    }
}
</script>

<style>

</style>
