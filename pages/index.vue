<template>
  <div>
    <section class="section animonItem">
      <div class="section__wrap">
        <h1 class="page-title"><nuxt-link to="/about" class="link__text-accent">MUKAIBI</nuxt-link> is a Web designer in Shizuoka.</h1>
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
                    loading="lazy"
                  />
                </picture>
              </div>
              <div class="works__text">
                <p class="works__name">{{ work.title }}</p>
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
              </div>
            </nuxt-link>
          </li>
        </ul>

        <Pagination
          :pager="pager"
          :current="Number(page)"
        />

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
  &__inner {
    display: block;
  }
  &__image {
    margin-bottom: 1em;
    overflow: hidden;
    img {
      width: 100%;
      transition: filter .2s ease-in-out;
    }
  }
  &__text {
    position: relative;
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
  }
  &__name {
    font-weight: bold;
  }
  &__date {
    font-family: $font-marcellus;
    font-size: rem(12);
    display: flex;
    justify-content: space-between;
    margin-top: .25em;
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
  a {
    display: block;
    &:hover {
      img {
        filter: grayscale(100%);
      }
      .works__text::after {
        width: 100%;
      }
    }
  }
}

[data-theme-mode='dark'] {
  .works {
    a {
      &:hover {
        color: $text-color-primary;
      }
    }
  }
}
</style>

<script>
export default {
  async asyncData({ params, $microcms }) {
    const page = params.p || '1';
    const limit = 10;
    const works = await $microcms.get({
      endpoint: 'works',
      queries: {
        limit: limit,
        offset: (page - 1) * limit,
      },
    });
    return {
      works,
      page,
      pager: [...Array(Math.ceil(works.totalCount / limit)).keys()],
    }
  },
}
</script>