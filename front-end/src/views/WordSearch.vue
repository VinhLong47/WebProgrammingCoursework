<template>
    <div>
        <h1>Search Word</h1>
        <word-search></word-search>
    </div>
</template>

<script>
import WordSearch from '@/components/VocabSearch.vue';

export default {
    name: 'new-search',
    components: {
        WordSearch
    },
};
</script>