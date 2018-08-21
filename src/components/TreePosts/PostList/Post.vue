<template>
    <at-card :noHover="true" style="margin: 10px 0">
        <div>
            <span style="white-space: pre-wrap;">{{ post.content }}</span>
            <div v-if="post.image">
                <img :src="post.image">
            </div>
            <div class="created-date">
                -- {{ created_at }}
            </div>
        </div>
    </at-card>
</template>

<script>
import moment from 'moment';

export default {
    props: {
        post: Object
    },

    computed: {
        created_at() {
            return moment(this.post.created_at.date + 'Z').local().format("YYYY-MM-DD HH:mm:ss");
        }
    }
}
</script>

<style>

</style>
