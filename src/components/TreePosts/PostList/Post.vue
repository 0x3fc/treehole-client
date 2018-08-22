<template>
    <at-card :noHover="true" style="margin: 10px 0">
        <div>
            <span style="white-space: pre-wrap;">{{ post.content }}</span>
            <image-presenter v-if="post.image" :source="post.image"></image-presenter>
            <div class="created-date">
                -- {{ created_at }}
            </div>
        </div>
    </at-card>
</template>

<script>
import moment from 'moment';
import ImagePresenter from '../Share/ImagePresenter';

export default {
    props: {
        post: Object
    },

    components: {
        ImagePresenter,
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
