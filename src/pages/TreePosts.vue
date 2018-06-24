<template>
    <div class="container">
        <secret-burier></secret-burier>
        <posts></posts>
    </div>
</template>

<script>
import SecretBurier from '../components/TreePosts/SecretBurier/SecretBurier'
import Posts from '../components/TreePosts/PostList/Posts';

export default {
    components: {
        SecretBurier,
        Posts
    }
}
</script>

<style>

</style>
