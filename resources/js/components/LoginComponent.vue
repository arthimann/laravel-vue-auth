<template>
    <div class="row">
        <form class="col-6 mx-auto" @submit.prevent="submit">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" class="form-control" v-model="form.email">

                <div class="py-2"></div>

                <label for="password">Password:</label>
                <input type="password" id="password" class="form-control" v-model="form.password">

                <button type="submit" class="btn btn-primary mt-2">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: "LoginComponent",

        data() {
            return {
                form: {
                    email: "",
                    password: ""
                }
            }
        },

        methods: {
            ...mapActions({
                signIn: 'auth/signIn'
            }),

            submit() {
                /**
                 * Check if inputs aren't empty and only then login.
                 * */
                if (this.form.email && this.form.password) {
                    // Call an auth action
                    this.signIn(this.form).then(()=>{
                        // Redirect after success login
                        this.$router.push('/dashboard');
                    }).catch(()=>{
                        // Login failed message
                        console.error('login failed...');
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>
