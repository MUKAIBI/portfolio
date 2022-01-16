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
                <dt class="profile__title">Hobby</dt>
                <dd>{{ settings.hobby }}</dd>
              </dl>
              <dl class="profile__item">
                <dt class="profile__title">Skills</dt>
                <dd class="text__en">{{ settings.skills }}</dd>
              </dl>
            </div>
            <div class="profile__image">
              <picture>
                <source 
                  :width="settings.profileImage.width"
                  :height="settings.profileImage.heigh"
                  :srcset="settings.profileImage.url + '?fm=webp'"
                  type="image/webp"
                >
                <img
                  :width="settings.profileImage.width"
                  :height="settings.profileImage.heigh"
                  :src="settings.profileImage.url"
                  :alt="settings.name" 
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
          <p class="profile__message">{{ settings.message }}</p>
          <!-- <dl class="profile__item">
            <dt class="profile__title">Contact</dt>
            <dd class="link__text"><a href="mailto:info@mukaibi.com">info@mukaibi.com</a></dd>
          </dl> -->
          <dl class="profile__item">
            <dt class="profile__title">Contact</dt>
            <dd>
              <ul class="list__text">
                <li class="link__text"><a href="mailto:info@mukaibi.com">info@mukaibi.com</a></li>
                <li v-if="settings.snslink1" class="link__text"><a :href="settings.snslink1" target="_blank">Twitter</a></li>
                <li v-if="settings.snslink2" class="link__text"><a :href="settings.snslink2" target="_blank">Instagram</a></li>
                <li v-if="settings.snslink3" class="link__text"><a :href="settings.snslink3" target="_blank">{{ settings.snslink3 }}</a></li>
              </ul>
            </dd>
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
      justify-content: start;
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
      font-family: $font-marcellus;
      font-size: rem(16);
      &::before {
        content: '/';
        margin: 0 0.25em;
      }
    }
  }
  &__item {
    margin-bottom: 1.5em;
  }
  &__title {
    font-family: $font-marcellus;
    font-size: rem(18);
    font-weight: bold;
    margin-bottom: 0.4em;
  }
  &__image {
    width: 70%;
    margin: 0 auto 1.75em;
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
  .text__en,
  .link__text,
  .list__text {
    font-family: $font-marcellus;
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