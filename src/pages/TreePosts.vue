<template>
    <div class="container">
        <icon :lang="language"></icon>
        <secret-burier :lang="language"></secret-burier>
        <posts></posts>
    </div>
</template>

<script>
import Icon from '../components/Icon/Icon'
import SecretBurier from '../components/TreePosts/SecretBurier/SecretBurier'
import Posts from '../components/TreePosts/PostList/Posts'

export default {
    components: {
        Icon,
        SecretBurier,
        Posts
    },

    computed: {
        language() {
            return navigator.language;
        }
    }
}
</script>

<style>

</style>
