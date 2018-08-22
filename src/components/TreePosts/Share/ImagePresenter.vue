<template>
    <div style="margin-top: 5px;">
        <img class="image-presenter" :src="source" @click="isShowingLargerImage=true">
        <at-modal 
            v-model="isShowingLargerImage" 
            :showFooter="false" 
            :width="modalWidth"
            :showClose="false">
            <img :src="source" style="width: 100%">
        </at-modal>
    </div>
</template>

<script>
export default {
    beforeMount() {
        const img = new Image();

        img.onload = () => {
            this.imageMaxWidth = img.width;
        }

        img.src = this.source;
    },

    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', () => {
                this.deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
            });
        });
    },

    props: {
        source: null,
    },

    data() {
        return {
            isShowingLargerImage: false,
            imageMaxWidth: 15,
            deviceWidth: (window.innerWidth > 0) ? window.innerWidth : screen.width,
        }
    },

    computed: {
        modalWidth() {
            return Math.min(this.imageMaxWidth + 33, this.deviceWidth - 16);
        },
    },

}
</script>

<style>
.image-presenter {
    border: 1px solid #ddd; /* Gray border */
    border-radius: 4px;  /* Rounded border */
    padding: 5px; /* Some padding */
    width: 150px; /* Set a small width */
}

.image-presenter:hover {
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}
</style>
