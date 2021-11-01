<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred" @close="handleError">
    <p>{{error}}</p>
    </base-dialog>
    <base-dialog title="Authenticating..." :show="isLoading" fixed>
    <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <form @submit.prevent="sumbitForm">
        <div class="form-control">
          <label for="email">Email</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <p v-if="!formIsValid">
          Please enter a valid email and password at least 8 chars long
        </p>
        <base-button>{{ sumbitModeButtonCaption }}</base-button>
        <base-button type="button" mode="flat" @click="switchAuthMode">{{
          switchModeButtonCaption
        }}</base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
      error: null
    };
  },
  computed: {
    sumbitModeButtonCaption() {
      if (this.mode === 'login') {
        return 'Login';
      } else {
        return 'Sign up';
      }
    },
    switchModeButtonCaption() {
      if (this.mode === 'login') {
        return 'Sign up instead';
      } else {
        return 'Login instead';
      }
    }
  },
  methods: {
    async sumbitForm() {
      this.formIsValid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 8
      ) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;
      try {
        if (this.mode === 'login') {
          //...
        } else {
          await this.$store.dispatch('signup', {
            email: this.email,
            password: this.password
          });
        }
      } catch (err) {
        this.error = err.message || 'Failed to Authenticate';
      }
      this.isLoading = false;
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
    handleError(){
      this.error=null;
    }
  }
};
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>
