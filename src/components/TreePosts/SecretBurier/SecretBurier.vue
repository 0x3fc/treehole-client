<template>
    <at-card noHover=true>
        <div slot="title">
            Hide your secrets into the tree hollow ...
        </div>
        <div slot="extra">
            <at-button icon="icon-corner-left-down" hollow style="marginTop: 10px">
                Bury
            </at-button>
        </div>
        <at-textarea
            v-model="content" 
            placeholder="Input your words here" 
            autosize 
            resize="none"
            minRows=3
        >
        </at-textarea>
    </at-card>
</template>

<script>
export default {
    data() {
        return {
            content: null
        }
    }
}
</script>

<style>

</style>
