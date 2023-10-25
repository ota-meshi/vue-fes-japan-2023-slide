<template>
  <div class="slidev-layout default sub-3-cols">
    <slot />
    <div grid="~ cols-3 gap-4">
      <div class="sub-3-cols__left">
        <slot name="left" />
      </div>
      <div class="sub-3-cols__middle">
        <slot name="middle" />
      </div>
      <div class="sub-3-cols__right">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.sub-3-cols.wide-right .sub-3-cols__middle {
  display: none;
}
.sub-3-cols.wide-right .sub-3-cols__right {
  grid-area: auto / span 2;
}
</style>
