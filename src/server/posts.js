import Vue from 'vue'

/* post uri */
const postUri = 'api/v1/posts'

/**
 * Fetch all tree hollow secret posts
 * 
 * @return
 */
export const index = () => {
    return Vue.http.get(postUri)
}
