<template>
  <div class="hello">
    <div>{{msg}}</div>
    <ul>
      <li v-for="feature in features" :key='feature'>{{feature}}</li>
    </ul>
    <div>{{count}}</div>
    <button @click='addFeature("123")'>ts单击</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from "vue-property-decorator";
import axios from "axios";
@Component
export default class HelloWorld extends Vue {
  async mounted() {
    console.log("组件已挂载");
    let res = await axios.get<string[]>("/api/getFeature");
    this.features = res.data;
  }

  features: string[] = ["ES6 Class", "vue-typescript", "定义类属性"]; // 属性相当于data选项
  // 方法直接写
  addFeature(feature: string) {
    this.features.push(feature); //直接操作属性
  }
  get count() {
    return this.features.length;
  }

  // 装饰器 - 一种设计模式
  // @Prop声明组件属性
  @Prop({ type: String, required: true })
  private msg!: string; // !: 明确赋值的断言,这里已经@Prop了，表示msg属性是从父组件传递过来的

  // @Emit 触发事件
  @Emit() //如果参数不写，默认就是该方法名，使用 emit-func=''
  private emitFunc() {}

  @Watch("msg", { deep: true })
  onMsgChange(val:string, oldval:string) {
    console.log(val, oldval);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
