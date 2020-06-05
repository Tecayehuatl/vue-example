<template>
  <div class="o-calculation">
    <h1>Calculator</h1>
    <div>
      <md-field class="c-field">
        <label>Max. number of calculations</label>
        <md-input v-model="maxNumber"></md-input>
      </md-field>
    </div>
    <div class="c-actions">
      <md-button class="md-raised">Reset form</md-button>
      <md-button
        class="md-raised md-primary"
        :disabled="!maxNumber"
        @click="calculateFibonacci(maxNumber)"
        >Calculate</md-button
      >
    </div>
    <div v-if="isShownResult">
      <md-toolbar>
        <h3 class="md-title">Result: {{}}</h3>
      </md-toolbar>
    </div>
  </div>
</template>
<script>
export default {
  name: "CalculatorComponent",
  data: function() {
    return {
      maxNumber: undefined,
      isShownResult: false,
    };
  },
  methods: {
    calculateFibonacci: function(n) {
      console.log(n);
    },
  },
};
</script>
