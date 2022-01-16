<template>
  <footer class="footer">
    <div class="footer__wrap">
      <p class="footer__copyright">
        &copy; MUKAIBI
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 1em 0;
  background-color: $base-color-secondary;
  &__wrap {
    width: 90%;
    margin: 0 auto;
  }
  &__copyright {
    font-family: $font-marcellus;
    font-size: rem(14);
  }
}

[data-theme-mode='dark'] {
  .footer {
    background: $base-color-dark-primary;
  }
}
</style>