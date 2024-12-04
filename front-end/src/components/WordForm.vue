<template>
  <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out all off the fields!</p>

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

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="spain flag"></i> Spanish
      </div>
      <input type="text" placeholder="Enter word..." v-model="localWord.spanish" />
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
      default: () => ({
        english: '',
        german: '',
        spanish: ''
      })
    }
  },
  data() {
    return {
      localWord: { ...this.word }, 
      errorsPresent: false
    };
  },
  methods: {
    onSubmit() {// Submit button clicked
      // trim the words before emit
      this.localWord.german = this.localWord.german.trim();
      this.localWord.english = this.localWord.english.trim();
      this.localWord.spanish = this.localWord.spanish.trim();

      if (!this.localWord.german || !this.localWord.english || !this.localWord.spanish) { // if words are not in fields
        this.errorsPresent = true; 
      } else {
        this.errorsPresent = false;
        this.$emit('createOrUpdate', this.localWord); // emit the words to api
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
