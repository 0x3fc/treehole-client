import Vue from 'vue'

/* post uri */
const postUri = 'api/v1/posts'

/**
 * Fetch all tree hollow secret posts
 * 
 * @param {Number} pageNumber the page number if is paginated
 * @return {Object} response of all posts
 */
export const index = (pageNumber = null) => {
    return Vue.http.get(postUri, {params: {page: pageNumber}})
}

/**
 * Create a tree hollow secret post
 * 
 * @param {String} content the post content
 * @param {Number} imageId the post image id
 * 
 * @returns {Object} the new post Laravel API resource
 */
export const create = (content, imageId = null) => {
    return Vue.http.post(postUri, {
        content: content,
        imageId: imageId,
    });
}
