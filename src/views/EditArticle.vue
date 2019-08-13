<template>
  <div class="wrapper">
    <quillEditor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
    >
    </quillEditor>
     <el-button size="mini" round class="submit">发布</el-button>
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";


export default {
  components: {
    quillEditor
  },
  data() {
    return {
      content: 
      `<h2 > 请输入文章标题 </h2> 
      <br>
        <p>文章正文</p>`,
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"], // toggled buttons
            ['blockquote', 'code-block'],     //引用，代码块
  
            [({ list: "ordered" }, { list: "bullet" })], //列表
            [{ indent: "-1" }, { indent: "+1" }], // 缩进
            ["image", "video"]
         
          ]
        }
      }
    };
  },

 
};
</script>


<style lang="scss" scoped>
.wrapper {
  width: 55vw;
  margin: 10vh auto;
  
  .submit{
      position: relative;
      margin: 20px;
      left: 45vw;
  }
}
</style>
