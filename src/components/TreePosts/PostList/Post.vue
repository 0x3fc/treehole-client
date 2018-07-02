<template>
    <at-card :noHover="true" style="margin: 10px 0">
        <div>
            {{ post.content }} 
            <div class="created-date">
                -- {{ created_at }}
            </div>
        </div>
    </at-card>
</template>

<script>
const dayjs = require('dayjs')

export default {
    props: {
        post: Object
    },

    computed: {
        created_at() {
            return dayjs(this.post.created_at.date + this.post.created_at.timezone)
                .format("YYYY-MM-DD HH:mm:ss")
        }
    }
}
</script>

<style>

</style>
