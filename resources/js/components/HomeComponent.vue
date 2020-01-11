<template>
    <main class="container my-3">
        <div class="row">
            <section class="col-12">
                <login-component></login-component>
            </section>
        </div>
    </main>
</template>

<script>
    import LoginComponent from "./LoginComponent";

    export default {
        name: "HomeComponent",
        components: {LoginComponent}
    }
</script>

<style scoped>

</style>
