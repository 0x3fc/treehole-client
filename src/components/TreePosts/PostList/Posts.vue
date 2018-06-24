<template>
    <div>
        <post :post="post" v-for="post in posts" :key="post.id" :isLoading="isLoading"></post>

        <at-card :bordered="false" :noHover="true">
            <div class="flex flex-around">
                <at-pagination 
                    :total="meta.total" 
                    :page-size="meta.per_page" 
                    simple
                    @page-change="paginationPageChange"
                >
                </at-pagination>
            </div>
        </at-card>
    </div>
</template>

<script>
import Post from './Post'
import { index } from '../../../server/posts.js'

export default {
    data() {
        return {
            posts: null,
            meta: {
                total: 0,
                per_page: 20
            },
            isLoading: true
        }
    },

    mounted() {
        index().then(response => {
            this.updateLocalPosts(response.data.data, response.data.meta)
        }, error => {
            // TODO: Index request error handling
        });
    },

    components: {
        Post
    },

    methods: {
        /**
         * @param {Number} pageNumber 
         */
        paginationPageChange(pageNumber) {
            index(pageNumber).then(response => {
                this.updateLocalPosts(response.data.data, response.data.meta)
            }, error => {
                // TODO: PaginatedIndex error handling
            });
        },

        /* services methods */

        /**
         * When index function response successfully, update the local variables
         * 
         * @param {Object} posts the data part from the response which is the post list
         * @param {Object} meta the meta part from the response which is the pagination variables
         */
        updateLocalPosts(posts, meta) {
            this.posts = posts;
            this.meta = meta;
            this.isLoading = false;
        }
    }
}
</script>

<style>

</style>
