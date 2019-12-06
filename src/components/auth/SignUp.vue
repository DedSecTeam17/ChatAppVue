<template>

    <div>


        <div class="row mt-4">

            <div class="col-md-4 offset-md-4">


                <div class="card">

                    <div class="card-body">

                        <div v-if="showError" class="alert alert-danger" role="alert">
                            {{error_data}}
                        </div>
                        <h4>New account</h4>

                        <div class="needs-validation">
                            <form @submit.prevent="submit" class="needs-validation" novalidate>
                                <div class="form-group">

                                    <input :class="{'is-invalid':$v.email.$error,'is-valid':!$v.email.$invalid}"
                                           v-model.trim="$v.email.$model" class="form-control" placeholder="Email"
                                           id="exampleInputEmail1" name="email"
                                           type="email">
                                    <p class="invalid-feedback" v-if="!$v.email.email">invalid email</p>
                                    <p class="invalid-feedback" v-if="!$v.email.required">Email required</p>
                                </div>


                                <div class="form-group">
                                    <input :class="{'is-invalid':$v.userName.$error,'is-valid':!$v.userName.$invalid}"
                                           v-model.trim="$v.userName.$model" class="form-control"
                                           placeholder="user name"
                                           id="user_name" name="userName"
                                           type="email">
                                    <p class="invalid-feedback" v-if="!$v.userName.required">user name required</p>
                                </div>


                                <div class="form-group">
                                    <input :class="{'is-invalid':$v.password.$error,'is-valid':!$v.password.$invalid}"
                                           v-model.trim="$v.password.$model" class="form-control "
                                           id="exampleInputPassword1" placeholder="Password"
                                           name="password" type="password">

                                    <p class="invalid-feedback" v-if="!$v.password.minLength">min length is 4
                                        character</p>
                                    <p class="invalid-feedback" v-if="!$v.password.required">Password required</p>

                                </div>
                                <button type="submit" class="btn btn-info btn-block  text-center">
                                    <span v-if="this.isLoading" class="spinner-border text-light" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </span>
                                    <span v-else>Sign Up</span>

                                </button>


                                <router-link to="/signIn">already have account ?</router-link>


                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
    import {required, minLength, email} from 'vuelidate/lib/validators'
    import axios from 'axios';
    import {UserSession} from "../../Services/user_session";

    export default {
        name: "Register",
        data() {
            return {
                password: '',
                email: '',
                userName: '',
                showError: false,
                error_data: "",
                isLoading: false
            }
        },
        validations: {
            email: {
                required, email
            },
            userName: {
                required
            },
            password: {
                required,
                minLength: minLength(4)
            }
        },
        methods: {
            submit() {
                this.$v.$touch()
                if (this.$v.$invalid) {
                    // console.log('invalid')
                } else {
                    // console.log('valid')
                    this.isLoading = true
                    this.SignUp();
                }
            },
            SignUp() {
                axios.post("https://sustkeys.herokuapp.com/users", {
                    "email": this.email, "password": this.password
                }).then(() => {
                    // console.log(res);
                    axios.post("https://sustkeys.herokuapp.com/auth", {
                        "email": this.email, "password": this.password
                    }).then((res) => {
                        this.showError = false;
                        UserSession.setToken(res.data['token']);
                        this.$router.push('/chat');
                    }).catch((err) => {
                        this.isLoading = false;
                        this.error_data = err;
                        this.showError = true;
                        // console.log(err)
                    })
                }).catch((err) => {
                    this.isLoading = false;
                    this.error_data = err;
                    this.showError = true;
                    // console.log(err)
                })
            }
        }
    }
</script>

<style scoped>
</style>