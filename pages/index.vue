<template>
  <div>
    <section class="section">
      <div class="section__wrap">
        <h1 class="page-title">MUKAIBI is a Web designer in Shizuoka.</h1>
      </div>
    </section>

    <section class="section">
      <div class="section__wrap">
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
  </div>
</template>

<style lang="scss" scoped>
.works {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  &__item {
    width: 100%;
    margin-bottom: 1.5em;
    @include mq() {
      width: calc((100% - 2.5em) / 2);
      margin-bottom: 3em;
    }
  }
  &__item + &__item {
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
}
</script>