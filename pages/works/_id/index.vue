<template>
  <section class="contents">
    <div class="contents__wrap works">
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
      <h1 class="headline3">{{ work.title }}</h1>
      <div class="works__date">
        <time
          :datetime="work.release"
          v-text="$dateFns.format(new Date(work.release), 'yyyy')"
        />
        <ul class="works__category">
          <li v-for="i in Object.keys(work['category']).length" :key="i.category" class="works__category-item">
            {{ work.category[i-1] && work.category[i-1].name }}
          </li>
        </ul>
      </div>
      <div class="works__text">
        <p>{{ work.overview }}</p>
        <div class="link__text"><p v-if="work.textlink1"><a :href="work.textlink1" target="_blank">{{ work.textlink1 }}</a></p></div>
        <div class="link__text"><p v-if="work.textlink2"><a :href="work.textlink2" target="_blank">{{ work.textlink2 }}</a></p></div>
        <h2 v-if="work.credit" class="headline4">Role</h2>
        <p v-if="work.credit" class="works__text-block">{{ work.credit }}</p>
        <h2 v-if="work.technicalnote" class="headline4">Technical notes</h2>
        <p v-if="work.technicalnote" class="works__text-block">{{ work.technicalnote }}</p>
      </div>
      <div class="works__image">
        <picture v-if="work.img1">
          <source 
            :width="work.img1.width"
            :height="work.img1.height"
            :srcset="work.img1.url + '?fm=webp'"
            type="image/webp"
          >
          <img
            :width="work.img1.width"
            :height="work.img1.height"
            :src="work.img1.url"
          />
        </picture>
        <picture v-if="work.img2">
          <source 
            :width="work.img2.width"
            :height="work.img2.height"
            :srcset="work.img2.url + '?fm=webp'"
            type="image/webp"
          >
          <img
            :width="work.img2.width"
            :height="work.img2.height"
            :src="work.img2.url"
          />
        </picture>
        <picture v-if="work.img3">
          <source 
            :width="work.img3.width"
            :height="work.img3.height"
            :srcset="work.img3.url + '?fm=webp'"
            type="image/webp"
          >
          <img
            :width="work.img3.width"
            :height="work.img3.height"
            :src="work.img3.url"
          />
        </picture>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.works {
  &__image {
    img,
    picture {
      margin: 1em 0;
      @include mq() {
        margin: 1em 0 2em;
      }
    }
  }
  &__date {
    font-family: $font-marcellus;
    font-size: rem(12);
    display: flex;
    justify-content: space-between;
    margin-bottom: 2em;
    @include mq() {
      margin-bottom: 3em;
    }
  }
  &__category {
    display: flex;
    text-align: right;
    &-item {
      margin-left: .25em;
      &:not(:last-child)::after {
        content: "/";
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
  &__text-block {
    font-family: $font-marcellus;
    font-size: rem(12);
  }
}

.headline4 {
  font-family: $font-marcellus;
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
          content: 'https://mukaibi.com/works/' + this.work.id,
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