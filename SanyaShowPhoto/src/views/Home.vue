<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data() {
    return {
      redirect_uri: encodeURI("http://wxsc.saselomo.com/activity/#/about"),
      appid: "wx55da418f69963f69"
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    getCod(){
      if(this.code){
        alert("错误")
      }else {
        window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx55da418f69963f69&redirect_uri=http%3A%2F%2Fwxsc.saselomo.com%2Factivity%2F%23%2Fabout&type=code&scope=snsapi_userinfo&state=123#wechat_redirect"
      }
    }
  },
  created() {
    console.log("aaa")
    this.getCod()
  },
}
</script>
