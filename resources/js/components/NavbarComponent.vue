<template>
    <div class="row">
        <section class="col-12">
            <h1 class="text-center">Auth JWT</h1>

            <div class="row">
                <aside class="col"><router-link to="/">Home</router-link></aside>
                <template v-if="authenticated">
                    <aside class="col"><router-link to="/dashboard">Dashboard</router-link></aside>
                    <aside class="col"><strong>Welcome: {{ user.name }}</strong></aside>
                    <aside class="col"><a href="#" @click.prevent="singOut">Logout</a></aside>
                </template>
            </div>
            <hr>
        </section>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: "NavbarComponent",

        computed: {
            ...mapGetters({
                authenticated: 'auth/authenticated',
                user: 'auth/user'
            })
        },

        methods: {
            ...mapActions({
                signOutAction: 'auth/singOut'
            }),

            singOut () {
                this.signOutAction().then(()=>{
                    this.$router.push('/');
                });
            }
        }
    }
</script>
