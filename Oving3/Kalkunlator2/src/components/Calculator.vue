<script lang="ts">
import Log from "./Log.vue";

export default {
  name: "Calculator",
  components: {
    Log,
  },

  data() {
    return {
      value: "",
      logArray: [] as string[],
    };
  },

  methods: {
    number(n: string | number) {
      this.value += n;
    },
    operator(op: string) {
      if(this.value.length > 0 && this.value[this.value.length - 1] !== " ") {
        this.value += " " + op + " ";
      }
    },
    negative() {
      if(this.value.length == 0) {
        this.value += "-";
        return;
      }
      if(this.value.length == 1) {
        this.value += " - ";
        return;
      }
      if(this.value[this.value.length - 2].match(/[+/*]/)) {
        this.value += "- ";
      }
      if(this.value[this.value.length - 2] != "-" ) {
        this.value += " - ";
        return;
      }
    },
    decimal() {
      if(this.value.length == 0) {
        this.value += "0.";
        return;
      }
      if(this.value[this.value.length - 1].match(/[0-9]/) && !this.isAlreadyDecimal) {
        this.value += ".";
      }
    },
    del() {
      if(this.value[this.value.length-2] == " ") {
        this.value = this.value.slice(0, -2);
      } else {
        this.value = this.value.slice(0, -1);
      }
    },
    clear() {
      this.value = "";
    },
    equals() {
      if(this.value=="") return;
      var lastValue = this.value;
      this.parseValue();
      this.multiplyAndDivide();
      this.add();
      this.value = (Math.round(parseFloat(this.value)*100000)/100000).toString();
      if(this.value != lastValue) this.logArray.push(lastValue + " = " + this.value); 
    },
    parseValue() {
      for(var i = 2; i < this.value.length; i++) {
        if(this.value[i] == "-") {
          if(this.value[i-2] != "/" && this.value[i-2] != "*"  && this.value[i-2] != "+") {
            this.value = this.value.slice(0, i) + " + -" + this.value.slice(i+2);

            i+=4;
          }
          if(this.value[i-2] == "*" || this.value[i-2] == "/") {
            this.value = this.value.slice(0, i) + " -" + this.value.slice(i+2);
            i+=3;
          }
        }
      }
    },
    multiplyAndDivide() {
      for(var i = 0; i < this.value.length; i++) {
        if(this.value[i] == "*" || this.value[i] == "/") {
          var operator = this.value[i];

          var left = "";
          for(var j = i - 2; j >= 0; j--) {
            if(this.value[j] == " ") {
              break;
            }
            left += this.value[j];
          }
          left = left.split("").reverse().join("");

          var right = "";
          var num = 2;
          if(this.value[i+2] == " ") num = 3;
          for(var j = i + num; j < this.value.length; j++) {
            if(this.value[j] == " ") {
              break;
            }
            right += this.value[j];
          }

          var result = 0;
          if(operator == "/") {
            result = parseFloat(left) / parseFloat(right);
          } else {
            result = parseFloat(left) * parseFloat(right);
          }
          
          if(num == 3) this.value = this.value.replace(left + " " + operator + "  " + right, result.toString());
          else this.value = this.value.replace(left + " " + operator + " " + right, result.toString());
          
        }
      }
    },
    add() {
      for(var i = 0; i < this.value.length; i++) {
        if(this.value[i] == "+") {
          var left = "";
          var num = 2;
          if(this.value[i-2] == " ") num = 3;
          for(var j = i - num; j >= 0; j--) {
            if(this.value[j] == " ") {
              break;
            }
            left += this.value[j];
          }
          left = left.split("").reverse().join("");

          var right = "";
          for(var j = i + 2; j < this.value.length; j++) {
            if(this.value[j] == " ") {
              break;
            }
            right += this.value[j];
          }

          var result = parseFloat(left) + parseFloat(right);

          if(num == 3) this.value = this.value.replace(left + "  + " + right, result.toString());
          else this.value = this.value.replace(left + " + " + right, result.toString());
          
          i = 0;
        }
      }
    }
  },
  computed: {
    isAlreadyDecimal() {
      for(var i = this.value.length; i > 0; i--) {
        if(this.value[i] == ".") return true;
        if(this.value[i] == " ") return false;
      }
      return false;
    },
    
  }
}
</script>

<template>
  <h1>Calculator</h1>
  <!-- Display -->
  <div class="calculator">
    <div class="outer-box" style="">
      <div class="inner-box">
        {{ value || 0 }}
      </div>
    </div>

    <!-- Buttons (kunne sikkert brukt v-for) -->
    <div class="buttons">
      <div class="grid">
        <button class="button" @click="clear">C</button>
        <button class="button" @click="parseValue">ANS</button>
        <button class="button" @click="del">DEL</button>
        <button class="button" @click="operator('+')">+</button>
        <button class="button" @click="number(7)">7</button>
        <button class="button" @click="number(8)">8</button>
        <button class="button" @click="number(9)">9</button>
        <button class="button" @click="negative">-</button>
        <button class="button" @click="number(4)">4</button>
        <button class="button" @click="number(5)">5</button>
        <button class="button" @click="number(6)">6</button>
        <button class="button" @click="operator('*')">*</button>
        <button class="button" @click="number(1)">1</button>
        <button class="button" @click="number(2)">2</button>
        <button class="button" @click="number(3)">3</button>
        <button class="button" @click="operator('/')">/</button>
        <button class="button" > </button>
        <button class="button" @click="number(0)">0</button>
        <button class="button" @click="decimal">.</button>
        <button class="equals-button" @click="equals">=</button>
      </div>
    </div>
  </div>
  
  <Log :equations="logArray"/>
 
</template>

<style scoped>
.outer-box {
  background: #234;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  margin: 50px auto;
}

.inner-box {
  background: black;
  padding: 10px;
  border-radius: 15px;
  text-align: right;
  font-size: 1.5rem;
  color: white;

  }

.button {
  background: rgb(146, 154, 165);
  border-radius: 5px;
  cursor: pointer;
  /*padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  margin: 50px auto;*/
}

.equals-button {
  background: rgb(236, 175, 5);
  border-radius: 5px;
  cursor: pointer;
}

.calculator {
  background: #234;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  margin: 50px auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  padding: 10px;
}
</style>
