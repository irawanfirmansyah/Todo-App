<template>
  <div class="about">
    <h1>This is actually not an about page...</h1>
    <form @submit.prevent="handleSubmit">
      <div class="input-container">
        <label class="label" for="inputTxtArea">
          <textarea
            required
            rows="5"
            class="input"
            placeholder=" "
            v-model="txtAreaInput"
            id="inputTxtArea"
          ></textarea>
          <span class="placeholder">Description</span>
          <span class="border-label border-label__txt-area"></span>
        </label>
      </div>
      <div class="input-container">
        <label class="label" for="inputUsername">
          <input
            required
            placeholder=" "
            class="input"
            id="inputUsername"
            v-model="usernameInput"
            @input="handleInput"
            type="text"
            pattern="[A-Za-z0-9]{6,15}"
          />
          <span class="placeholder">Username</span>
          <span class="border-label"></span>
          <span id="usnError" class="error-msg">
            Username should be an alphanumeric and between 6-15 characters 
          </span>
        </label>
      </div>
      <div class="input-container">
        <label class="label" for="inputPassword">
          <input
            required
            placeholder=" "
            class="input"
            id="inputPassword"
            v-model="passwordInput"
            @input="handleInput"
            type="password"
          />
          <span class="placeholder">Password</span>
          <span class="border-label"></span>
        </label>
        <span class="eye-icon">
          <i
            @click="eyeIconClicked"
            :class="{'far fa-eye': !showPassword, 'far fa-eye-slash': showPassword}"
          ></i>
        </span>
      </div>
      <div class="valid-container">
        <ul class="valid__ul">
          <li class="valid__li">
            <div class="flex-middle">
              <div class="valid__img-bckgrd" v-bind:class="{checked: containsUpperCase}"></div>
              <div>Contains Upper Case</div>
            </div>
          </li>
          <li class="valid__li">
            <div class="flex-middle">
              <div class="valid__img-bckgrd" v-bind:class="{checked: containsLowerCase}"></div>
              <div>Contains Lower Case</div>
            </div>
          </li>
          <li class="valid__li">
            <div class="flex-middle">
              <div class="valid__img-bckgrd" v-bind:class="{checked: containsNumber}"></div>
              <div>Contains Number</div>
            </div>
          </li>
          <li class="valid__li">
            <div class="flex-middle">
              <div class="valid__img-bckgrd" v-bind:class="{checked: containsSymbol}"></div>
              <div>Contains symbol</div>
            </div>
          </li>
          <li class="valid__li">
            <div class="flex-middle">
              <div class="valid__img-bckgrd" v-bind:class="{checked: inputLengthValid}"></div>
              <div>Length greater than or equal to 8</div>
            </div>
          </li>
        </ul>
      </div>
      <button class="c-btn" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      usernameInput: "",
      passwordInput: "",
      txtAreaInput: "",
      showPassword: false
    };
  },
  methods: {
    handleInput() {
      //Regex at least contains 1 word and 1 digit
      var regexUsn = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/;
      var regex = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/;

      var errorMsg = document.getElementById("usnError");

      if (!regexUsn.test(this.usernameInput)) {
        errorMsg.style.display = "block";
      } else {
        errorMsg.style.display = "none";
      }
      // At least one Upper Case, one Lower Case, one Number, and one Symbol Regex
      var regex1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W)(?=.{8,})/;
      console.log(this.usernameInput);
    },
    handleSubmit() {
      if (
        !this.containsUpperCase ||
        !this.containsLowerCase ||
        !this.containsNumber ||
        !this.containsSymbol ||
        !this.inputLengthValid
      ) {
        alert(
          `Your password must at least contains : \n-1 upper case\n-1 lower case\n-1 digit\n-1 non-word characters\n-8 characters minimum`
        );
      } else {
        alert(
          `Username : ${this.usernameInput}\nPassword : ${this.passwordInput}\nDescription : ${this.txtAreaInput}`
        );
      }
    },
    eyeIconClicked(e) {
      this.showPassword = !this.showPassword;
      var inputPasswordEle = document.getElementById("inputPassword");
      if (inputPasswordEle.type === "password") {
        inputPasswordEle.type = "text";
      } else {
        inputPasswordEle.type = "password";
      }
    }
  },
  computed: {
    containsUpperCase: function() {
      var regexUpperCase = /(?=.*[A-Z])/;
      return this.passwordInput.match(regexUpperCase);
    },
    containsLowerCase: function() {
      var regexLowerCsae = /(?=.*[a-z])/;
      return this.passwordInput.match(regexLowerCsae);
    },
    containsNumber: function() {
      var regexNumber = /(?=.*[0-9])/;
      return this.passwordInput.match(regexNumber);
    },
    containsSymbol: function() {
      var regexSymbol = /(?=.*\W)/;
      return this.passwordInput.match(regexSymbol);
    },
    inputLengthValid: function() {
      return this.passwordInput.length >= 8;
    }
  }
};
</script>

<style>
.about h1 {
  margin: 20px 0;
}

.error-msg {
  position: absolute;
  display: none;
  font-size: 12px;
  color: red;
  font-weight: 500;
}

.input-container {
  padding-top: 20px;
  padding-bottom: 20px;
}

/* :invalid ~ .error-msg {
  display: block;
} */

.label {
  position: relative;
  width: 100%;
  max-width: 280px;
  margin: 0px 20px;
}

.label .placeholder {
  position: absolute;
  left: 0;
  font-size: 16px;
  color: #9098a9;
  transition: all 0.2s ease;
  transform-origin: 0 0;
}

.label .border-label {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: #276f4e;
  transform: scaleX(0);
  transform-origin: 0 0;
  transition: all 0.15s ease;
}

.label textarea {
  resize: none;
}

.border-label__txt-area {
  margin-bottom: 0.4em;
}

.label .input {
  width: 100%;
  height: auto;
  border: 0;
  background: none;
  border-radius: 0;
  border-bottom: 2px solid #c8ccd4;
  transition: all 0.15s ease;
}

.label .input:hover {
  background-color: #f9f9fa;
}

.label .input:focus {
  background: none;
  outline: none;
}

.label .input:not(:placeholder-shown) + span {
  transform: translateY(-15px) scale(0.75);
}

.label .input:focus + span {
  color: #276f4e;
  transform: translateY(-15px) scale(0.75);
}

.label .input:focus ~ .border-label {
  transform: scaleX(1);
}

.valid-container {
  display: flex;
  justify-content: center;
}

.valid__ul {
  list-style: none;
  width: 33%;
}

.valid__img-bckgrd {
  background-image: url("../assets/xed-trpt.png");
  background-size: 100%;
  height: 17px;
  width: 17px;
  background-repeat: no-repeat;
  margin: 0 20px;
}

.valid__li {
  display: flex;
  margin: 8px 0;
  padding: 0px 20px;
}

.checked {
  background-image: url("../assets/checked-trpt.png");
}

.flex-middle {
  display: flex;
  align-items: center;
}

.eye-icon {
  position: absolute;
}
</style>