<template>
  <div>
    <VHeader/>
    <ArticlesList 
    :articleList = "articleList"/>
    <selfIntroduce />
    <ArticlesTag
    :tagList = "tag" />
    <EditButton />
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import { FETCH_ARTICLE, FETCH_TAG } from '@/store/type/actions'
import VHeader from '@/components/VHeader'
import ArticlesList from "@/components/ArticlesList";
import ArticlesTag from "@/components/ArticlesTag";
import selfIntroduce from "@/components/SelfIntroduce";
import EditButton from "@/components/EditButton";
export default {
  components: {
    ArticlesList,
    ArticlesTag,
    selfIntroduce,
    EditButton,
    VHeader
  },
  mounted(){ 
      this.$store.dispatch(FETCH_ARTICLE),
      this.$store.dispatch(FETCH_TAG)

      
  },
  computed:{
      ...mapGetters(['articleList','tag'])
  }
};
</script>


<style lang = "sass" scoped>

</style>
