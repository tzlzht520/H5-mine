<template>
  <div class="about">
    <h1>{{res}}</h1>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      code: this.$route.param.code,
      res: ""
    }
  },
  methods: {
    getBaseInfo(){
      let params = {
        code: this.code
      }
      this.axios.post("http://wxsc.saselomo.com/index.php?sanya-wxlogin",params).then(res => {
        this.res = res
      })
    }
  },
}
</script>
