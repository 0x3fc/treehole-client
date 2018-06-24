<template>
    <div class="container-fluid">
        <post :post="post" v-for="post in posts" :key="post.id"></post>
    </div>
</template>

<script>
import Post from './Post'

export default {
    data() {
        return {
            posts: [
                {
                    id: 1,
                    content: "Dummy post 1.",
                    created_at: {
                        date: "2018-06-23 19:29:45.000000",
                        timezone_type: 3,
                        timezone: "UTC"
                    }
                },
                {
                    id: 2,
                    content: "Dummy post 2.",
                    created_at: {
                        date: "2018-06-23 19:30:45.000000",
                        timezone_type: 3,
                        timezone: "UTC"
                    }
                },
            ]
        }
    },

    components: {
        Post
    }
}
</script>

<style>

</style>
