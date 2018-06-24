<template>
    <at-card :noHover="true">
        <div slot="title" style="fontSize: 18px">
            {{ titleString }}
        </div>
        <div slot="extra">
            <at-button 
                icon="icon-corner-left-down" 
                :disabled="!isValidToBury"
                hollow 
                style="marginTop: 10px" 
                @click="burySecret(content)"
            >
                {{ buryButtonText }}
            </at-button>
        </div>
        <at-textarea
            v-model="content" 
            :placeholder="storyPlaceholder" 
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

    props: {
        lang: String
    },

    computed: {
        /**
         * A basic validation for bury button
         * 
         * @return {Boolean} is valid to bury
         */
        isValidToBury() {
            if (this.content && this.content.length > 0) {
                return true;
            }

            return false;
        },

        /**
         * Placeholder tree hollow story in different languages
         * 
         * @return {String} placeholder string
         */
        storyPlaceholder() {
            /* chinese */
            if (this.lang == 'zh-CN') {
                return "以前的人，心中如果有什么不可告人的秘密，他们会跑到山上，找一棵树，在树上挖一个洞，然后把秘密全说进去，再用泥巴把洞封上，"
                    + "那秘密就会永远留在那棵树里，没有人会知道。";
            }

            /* default english */
            return "They say in ancient times, people go into the mountains and the forests to find a tree hole, and tell the "
                + "tree hole their secrets, then they seal the hole with some mud, and the secrets would stay there forever.";
        },

        /**
         * Title line string that indicates current section is for posting
         * 
         * @return {String} title line string
         */
        titleString() {
            /* chinese */
            if (this.lang == 'zh-CN') {
                return "将你的秘密告诉树洞听 ...";
            }

            /* default english */
            return "Hide your secrets into the tree hollow ...";
        },

        /**
         * The bury button text in different languages
         * 
         * @return {String} bury button text
         */
        buryButtonText() {
            /* chinese */
            if (this.lang == 'zh-CN') {
                return "埋";
            }

            /* default english */
            return "Bury";
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
                location.reload(); /* reload the page */
            }, error => {
                this.errorMessageHandling();
            });
        },

        /* services methods */

        /**
         * Raise an error message indicating error occurring
         * 
         * @param {String} message the error message that is going to be raised
         */
        errorMessageHandling(message = "Some error occurred when sending data to the server :(") {
            this.$Message.error(message);
        }
    }
}
</script>

<style>

</style>
