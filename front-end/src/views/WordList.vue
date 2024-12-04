<template>
    <div>
        
        <h1>Words List</h1>
        
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
                <tr v-for="word in words" :key="word._id">
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
        name: 'word-list',
        data() {
            return {
                words: []
            };
        },
        methods: {
            async onDestroy(id) {
                const sure = window.confirm('Are you sure?');
                if (!sure) return;
                await api.deleteWord(id);
                this.flash('Word deleted successfully!', 'success'); 
                this.words = this.words.filter(word => word._id !== id); // update the word list by filter out the deleted word
            }
        },
        async mounted() {
            this.words = await api.getWords();
        }
    };
</script>
