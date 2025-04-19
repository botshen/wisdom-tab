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
      <div class="quote-content">
        <span class="quote-mark">"</span>
        <h1 class="quote-text">{{ text }}</h1>
        <span class="quote-mark closing">"</span>
      </div>
      <div class="divider"></div>
      <p class="quote-credit">{{ credit }}</p>
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Source+Sans+Pro:wght@300;400;600&display=swap');

body {
  margin: 0;
  font-family: 'Source Sans Pro', sans-serif;
  overflow: hidden;
  background-color: #f8f9fa;
}

.quote-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
  padding: 2rem;
}

.quote-box {
  max-width: 750px;
  width: 100%;
  text-align: center;
  padding: 3.5rem 2.5rem;
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12), 0 5px 15px rgba(0, 0, 0, 0.06);
  }
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, #6e86ff, #a183ff);
  }
}

.quote-content {
  position: relative;
  padding: 0 1.5rem;
}

.quote-mark {
  font-family: 'Playfair Display', serif;
  font-size: 5rem;
  line-height: 0;
  color: rgba(110, 134, 255, 0.15);
  position: absolute;
  top: 1.5rem;
  left: -1rem;
  
  &.closing {
    left: auto;
    right: -1rem;
    bottom: 0;
    top: auto;
  }
}

.quote-text {
  font-family: 'Playfair Display', serif;
  font-size: 1.75rem;
  font-weight: 400;
  margin: 1.5rem 0 2.5rem;
  line-height: 1.6;
  color: #384357;
  
  @media (min-width: 768px) {
    font-size: 2.125rem;
  }
}

.divider {
  width: 80px;
  height: 3px;
  background: linear-gradient(to right, #6e86ff, #a183ff);
  margin: 1.5rem auto 1.75rem;
  border-radius: 3px;
}

.quote-credit {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  font-style: italic;
  color: #667185;
  letter-spacing: 0.02em;
  
  &::before {
    content: "— ";
  }
}
</style>