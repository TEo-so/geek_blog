<template>
  <div>
    <VHeader />
<transition
  :duration = '1000'
  enter-active-class="animated flash"
  leave-active-class="animated bounceOutRight"
>
    <router-view :articleList="articleList" />
</transition>
    <selfIntroduce />
    <ArticlesTag :tagList="tag" />
    <EditButton />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_ARTICLE, FETCH_TAG } from "@/store/type/actions";

import ArticlesTag from "@/components/ArticlesTag";
import selfIntroduce from "@/components/SelfIntroduce";
import EditButton from "@/components/EditButton";
import VHeader from "@/components/VHeader";
export default {
  components: {
    ArticlesTag,
    selfIntroduce,
    EditButton,
    VHeader
  },
  mounted() {
    this.$store.dispatch(FETCH_ARTICLE), this.$store.dispatch(FETCH_TAG);
  },
  computed: {
    ...mapGetters(["articleList", "tag"])
  }
};
</script>


<style lang = "sass" scoped>

</style>
