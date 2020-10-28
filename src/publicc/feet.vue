
<template>
    <div>
      <div id="box2">
      <ul>
        <li @click="lj1">雷击</li>
        <li @click="ss1">损伤</li>
        <li @click="fss1">腐蚀</li>
        <li @click="lw1">裂纹</li>
      </ul></div>
      <div>
        <div v-show="lj">
          <img src="../../static/images/雷击/雷击1.jpg">
          <img src="../../static/images/雷击/雷击2.jpg">
          <img src="../../static/images/雷击/雷击3.jpg">
          <img src="../../static/images/雷击/雷击4.png">
          <img src="../../static/images/雷击/雷击5.jpg">
        </div>
        <div v-show="ss">
          <img src="../../static/images/损伤/损伤1.jpg">
          <img src="../../static/images/损伤/损伤2.jpg">
          <img src="../../static/images/损伤/损伤3.jpg">
          <img src="../../static/images/损伤/损伤4.jpg">
          <img src="../../static/images/损伤/损伤5.jpg">
          <img src="../../static/images/损伤/损伤6.jpg">
          <img src="../../static/images/损伤/损伤7.jpg">
        </div>
        <div v-show="lw">
          <img src="../../static/images/裂纹/裂纹1.jpeg">
          <img src="../../static/images/裂纹/裂纹2.jpg">
        </div>
        <div v-show="ffs">
          <img src="../../static/images/腐蚀/腐蚀1.jpg">
        </div>
      </div>

    </div>
</template>

<script>
    export default {
      name: "feet",
      data() {
        return {
          lj: false,
          ss: false,
          lw: false,
          ffs: false,

        }
      },


      methods: {
        lj1() {
          this.lj = true;
          this.ss = false;
          this.lw = false;
          this.ffs = false
        },
        ss1() {
          this.lj = false;
          this.ss = true;
          this.lw = false;
          this.ffs = false
        },
        fss1() {
          this.lj = false;
          this.ss = false;
          this.lw = false;
          this.ffs = true
        },
        lw1() {
          this.lj = false;
          this.ss = false;
          this.lw = true;
          this.ffs = false
        },

      },

    }

</script>

<style scoped>
    #box2{
      width: 90%;
      height: 3em;
      margin: 0 auto;
    }
    li{
      width: 24%;
      height: 3em;
      float: left;
      border:1px black solid;
      border-radius: 50px;
      list-style: none;
      color: black;
      text-align: center;
      line-height: 3em;
    }
  img{
    width: 33%;

  }
</style>
