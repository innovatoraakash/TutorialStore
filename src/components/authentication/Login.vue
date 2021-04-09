<template>

    <div class="vue-tempalte">
    
        <form>
            <h3>Sign In</h3>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" v-model="user.email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="user.password" class="form-control form-control-lg" />
            </div>

            <button type="submit"  @click="clickedSignin" class="btn btn-dark btn-lg btn-block">Sign In</button>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgetpass">Forgot password ?</router-link>
            </p>

            <div class="social-icons">
                <ul>
                    <li><a href="#"><i class="fa fa-google"></i></a></li>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                </ul>
            </div>

        </form>
    </div>
</template>

<script>
import TutorialDataService from "../../services/TutorialDataService";


    export default {
        data() {
            return {
                user:{
                email:'',
                password:'',
                name:''
                },
                loggedin: false
            }
        },
        // components:{
        //     appTutorials
        // },
        methods: {
             clickedSignin(){
                var signinData={
                    email:this.user.email,
                    password:this.user.password
                };
                console.log(signinData);
              TutorialDataService.login(signinData)
             .then(response => {
    
            this.user = response.data;
            localStorage.setItem('User', JSON.stringify(this.user));
             this.loggedin= true;
            //  userId=this.user.email; 
              this.$router.push('/tutorials');
             
                })
             .catch(e => {
             console.log(e);
             });
            }
        },
    }
</script>