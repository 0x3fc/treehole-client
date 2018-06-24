<template>
    <at-card noHover="true" style="margin: 10px 0">
        <div>
            {{ post.content }}
        </div>
    </at-card>
</template>

<script>
export default {
    props: {
        post: Object
    }
}
</script>

<style>

</style>
