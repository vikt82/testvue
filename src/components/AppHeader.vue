<template>
    <v-toolbar app dark fixed class="primary">
        <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
        <v-toolbar-title>{{logo}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn v-for="item in menuItems" :key="item.id" flat>
                <i class="material-icons">{{item.icon}}</i>
                {{item.title}}
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {

    data: () => ({
        "logo": "Logo Type !!!"
    }),

    computed: {
        menuItems() {
            return [
                {
                    icon: "android",
                    title: "Home",
                    route: "/home"
                },
                {
                    icon: "book",
                    title: "About Us",
                    route: "/about-us"
                },
                {
                    icon: "language",
                    title: "Contact Us",
                    route: "/contact-us"
                }
            ]
        }
    }

}
</script>

<style>
    .material-icons {
        margin-right: 1rem;
    }
</style>
