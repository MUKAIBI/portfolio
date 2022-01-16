<template>
  <div class="wrapper">
    <ul class="pager">
      <li v-if="current > 1" class="page arrow">
        <nuxt-link :to="getPath(current - 1)">
          <img
            src="/images/icon_arrow_left.svg"
            width="24"
            height="24"
            alt="前のページへ"
          />
        </nuxt-link>
      </li>
      <li v-if="3 < current" class="page">
        <nuxt-link :to="getPath(1)">
          1
        </nuxt-link>
      </li>
      <li v-if="4 < current" class="omission">
        ...
      </li>
      <li
        v-for="p in pager"
        v-show="current - 3 <= p && p <= current + 1"
        :key="p"
        class="page"
        :class="{ active: current === p + 1 }"
      >
        <nuxt-link :to="getPath(p + 1)">
          {{ p + 1 }}
        </nuxt-link>
      </li>
      <li v-if="current + 3 < pager.length" class="omission">
        ...
      </li>
      <li v-if="current + 2 < pager.length" class="page">
        <nuxt-link :to="getPath(pager.length)">
          {{ pager.length }}
        </nuxt-link>
      </li>
      <li v-if="current < pager.length" class="page arrow">
        <nuxt-link :to="getPath(current + 1)">
          <img
            src="/images/icon_arrow_right.svg"
            width="24"
            height="24"
            alt="次のページへ"
          />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pager: {
      type: Array,
      required: false,
      default: () => [],
    },
    current: {
      type: Number,
      required: true,
    },
    category: {
      type: Object,
      required: false,
      default: undefined,
    },
    tag: {
      type: Object,
      required: false,
      default: undefined,
    },
  },
  methods: {
    getPath(p) {
      return `/page/${p}`;
      // if (this.category !== undefined) {
      //   return `/category/${this.category.id}/page/${p}`;
      // } else if (this.tag !== undefined) {
      //   return `/tag/${this.tag.id}/page/${p}`;
      // } else {
      //   return `/page/${p}`;
      // }
    },
  },
};
</script>