<template>
    <div>
        <post :post="post" v-for="post in posts" :key="post.id" :isLoading="isLoading"></post>
    </div>
</template>

<script>
import Post from './Post'
import { index } from '../../../server/posts.js'

export default {
    data() {
        return {
            posts: null,
            isLoading: true
        }
    },

    mounted() {
        index().then(response => {
            this.posts = response.data.data
            this.isLoading = false
        }, error => {
            // TODO: Index request error handling
        });
    },

    components: {
        Post
    }
}
</script>

<style>

</style>
