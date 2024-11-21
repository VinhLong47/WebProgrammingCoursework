<template>
    <div>
      <h1>Test</h1>
  
      <div v-if="word.length < 5">
        <p>You need to enter at least five words to begin the test</p>
      </div>
      <div v-else>
        <vocab-test :word="word"></vocab-test>
      </div>
    </div>
  </template>
  
  <script>
  import { api } from "../helpers/helper";
  import VocabTest from '../components/VocabTest.vue';
  
  export default {
    name: 'word-test',
    components: {
      'vocab-test': VocabTest
    },
    data() {
      return {
        word: []
      };
    },
    async mounted() {
      this.word = await api.getWords();
    }
  };
  </script>