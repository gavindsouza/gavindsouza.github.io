<template>
	<div class="hero">
		<a href="/">
			<g-image alt="Author image" class="hero__image" src="//github.com/gavindsouza.png" width="180" height="180" blur="5" />
		</a>

		<h1 v-if="showTitle" class="hero__site-title">
			{{ $static.metadata.siteName }}
		</h1>

		<p class="hero__intro">
			!rant
		</p>

		<p class="hero__links">
			<a href="//twitter.com/gavinxdsouza">Twitter</a>
			<a href="//github.com/gavindsouza">GitHub</a>
		</p>

	</div>

</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Author from "~/components/Author.vue";

export default {
  components: {
      Author
  }
};
</script>

<style lang="scss">
.hero {
    a {
        background: #000;
    }
}
</style>
