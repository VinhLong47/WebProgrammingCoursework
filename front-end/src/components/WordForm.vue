<template>
  <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out both fields!</p>

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="germany flag"></i> German
      </div>
      <input type="text" placeholder="Enter word..." v-model="localWord.german" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="united kingdom flag"></i> English
      </div>
      <input type="text" placeholder="Enter word..." v-model="localWord.english" />
    </div>

    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'word-form',
  props: {
    word: {
      type: Object,
      required: false,
      default: () => ({
        english: '',
        german: ''
      })
    }
  },
  data() {
    return {
      localWord: { ...this.word }, // Create a local copy of the word prop
      errorsPresent: false
    };
  },
  watch: {
    word: {
      handler(newWord) {
        this.localWord = { ...newWord }; // Update localWord if the prop changes
      },
      deep: true
    }
  },
  methods: {
    onSubmit() {
      // Check for errors before submitting
      if (!this.localWord.german || !this.localWord.english) {
        this.errorsPresent = true;
      } else {
        this.errorsPresent = false;
        this.$emit('createOrUpdate', this.localWord); // Emit localWord with user input
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
