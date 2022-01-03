<template>
  <header class="header">
    <div class="header__wrap">
      <div class="header__logo">
        <nuxt-link to="/">MUKAIBI</nuxt-link>
      </div>

      <nav class="global-nav">
        <ul class="global-nav__menu">
          <li>
            <nuxt-link to="/works" class="global-nav__link">Works</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about" class="global-nav__link">About</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    // TOPページかどうか
    isTopPage() {
      if (this.$route.name === 'index') return true
      return false
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  backdrop-filter: blur(4px);
  &__wrap {
    padding: 0 1.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include mq() {
      padding: 0 4em;
    }
  }
  &__logo {
    font-family: $font-marcellus;
    font-size: rem(18);
    font-weight: bold;
    color: $text-color-primary;
    @include mq() {
      font-size: rem(24);
    }
  }
}

.global-nav {
  &__menu {
    list-style: none;
    display: flex;
  }
  &__link {
    position: relative;
    font-family: $font-marcellus;
    font-weight: bold;
    line-height: 64px;
    display: inline-block;
    padding: 0 0.25em;
    @include mq() {
      padding: 0 0.75em;
    }
    &::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background-color: $accent-color-primary;
      transition: width .15s ease-out;
      position: absolute;
      left: 0;
      bottom: 0;
    }
    &:hover {
      &::after {
        width: 100%;
      }
    }
  }
  li + li {
    margin-left: 1rem;
  }
}
</style>