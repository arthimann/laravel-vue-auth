<template>
    <div class="container">
        <navbar-component></navbar-component>
        <router-view></router-view>
    </div>
</template>

<script>
    import NavbarComponent from "./NavbarComponent";
    export default {
        name: "App",
        components: {NavbarComponent}
    }
</script>
