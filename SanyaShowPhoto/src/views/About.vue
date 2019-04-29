<template>
  <div class="about">
    <h1>{{res}}</h1>
    <h1>{{data}}</h1>
    <div>
      {{ params }}
    </div>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      code: this.$route.query.code,
      res: "",
      data: window.location.href,
      params: this.$router.param
    }
  },
  methods: {
    getBaseInfo(){
      let params = {
        code: this.code
      }
      this.axios.post("http://wxsc.saselomo.com/index.php?sanya-wxlogin",params).then(res => {
        alert(res)
        this.res = res
      })
    },
  },
  created() {
    this.getBaseInfo()
  },
}
</script>
