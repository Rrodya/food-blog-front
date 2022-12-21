<template>
  <div class="sub-item">
    <div class="sub-item__image">
      <img src="../assets/main.png" alt="">
    </div>
    <div class="sub-item__info">
      <p class="sub-item__info-name font-text">
        Andrea Wise
      </p>
      <p class="sub-item__info-articles font-text">
        135 articles
      </p>
    </div>
  </div>
</template>

<script>

</script>

<style>
  .sub-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .sub-item__image {
    width: 60px;
    height: 60px;
    border-radius: 100px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sub-item__image img {
    max-height: 100%;
  }

  .sub-item__info-articles {
    padding-top: 7px;
  }

  .sub-item__info {
    margin-left: 10px;
  }

  li {
    list-style: none;
  }
</style>
