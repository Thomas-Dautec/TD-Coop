<template>
    <div>
        <Navigation />
        <section class='section'>
            <template v-for='member in $store.state.members'>
                <div :key='member.id' class="box">
                    <h2 class="title">{{member.fullname}}</h2>
                    <h3 class='subtitle'>{{member.email}}</h3>
                </div>
            </template>
        </section>
           <!-- <h1>Liste des Membres</h1>
            <p><router-link to='/'>Retour</router-link></p>-->

    </div>
</template>

<script>

export default {
    setup() {
        
    },
}
</script>
