<template>
    <div>
        <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
            <v-list>
                <v-list-tile v-for="(item,i) in menuItems" :key="`navdrawer${i}`">
                    <v-list-tile-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title" :to="item.route"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar app dark fixed class="primary" v-model="drawer">
            <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
            
            <router-link to="/" tag="span" class="link">
                <v-toolbar-title>{{logo}}</v-toolbar-title>
            </router-link>

            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn v-for="(item, i) in menuItems" :key="`menuItems${i}`" flat :to="item.route">
                    <v-icon v-html="item.icon"></v-icon>
                    {{item.title}}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            "logo": "Logo Type",
            drawer: false
        };
    },

    computed: {
        menuItems() {
            return [
                {
                    icon: "android",
                    title: "Home",
                    route: "/"
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
            ];
        }
}
};
</script>

<style>
.material-icons {
    margin-right: 1rem;
}
.link {
    cursor: pointer;
}
</style>
