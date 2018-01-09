<template>
  <div class="page">
    <ul>
      <li v-for="route in routes">
        <router-link :to="{name: route.name}">{{ route.name }}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import routes from '@/router/routes'
export default {
  name: 'tools',
  data () {
    return {
      routes: routes
    }
  }
}
</script>
