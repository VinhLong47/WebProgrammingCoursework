<template>
    <div>

      <!--Search bar-->
      <div class="ui fluid icon input">
        <input type="text" placeholder="Search word..." v-model="searchQuery"/>
        <i class="search icon"></i>
      </div>
  
      <!--Language filters-->
      <div class="ui buttons">
        <button class="ui button" @click="filterByLanguage('all')">All</button>
        <button class="ui button" @click="filterByLanguage('german')">German</button>
        <button class="ui button" @click="filterByLanguage('english')">English</button>
        <button class="ui button" @click="filterByLanguage('spanish')">Spanish</button>
      </div>
      <br>
      <br>

      <!--Display selected language-->
      <div>
        <h2>Language Filter: {{ language }}</h2>
      </div>

      <!--Search result table-->
      <table id="words" class="ui celled compact table">
        <thead>
          <tr>
            <th v-if="language === 'all' || language === 'german'"><i class="germany flag"></i>German</th>
            <th v-if="language === 'all' || language === 'english'"><i class="united kingdom flag"></i>English</th>
            <th v-if="language === 'all' || language === 'spanish'"><i class="spain flag"></i>Spanish</th>
          </tr>
        </thead>
        <tbody>
          <!--Display list word for words in the filtered list-->
          <tr v-for="word in filteredWords" :key="word._id"> 
            <td v-if="language === 'all' || language === 'german'">{{ word.german }}</td>
            <td v-if="language === 'all' || language === 'english'">{{ word.english }}</td>
            <td v-if="language === 'all' || language === 'spanish'">{{ word.spanish }}</td>
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
        language: "all", 
      };
    },
    computed: {
      // Filter words based on search query and selected language
      filteredWords() {
        const query = this.searchQuery.toLowerCase().trim(); // get word from the search query
        
        return this.words.filter(word => {  // compare the word list with search query
        if (this.language !=="all") {
            return word[this.language].toLowerCase().includes(query); // return words that matches search query
          }
        else {
          return word.german.toLowerCase().includes(query) ||
                word.english.toLowerCase().includes(query) ||
                word.spanish.toLowerCase().includes(query);
          }
        });
      }
    },
    methods: {
    filterByLanguage(language) { // get language based on the filter selection
      // set language
        this.language = language; 
      },
    },

    async mounted() {
      this.words = await api.getWords();
    }
  };
  </script>

  