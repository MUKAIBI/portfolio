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
          <li class="switch">
            <label class="switch-label">
              <input type="checkbox" id="js_mode_toggle">
              <span class="switch-mode"></span>
            </label>
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
      padding: 1em 4em;
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
    a {
      position: relative;
      padding: 0.5em 0.25em;
      z-index: 0;
      &::after {
        content: '';
        display: block;
        width: 0;
        height: 100%;
        background-color: $accent-color-secondary;
        transition: width .2s ease-in-out;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
      }
      &:hover {
        &::after {
          width: 100%;
        }
      }
    }
  }
}

.global-nav {
  &__menu {
    display: flex;
    list-style: none;
  }
  &__link {
    position: relative;
    font-family: $font-marcellus;
    font-weight: bold;
    display: inline-block;
    padding: 0.5em;
    z-index: 0;
    &::after {
      content: '';
      display: block;
      width: 0;
      height: 100%;
      background-color: $accent-color-secondary;
      transition: width .2s ease-in-out;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
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

[data-theme-mode='dark'] {
  .header {
    &__logo {
      color: $text-color-dark-primary;
      a {
        &:hover {
          color: $text-color-primary;
        }
      }
    }
  }

  .global-nav {
    &__link {
      &:hover {
        color: $text-color-primary;
      }
    }
  }
}
</style>