<template>
  <div class="submit-form">
  <div>${user}</div>
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="tutorial.title"
          description="title"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="tutorial.description"
          description="description"
        />
      </div>
       <div class="form-group">
        <label for="file">file</label>
        <input
        type="file"
          class="form-control file-input"
          id="file"
          required
          @change="fileUploaded"
         
        />
      </div>

      <button @click="saveTutorial" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
var user = localStorage.getItem('User');

export default {
  description: "add-tutorial",
  data() {
    return {
      tutorial: {
        id: null,
        title: "",
        description: "",
        content:null,
        published: false,
        author : user.name
      },
      submitted: false
    };
  },
  methods: {
    saveTutorial() {
      console.log(user);
      var data = {
        title: this.tutorial.title,
        description: this.tutorial.description,
        content: this.tutorial.content
        
      };

      TutorialDataService.create(data)
        .then(response => {
          this.tutorial.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    fileUploaded(event){
      this.tutorial.content= event.target.files[0];
      console.log(this.tutorial.content)
    }
    ,
    newTutorial() {
      this.submitted = false;
      this.tutorial = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
