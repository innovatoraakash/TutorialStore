<template>
    <div class="vue-tempalte">
        <form>
            <h3>Sign Up</h3>

            <div class="form-group">
                <label>Full Name</label>
                <input v-model="name" type="text" class="form-control form-control-lg"/>
            </div>

            <div class="form-group">
                <label>Email address</label>
                <input v-model="email" type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input v-model="password" type="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" @click="clickedSignup" class="btn btn-dark btn-lg btn-block">Sign Up</button>

            <p class="forgot-password text-right">
                Already registered 
                <router-link :to="{name: 'login'}">sign in?</router-link>
            </p>
        </form>
    </div>
</template>

<script>
import TutorialDataService from "../../services/TutorialDataService"; 
    export default {
       data() {
            return {
                email:'',
                password:'',
                loggedin: false,
                name:''
            }
        },
        methods: {
            clickedSignup(){
                var signupData={
                    email:this.email,
                    password:this.password,
                    name:this.name
                };
             TutorialDataService.signup(signupData)
             .then(response => {
                 console.log(response);
            this.user.name = response.signupData.name;
            console.log(response.data);
            //  this.loggedin= true;
            //   router.Router.push({name:'tutorials'});
             
        })
        .catch(e => {
          console.log(e);
        });
            }
        },
    }
    
</script>