<template>
  <div>
    <section class="contents">
      <div class="contents__wrap">
        <h1 class="headline2">About</h1>
        <div class="profile">
          <div class="profile__box">
            <div class="profile__text">
              <p class="profile__name">
                <span>{{ settings.name }}</span>
                <span lang="en">{{ settings.nameEnglish }}</span>
              </p>
              <dl class="profile__item">
                <dt class="profile__title">技術スタック</dt>
                <dd>{{ settings.skills }}</dd>
              </dl>
              <dl class="profile__item">
                <dt class="profile__title">趣味</dt>
                <dd>{{ settings.hobby }}</dd>
              </dl>
            </div>
            <div class="profile__image">
              <img
                :width="settings.profileImage.width"
                :height="settings.profileImage.height"
                :src="settings.profileImage.url"
                :alt="settings.name"
              />
            </div>
          </div>
          <p class="profile__message">{{ settings.message }}</p>
          <dl class="profile__item">
            <dt class="profile__title">Contact</dt>
            <dd><a href="mailto:info@mukaibi.com">info@mukaibi.com</a></dd>
          </dl>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  &__box {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 0.5em;
    @include mq() {
      flex-direction: row-reverse;
      justify-content: space-between;
      margin-bottom: 2em;
    }
  }
  &__name {
    font-size: rem(20);
    font-weight: bold;
    margin-bottom: 1em;
    @include mq() {
      font-size: rem(24);     
    }
    [lang='en'] {
      font-size: rem(16);
      &::before {
        content: '/';
        margin: 0 0.25em;
      }
    }
  }
  &__item {
    margin-bottom: 1.5em;
    // @include mq() {
    //   margin-bottom: 1em;
    // }
  }
  &__title {
    font-size: rem(18);
    font-weight: bold;
    margin-bottom: 0.4em;
    // @include mq() {
    //   margin-bottom: 0.4em;
    // }
  }
  &__image {
    width: 100%;
    margin-bottom: 1.75em;
    @include mq() {
      width: 30%;
      margin: 0 2em 0 0;
    }
    img {
      width: 100%;
    }
  }
  &__message {
    margin-bottom: 2em;
    // line-height: 2;
    white-space: pre-wrap;
  }
}
</style>

<script>
export default {
  async asyncData({ $microcms }) {
    const settings = await $microcms.get({
      endpoint: 'settings',
    })
    return {
      settings,
    }
  },
  data() {
    return {
      title: 'About | MUKAIBI'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'MUKAIBI(ムカイビ)の自己紹介と問い合わせ先を掲載しています。',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://mukaibi.com/about',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'MUKAIBI(ムカイビ)の自己紹介と問い合わせ先を掲載しています。',
        }
      ]
    }
  },
}
</script>