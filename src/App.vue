<template>
  <div id="app">
    <VHeader/>
    <Home/>
  </div>
</template>

<script>
import VHeader from './components/VHeader'
import Home from './views/Home'

export default {
  name: 'app',
  components:{
    VHeader,
    Home
  }
 
}
</script>

<style>

</style>
