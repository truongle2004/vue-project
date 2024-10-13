<script setup>
const handleClick = () => {
  console.log('is called')
}
</script>

<template>
  <div class="product-container" @click="handleClick">
    <img
      src="https://images.asos-media.com/products/topshop-tab-belted-twill-car-coat-in-grey/206033977-1-grey?$n_480w$&wid=476&fit=constrain"
      alt="Tab Belted Twill Car Coat"
      class="product-image"
    />
    <div class="info">
      <div class="title">
        <p>Tab Belted Twill Car Coat</p>
      </div>
      <div class="price">
        <strong>
          <p>£100.00</p>
        </strong>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-container {
  display: flex;
  flex-direction: column;
  margin: 20px;
  max-width: 318px;
}

.product-image {
  width: 100%;
  height: auto;
}

.info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  margin-top: 10px;
}

.title p,
.price p {
  margin-bottom: 0;
}
</style>
