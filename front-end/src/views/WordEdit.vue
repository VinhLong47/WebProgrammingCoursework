<template>
    <div v-if = "this.word != ''">
        <h1>Edit Word</h1>
        <word-form @createOrUpdate="createOrUpdate" :word="this.word"></word-form>
    </div>
</template>

<script>
    import WordForm from "../components/WordForm.vue";
    import { api } from "../helpers/helper";

    export default {
        name: 'word-edit',
        components: {
            'word-form': WordForm
        },
        data: function() {
            return {
                word: []
            };
        },
        async mounted() {
            this.word = await api.getWord(this.$route.params.id);
        },
        methods: {
            async createOrUpdate(word) {
                await api.updateWord(word);
                this.flash('Word updated successfully!', 'success');  // Ensure flash is defined or available
                this.$router.push(`/words/${word._id}`);
            }
        }
    };
</script>
