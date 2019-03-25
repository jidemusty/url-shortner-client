<template>
  <div class="container container--centered">
    <div class="stats">
      <h1 class="stats__header">
        Stats for x
      </h1>
      <dl class="dlist">
        <dt class="dlist__title">Origin URL</dt>
        <dd class="dlist__body">X</dd>
      </dl>
      <dl class="dlist">
        <dt class="dlist__title">Shortening requested</dt>
        <dd class="dlist__body">X</dd>
      </dl>
      <dl class="dlist">
        <dt class="dlist__title">Used</dt>
        <dd class="dlist__body">X</dd>
      </dl>
      <dl class="dlist">
        <dt class="dlist__title">Last requested</dt>
        <dd class="dlist__body">X</dd>
      </dl>
      <dl class="dlist">
        <dt class="dlist__title">Last used</dt>
        <dd class="dlist__body">Never</dd>
      </dl>
      <a href="#" class="button button--blue">Take me there</a>
    </div>
    <div class="stats__loading">One moment</div>
  </div>
</template>

<style lang="scss">
  .stats {
    color: #FFF;
    font-size: 1.2em;
    font-weight: 500;
    width: 100%;

    &__header {
      font-size: 1.4em;
      margin: 0;
      margin-bottom: 40px;
      overflow-wrap: break-word;
    }

    &__loading {
      color: #FFF;
      font-size: 1.2em;
      font-weight: 500;
    }
  }
</style>
