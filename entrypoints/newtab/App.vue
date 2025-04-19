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
  font-family: 'Merriweather', 'Georgia', serif;
  overflow: hidden;
}

.quote-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #f8f9fa, #e9ecef);
  padding: 1.5rem;
}

.quote-box {
  max-width: 700px;
  width: 100%;
  text-align: center;
  padding: 2.5rem;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.3s ease;
}

.quote-box:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.quote-text {
  font-size: 1.75rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: #2d3748;
  
  @media (min-width: 768px) {
    font-size: 2rem;
  }
}

.quote-credit {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  font-style: italic;
  font-weight: 500;
  color: #4a5568;
}
</style>