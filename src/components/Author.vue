<template>
	<div class="author">
		<a href="/">
			<g-image alt="Author image" class="author__image" src="//github.com/gavindsouza.png" width="180" height="180" blur="5" />
		</a>

		<h1 v-if="showTitle" class="author__site-title">
			{{ $static.metadata.siteName }}
		</h1>

		<p class="author__intro">
			!rant
		</p>

		<p class="author__links">
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
export default {
	props: ['showTitle']
}
</script>

<style lang="scss">
.author {
	margin: 0 auto;
	max-width: 500px;
	text-align: center;
	padding: calc(var(--space) / 2) 0;

	&__image {
		border-radius: 100%;
		width: 90px;
		height: 90px;
		margin-bottom: 1em;
	}

	&__intro {
		opacity: .8;
	}

	&__site-title {
		font-size: 1.5em;
	}

	&__links {
		margin-top: -.5em;
		a {
			margin: 0 .5em;
		}
		a:link {
			color: blue;
			background-color: transparent;
			text-decoration: none;
		}
		a:hover {
			color: rgb(85, 48, 155);
			background-color: transparent;
			text-decoration: underline;
		}
	}
}
</style>
