<template>
<div>
<div id="head">
  <div class="left">
    <div class="logo1"><div class="ll"></div><span class="spen">商用飞机智能检测平台</span></div>
  </div>

  <div class="right2">
    <div class="xx">张三</div>
    <div class="xx">
      <el-row class="demo-avatar demo-basic">
        <el-col :span="12">
          <div class="demo-basic--circle">
            <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
            <div class="block" v-for="size in sizeList" :key="size">
              <el-avatar :size="size" :src="circleUrl"></el-avatar>
            </div>
          </div>
        </el-col>
      </el-row>


    </div>
  </div>
</div>
</div>
</template>

<script>
    export default {
        name: "headerr",
      data(){
          return{
            sousuo:'',
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
            // btt:"消息"
          }
      },
      methods: {

      },
      created() {


      },
      components:{

      }
    }
</script>

<style scoped>
    .spen{
    }
    #head{
      width: 100%;
      height: 6rem;
      background-color:#002349;
}
    .left{
      width: 50%;
      float: left;
    }
    .right2{
      float: right;
      width: 50%;
      height: 100%;
      margin-top: 1%;
    }
li{
  list-style: none;

}
input{
border-radius: 20px;
  border: none;
  width: 73%;
  height: 1.5rem;
  outline: none;
  padding-left: 5%;

}
.ss{
  float: left;
  margin-top: 3%;
}
.xx{
  float: right;
}
    .xx:first-child{

      margin: 2% 2%;
    }
  .lr{
    float: right;
    margin:3% 30% 0 0;

  }
  .ll{
    width: 52px;
    height: 32px;
    background-image:url("../../static/images/logo2.png") ;
    background-size:cover ;
    margin: 5% 0 0 15%;
    float: left;
  }
  img{

    width: 50%;
  }
  .logo1{
    width: 45%;
    height: 32px;
  }
  .spen{
    float: right;
    line-height: 32px;
    font-size:28px;
    margin-top:5% ;
  }
</style>
