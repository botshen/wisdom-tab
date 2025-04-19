<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { randomQuote } from '../../utils/randomQuote';
const text = ref('');
const credit = ref('');
onMounted(async () => {
  const quote = await randomQuote();
  text.value = quote.text;
  credit.value = quote.credit;
});
</script>

<template>
  <div class="quote-container">
    <div class="quote-box">
      <h1 class="quote-text">{{ text }}</h1>
      <p class="quote-credit">{{ credit }}</p>
    </div>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  overflow: hidden;
}

.quote-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 1rem;
}

.quote-box {
  max-width: 650px;
  text-align: center;
  padding: 2rem;
  border-radius: 0.25rem;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.quote-text {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  line-height: 1.4;
  color: #333;
  
  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
}

.quote-credit {
  font-size: 1rem;
  font-weight: 500;
  color: #666;
}
</style>