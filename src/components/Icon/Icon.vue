<template>
    <div>
        <img :src="enIcon" width="75%" draggable="false">
    </div>
</template>

<script>
import enIcon from '../../assets/icon/treehole-en.png';

export default {
    data() {
        return {
            enIcon
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
