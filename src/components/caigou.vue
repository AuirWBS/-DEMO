<template>
  <div>
    <div class="header">
      <headerr></headerr>
    </div>
    <div class="bodyy">
      <leftt></leftt>
    </div>
    <div class="footer">

    </div>
  </div>
</template>

<script>
  import leftt from "../publicc/leftt";
  import headerr from "../publicc/headerr";
  export default {
    name: "caigou",
    components:{
      leftt,headerr
    }
  }
</script>

<style scoped>

</style>
