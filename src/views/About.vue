<template>
  <div class="about">
    <h1>This is actually not an about page...</h1>
    <div class="input-container">
      <label class="label" for="inputTxtArea">
        <textarea rows="5" class="input" placeholder=" " v-model="txtAreaInput" id="inputTxtArea"></textarea>
        <span class="placeholder">Description</span>
        <span class="border-label border-label__txt-area"></span>
        <span class="error-msg">Username must at least 5 characters and max 16 characters</span>
      </label>
    </div>
    <div class="input-container">
      <label class="label" for="inputUsername">
        <input
          placeholder=" "
          class="input"
          id="inputUsername"
          v-model="usernameInput"
          @input="handleInput"
          type="text"
          pattern=".{5,16}"
        />
        <span class="placeholder">Username</span>
        <span class="border-label"></span>
        <p class="input-length">test123</p>
      </label>
    </div>
    <div class="input-container">
      <label class="label" for="inputPassword">
        <input
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
    <button class="c-btn" @click="handleClick">Submit</button>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      usernameInput: "",
      passwordInput: "",
      txtAreaInput: ""
    };
  },
  methods: {
    handleInput(e) {
      var regex = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/;
      // At least one Upper Case, one Lower Case, one Number, and one Symbol Regex
      var regex1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W)(?=.{8,})/;
      // console.log(e.target.value.match(regex1));
      // console.log(!e.target.value.match(regex0));
      // console.log(e.target.value);
      console.log(this.usernameInput);
      console.log(this.passwordInput);
    },
    handleClick() {
      alert(
        `Username : ${this.usernameInput}\nPassword : ${this.passwordInput}\nDescription : ${this.txtAreaInput}`
      );
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
  display: none;
  font-size: 12px;
  color: red;
  font-weight: 500;
}

.input-container {
  padding-top: 20px;
  padding-bottom: 20px;
}

:invalid ~ .error-msg {
  display: block;
}

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
</style>