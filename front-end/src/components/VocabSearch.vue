<template>
    <div>
      <div class="ui fluid icon input">
        <input type="text" placeholder="Search word..." 
          v-model="searchQuery"
        />
        <i class="search icon"></i>
      </div>
  
      <div class="ui buttons">
        <button class="ui button" 
          @click="filterByLanguage('all')">All</button>
        <button class="ui button" 
          @click="filterByLanguage('german')">German</button>
        <button class="ui button" 
          @click="filterByLanguage('english')">English</button>
        <button class="ui button" 
          @click="filterByLanguage('spanish')">Spanish</button>
      </div>
      <br><br>
      <div>
        <h2>Search Filter: {{ language }}</h2>
      </div>
      <table id="words" class="ui celled compact table">
        <thead>
          <tr>
            <th><i class="germany flag"></i>German</th>
            <th><i class="united kingdom flag"></i>English</th>
            <th><i class="spain flag"></i>Spanish</th>
            <th colspan="3"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="word in filteredWords" :key="word._id">
            <td>{{ word.german }}</td>
            <td>{{ word.english }}</td>
            <td>{{ word.spanish }}</td>
    
            <td width="70" class="center aligned">
              <router-link :to="{ name: 'word-show', params: { id: word._id }}">Show</router-link>
            </td>
            <td width="70" class="center aligned">
              <router-link :to="{ name: 'word-edit', params: { id: word._id }}">Edit</router-link>
            </td>
            <td width="70" class="center aligned">
              <a href="#" @click.prevent="onDestroy(word._id)">Destroy</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { api } from "../helpers/helper";
  
  export default {
    name: 'word-search',
    data() {
      return {
        words: [],
        searchQuery: "", 
        language: "", 
      };
    },
    computed: {
      // Filter words based on search query and selected language
      filteredWords() {
        const query = this.searchQuery.toLowerCase();
        
        return this.words.filter(word => {

        if (this.language !=="all") {
            const matchesSearchQuery = word[this.language].toLowerCase().includes(query)
            return matchesSearchQuery && word[this.language] && word[this.language].toLowerCase().includes(query);
          }
        else {
            const matchesSearchQuery = 
            word.german.toLowerCase().includes(query) ||
            word.english.toLowerCase().includes(query) ||
            word.spanish.toLowerCase().includes(query);

            return matchesSearchQuery;
          }
        });
      }
    },
    methods: {
      async onDestroy(id) {
        const sure = window.confirm('Are you sure?');
        if (!sure) return;
        await api.deleteWord(id);
        this.flash('Word deleted successfully!', 'success'); 
        this.words = this.words.filter(word => word._id !== id);
      },

      filterByLanguage(language) {
        this.language = language;
      },
 
    },

    async mounted() {
      this.words = await api.getWords();
    }
  };
  </script>

  