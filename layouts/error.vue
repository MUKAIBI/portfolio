<template>
  <div class="container">
    <main class="main">
      <section class="section">
        <div class="section__wrap">
          <h1 class="page-title" v-if="error.statusCode === 404">😵Page not found</h1>
          <h2 class="headline3">お探しのページはいずれかの理由により見つかりませんでした。</h2>
          <ol>
            <li>ページのURLが変更された可能性があります。</li>
            <li>ページが削除された可能性があります。</li>
            <li>アドレス（URL）をタイプミスしている可能性があります。</li>
          </ol>
          <h2 class="headline3">解決方法</h2>
          <ol>
            <li>URLが正しく入力されているかご確認ください。</li>
            <li><NuxtLink to="/" class="link__text">ホームに戻る</NuxtLink></li>
          </ol>
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.headline3 {
  margin-top: 2em;
}
</style>

<script>
  export default {
    props: ['error'],
    layout: 'error'
  }
</script>