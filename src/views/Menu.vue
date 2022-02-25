<template>
    <div>
        <h1>Page d'accueil</h1>
        <p>Connecté en tant que <b>{{$store.state.member.fullname}}</b>
        </p>
        <nav>
            <em><router-link to='conversations'>Conversations</router-link></em>
            <em><router-link to='membres'>Membres</router-link></em>
        
        </nav>
    </div>

</template>