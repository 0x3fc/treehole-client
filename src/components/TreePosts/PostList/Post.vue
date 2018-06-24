<template>
    <at-card :noHover="true" :loading="isLoading" style="margin: 10px 0">
        <div>
            {{ post.content }}
        </div>
    </at-card>
</template>

<script>
export default {
    props: {
        post: Object,
        isLoading: Boolean
    }
}
</script>

<style>

</style>
