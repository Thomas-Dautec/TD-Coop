<template><!--
    <section class="hero is primary is-fullheight">
        <div class="hero-body">
            <div class="container">-->
                <div>
            <h2>Se connecter</h2> 
            <form @submit.prevent='validation'> 
                <div>
                    <input type='text' reuired v-model='email'/>
                </div>
                <div>
                    <input type='text' required v-model='password'/>
                </div>
                <button type='submit'>Valider</button>
                <p>
                    <router-link to='creation-compte'>Suivez ce lien pour créer votre compte</router-link>
                </p>
            </form>
        </div>
</template>
<script>
export default{
    data() {
        return {
            email : 'sam@test.fr',
            password : 'test'
        }
    },
    methods : {
        validation(){
            let donnees = {
                email : this.email,
                password : this.password
            };
            console.log(this.fullname);
            this.$api.post('members/signin', donnees).then((response) => {
                console.log(response)
                this.$store.commit('setToken', response.data.token);
                this.$store.commit('setMember', response.data.member);
                this.$router.push("/conversations");
                //this.$router.push('/connexion');
            }).catch((error) => {
                console.log(error);
                alert(error.response.data.message);
            });
        }
    }
}
</script>
