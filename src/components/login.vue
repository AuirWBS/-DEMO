<template>
  <div class="jk" :style="{height:topHeight}">
<div class="boddy" :style="{height:topHeight}" >
  <div class="bodyy" >
    <div class="logo"><img src="../../static/images/logo.png" alt=""></div>
    <div class="biaoyu">飞机智能检测平台</div>
    <div class="box3" ref="box3">
    <div class="box1"><div class="tu1"><img src="../../static/images/用户名.png" alt=""></div><input class="in1" :style="{height:topHeight1}" placeholder="用户名" type="text" v-model="name"></div>
    <div class="box1"><div class="tu2"><img src="../../static/images/密码.png" alt=""></div><input class="in1" :style="{height:topHeight1}" placeholder="密码" type="password" v-model="pass"></div>
    </div> <button @click="dl" class="btn">登录</button>
    <div class="box2"><div class="sp1"><input type="checkbox"><span >保存密码</span></div><span class="sp2">忘记密码</span></div>
  </div>
</div>
  </div>
</template>

<script>
    export default {
        name: "login",
      data(){
          return{
            windowHeight: "",
            topHeight: "",
            topHeight1: "",
            ha:'',
            all:'',
            name:'',
            pass:''
          }
      },
      mounted() {
        console.log(this.$refs.box3.clientHeight);
        this.topHeight1=this.$refs.box3.clientHeight/3.3+"px"
        this.all=window.innerHeight;
        this.windowHeight = window.innerHeight;  // 浏览器可见区域高度
        this.topHeight = (this.windowHeight)+ "px"; // 浏览器可见区域高度 - 600为背景图高度 / 2 = 平均上下高度
       this.ha=(this.windowHeight-800)/2 + "px"
        window.onresize = () => {
          return (() => {
            this.windowHeight = window.innerHeight;
            this.topHeight = (this.windowHeight)/2 + "px";
            this.ha=this.topHeight;
          })();
        };
      },
      watch: {
        topHeight(val) {
          this.topHeight = val;
        }
      },
      created() {
      },
      methods:{
          dl(){
            this.$router.push('/xiangqing');
          }
        }
    }
</script>
<style scoped>
  .bodyy{
    width: 25%;
    height: 50%;
    position: absolute;
    top:25%;
    left: 15%;
    border: 1px black solid;
    background: linear-gradient(122deg, #18B1FF 0%, #0081E4 100%);
    border-radius: 20px;
  }
  .biaoyu{
    width: 70%;
    height: 20%;
    font-size: 1.7rem;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 15%;
    margin-top: 10%;
    margin-left:20%;
  }
  .box1{

  }
  button{
    width: 20%;
    height: 8%;
    margin-right: 10%;
  }
  .btn:hover{
    background: #00A8FF;
    color: white;
  }
  .logo{
    margin-top:10%;
    margin-left:40%;
  }
  .box2{
    margin-left: 10%;
    margin-top: 2%;
    width: 80%;
  }
  .sp1{
    float: left;
  }
  .sp2{
    float: right;
  }
  .jk{
    width: 100%;
    height: 100%;
  }
  body{
    margin-top: -10.5px;
  }
  .boddy{
    width: 100%;
    background-image:url("../../static/images/背景.png");
    background-size: cover;
    opacity: 1;
    background-repeat: no-repeat;
  }
  .bodyy{
    background-color: rgba(255,255,255,0.6);
  }

  .box1{
    position: relative;
  }
.in1{
  width: 60%;
  margin-bottom: 10%;
  margin-left: 10%;
  background-color: #003762;
  color: #FFFFFF;
  padding-left: 20%;
  border-radius: 4px;
  border: 1px solid #0064D0;
  outline: none;
}
  img{
    width: 30%;
  }
  .tu1{
    width: 17px;
    height: 17px;
    background-image: url("../../static/images/用户名.png");
    background-position: top;
    position: absolute;
    top:15%;
    left: 20%;
  }
  .tu2{
    width: 17px;
    height: 17px;
    background-image: url("../../static/images/密码.png");
    background-position: top;
    position: absolute;
    top:15%;
    left: 20%;
  }
  .btn{
    width: 80%;
    color: #00A8FF;
    background: white;
    outline: none;
    border: none;
    border-radius:4px;
    margin:-6% 0 0 10% ;
  }
  .box3{
    margin-top: -10%;
  }
  span{
    color: white;
  }
</style>
