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
      <md-button class="md-raised" @click="resetForm()">Reset form</md-button>
      <md-button
        class="md-raised md-primary"
        :disabled="!maxNumber"
        @click="calculateFibonacci(maxNumber)"
        >Calculate</md-button
      >
    </div>
    <div v-if="isShownResult">
      <md-toolbar>
        <h3 class="md-title">Result: {{ calculationResult }}</h3>
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
      calculationResult: 0,
    };
  },
  methods: {
    calculateFibonacci: function(_maxNumber) {
      const maxNumber = Number(_maxNumber);

      this.isShownResult = true;
      if (maxNumber < 2) {
        this.calculationResult = maxNumber;
        return maxNumber;
      }

      this.calculationResult =
        this.calculateFibonacci(maxNumber - 1) +
        this.calculateFibonacci(maxNumber - 2);
      return this.calculationResult;
    },
    resetForm: function() {
      this.maxNumber = undefined;
      this.calculationResult = 0;
      this.isShownResult = false;
    },
  },
};
</script>
