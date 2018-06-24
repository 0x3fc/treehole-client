<template>
    <at-card :noHover="true">
        <div slot="title">
            Hide your secrets into the tree hollow ...
        </div>
        <div slot="extra">
            <at-button icon="icon-corner-left-down" hollow style="marginTop: 10px" @click="burySecret(content)">
                Bury
            </at-button>
        </div>
        <at-textarea
            v-model="content" 
            placeholder="Input your words here" 
            autosize 
            resize="none"
            minRows=3
        >
        </at-textarea>
    </at-card>
</template>

<script>
import { create } from '../../../server/posts.js'

export default {
    data() {
        return {
            content: null
        }
    },

    methods: {
        /**
         * Create a secret post
         * 
         * @param {String} content the post content
         */
        burySecret(content) {
            create(content).then(response => {
                this.content = null
                // TODO: When create success
            }, error => {
                // TODO: When create fails
            });
        }
    }
}
</script>

<style>

</style>
