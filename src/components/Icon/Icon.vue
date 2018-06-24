<template>
    <div>
        <img :src="icon" width="75%" draggable="false">
    </div>
</template>

<script>
import zhIcon from '../../assets/icon/treehole-zh.png';
import enIcon from '../../assets/icon/treehole-en.png';

export default {
    data() {
        return {
            zhIcon,
            enIcon
        }
    },

    props: {
        lang: String
    },

    computed: {
        icon() {
            /* chinese icon */
            if (this.lang == 'zh-CN') {
                return zhIcon;
            }

            /* default english */
            return enIcon;
        }
    }
}
</script>

<style scoped>
div {
    text-align: center;
    margin-bottom: 35px;
}

img {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}
</style>
