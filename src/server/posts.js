import Vue from 'vue'

/* post uri */
const postUri = 'api/v1/posts'

/**
 * Fetch all tree hollow secret posts
 * 
 * @return {Object} response of all posts
 */
export const index = () => {
    return Vue.http.get(postUri)
}

/**
 * Create a tree hollow secret post
 * 
 * @param {String} content the post content
 * @returns {Object} the new post Laravel API resource
 */
export const create = (content) => {
    return Vue.http.post(postUri, {content: content})
}
