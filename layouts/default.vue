<template>
  <div class="container">
    <TheHeader />
    <main class="main">
      <Nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<style lang="scss" scoped>
#container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  position: fixed;
  z-index: 1;
}

.main {
  flex: 1;
  overflow-x: hidden;
  padding-top: 4em;
}
</style>