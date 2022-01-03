<template>
  <section class="contents">
    <div class="contents__wrap works">
      <h1 class="headline3">{{ work.title }}</h1>
      <div class="works__date">
        <time
          :datetime="work.release"
          v-text="$dateFns.format(new Date(work.release), 'yyyy.MM')"
        />
        <ul class="works__responsibility">
          <li
            v-for="(res, resIndex) in work.responsibility"
            :key="resIndex"
            v-text="res"
          />
        </ul>
      </div>
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
        <p>{{ work.overview }}</p>
        <p class="link__text"><a :href="work.url" target="_blank">{{ work.url }}</a></p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.works {
  &__image {
    margin-bottom: 1em;
    @include mq() {
      margin-bottom: 2em;
    }
  }
  &__date {
    display: flex;
    justify-content: space-between;
    font-size: rem(14);
    margin-bottom: 1em;
    @include mq() {
      margin-bottom: 2em;
    }
  }
  &__responsibility {
    display: flex;
    list-style: none;
    text-align: right;
    li + li {
      margin-left: .5em;
      &::before {
        content: "/";
        display: inline-block;
        padding-right: .5em;
      }
    }
  }
  &__text {
    margin-bottom: 1.5em;
    p {
      white-space: pre-wrap;
    }
    p + p {
      margin-top: 1em;
    }
  }
}
</style>

<script>
export default {
  async asyncData({ $microcms, params }) {
    const work = await $microcms.get({
      endpoint: `works/${params.id}`,
    })
    return {
      work,
    }
  },
  data() {
    return {
      title: 'Works | MUKAIBI'
    }
  },
  head() {
    return {
      title: this.work.title + ' | MUKAIBI',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.work.overview
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://mukaibi.com/works/' + this.work.slug,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.work.overview,
        }
      ]
    }
  },
}
</script>