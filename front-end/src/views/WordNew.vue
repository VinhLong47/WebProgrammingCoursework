<template>
    <div>
        <h1>New Word</h1>
        <word-form @createOrUpdate="createOrUpdate"></word-form>
    </div>
</template>

<script>
import WordForm from '@/components/WordForm.vue';
import { api } from "../helpers/helper";

export default {
    name: 'new-word',
    components: {
        WordForm
    },
    methods: {
        async createOrUpdate(word) {
            try {
                const res = await api.createWord(word);
                this.flash('Word Created!', 'success'); 
                this.$router.push(`/words/${res._id || res.data._id}`);  // Adjust to use `res.data._id` if needed
            } catch (error) {
                console.error("Error creating word:", error);
            }
        }
    }
};
</script>
