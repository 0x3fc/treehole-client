import Vue from 'vue'

/* image uri */
const imageUri = 'api/v1/images'

export default {
    show: (imageId) => {
        return Vue.http.options.root + '/' + imageUri + '/' + imageId;
    },

    store: (image) => {
        const formData = new FormData();
        formData.append('image', image);

        return Vue.http.post(imageUri, formData);
    },
};
