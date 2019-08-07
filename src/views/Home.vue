<template>
<div>
   <ArticlesList/>
   <selfIntroduce/>
   <ArticlesTag/>
   <EditButton/>
   
</div>   
</template>

<script>
import ArticlesList from '@/components/ArticlesList'
import ArticlesTag from '@/components/ArticlesTag'
import selfIntroduce from '@/components/SelfIntroduce'
import EditButton from '@/components/EditButton'

export default {
    components:{
        ArticlesList,
        ArticlesTag,
        selfIntroduce,
        EditButton
        

    }
}
</script>


<style lang = "sass" scoped>

</style>
