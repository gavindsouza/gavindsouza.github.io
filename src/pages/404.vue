<template>
  <Layout :show-logo="false">
    <Author :show-title="true" />
    <h1>Page Not Found</h1>
    <p>Sorry, but the page you were trying to view does not exist.</p>
    <h6>Sending you back</h6>
  </Layout>
</template>

<script>
import Author from '~/components/Author.vue'

export default {
  components: {
    Author
  },
  metaInfo: {
    title: 'Redirecting...!'
  },
    mounted: function() {
      setInterval(
        function(){ document.location.href = document.location.origin },
      3000
    )
  }
}
</script>
