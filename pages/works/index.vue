<template>
  <section class="section">
    <div class="section__wrap">
      <h1 class="headline2">Works</h1>
      <ul class="row works">
        <li v-for="work in works.contents" :key="work.id" class="works__item">
          <nuxt-link :to="`/works/${work.id}/`" class="works__inner">
            <div class="works__image">
              <picture>
                <source 
                  :width="work.thumbnail.width"
                  :height="work.thumbnail.height"
                  :srcset="work.thumbnail.url + '?fm=webp'"
                  type="image/webp"
                >
                <img
                  :width="work.thumbnail.width"
                  :height="work.thumbnail.height"
                  :src="work.thumbnail.url"
                  :alt="work.title"
                />
              </picture>
            </div>
            <div class="works__text">
              <p class="works__name">{{ work.title }}</p>
              <p class="works__date">
                <time
                  :datetime="work.release"
                  v-text="$dateFns.format(new Date(work.release), 'yyyy.MM')"
                />
              </p>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.works {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  &__item {
    width: 100%;
    @include mq() {
      width: calc((100% - 2.5em) / 2);
    }
  }
  &__item + &__item {
    margin-top: 1.5em;
    @include mq() {
      margin: 0;
    }
  }
  &__inner {
    display: block;
  }
  &__image {
    margin-bottom: 1em;
    img {
      width: 100%;
    }
  }
  &__name {
    font-weight: bold;
  }
  &__date {
    font-size: rem(14);
  }
  a {
    display: block;
    &:hover {
      filter: grayscale(100%);
    }
  }
}
</style>

<script>
export default {
  async asyncData({ $microcms }) {
    const works = await $microcms.get({
      endpoint: 'works',
    })
    return {
      works,
    }
  },
  data() {
    return {
      title: 'Works | MUKAIBI'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'MUKAIBI(ムカイビ)の関わった仕事を掲載しています。'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://mukaibi.com/works',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'MUKAIBI(ムカイビ)の関わった仕事を掲載しています。',
        }
      ]
    }
  },
}
</script>