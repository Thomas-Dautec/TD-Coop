<template>
    <div>
        <h2>Créer un compte</h2> 
        <form @submit.prevent='validation'>   
            <div>
                <input type='text' required v-model='fullname'/>
            </div>
            <div>
                <input type='text' reuired v-model='email'/>
            </div>
            <div>
                <input type='text' required v-model='password'/>
            </div>
            <button type='submit'>Valider</button>
            <p>
                <router-link to='/'>Suivez ce lien pour se connecter</router-link>
            </p>
        </form>
    </div>
</template>
<script>
export default{
    data() {
        return {
            fullname : 'Sam Dautecourt',
            email : 'sam@test.fr',
            password : 'test'
        }
    },
    methods : {
        validation(){
            let donnees = {
                fullname : this.fullname,
                email : this.email,
                password : this.password
            };
            console.log(this.fullname);
            this.$api.post('members', donnees).then (response => {
                alert('Votre compte a été créer et vous pouvez vous connecter')
                console.log(response.data)
                this.$router.push('/connexion');
            }).catch(error => {
                alert(error.response.data.message);
            })
        }
    }
}
</script>
