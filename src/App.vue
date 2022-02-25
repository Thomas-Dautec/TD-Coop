<template>
  <section class="section">

    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item">
      <p class='title'>CO'OP</p>
      <figure class="image is-64x48">
        <img src=".\assets\icon.png" width="112" height="28">
      </figure>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          <router-link to='/conversations'>Conversation</router-link>
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            <router-link to='/convers'>Créer une conversation</router-link>
          </a>
          <a class="navbar-item">
            Modifier une conversation
          </a>
          <a class="navbar-item">
            Supprimer une conversation
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>

      <a class="navbar-item">
        <router-link to='/membre'>Membre</router-link>
      </a>

      
      
      
    </div>

    <template v-if="$store.state.connecter">
      <div class="navbar-end">
        
        <a class="navbar-item">
          <em>Connecté en tant que <b>{{$store.state.member.fullname}}</b></em>
        </a>

        <div class="navbar-item">
          <form @submit.prevent='validation'> 
            <div class="buttons">
              <a class="button is-link">
                <p class="retour is-warning"><strong><router-link to='/'>Se déconnecter</router-link></strong></p>
              </a>
            </div>
          </form>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="navbar-end">
        <div class="navbar-item">
        </div>
      </div>
    </template>
  </div>
</nav>


<!--
    <em class="title">CO'OP</em>
    <em><router-link to='/conversations'>Conversation</router-link></em><b/>
    <em><router-link to='/membre'>Membre</router-link></em><b/>
    <em>Connecté en tant que <b>{{$store.state.member.fullname}}</b></em>
    <em><button><router-link to='/'>Se déconnecter</router-link></button></em>-->
    <router-view/>
  </section>
</template>
<script>
export default{
  name:'App',
  mounted() {
    this.$api.get('ping').then()

    if(!this.$store.state.token){
      this.$router.push('connexion');
    }
  },
  methods : {
    validation(){
      let donnees = {
        email : this.email,
        password : this.password
      };
      console.log(this.fullname);
      this.$api.delete('members/signout', donnees).then((response) => {
      console.log(response)
      this.$router.push("/");
      //this.$router.push('/connexion');
      }).catch((error) => {
        console.log(error);
        alert(error.response.data.message);
      });
    }
  }
}
</script>

<style>

.retour{
  color:white;
}

.navbar{
  border:black solid;
}

</style>
