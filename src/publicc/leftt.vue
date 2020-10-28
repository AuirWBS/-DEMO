<template>
  <div>
    <div class="left1">

  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="kk">

<!--      <el-menu-item-group>-->
<!--        <span slot="title">分组一</span>-->
<!--        <el-menu-item index="1-1">选项1</el-menu-item>-->
<!--        <el-menu-item index="1-2">选项2</el-menu-item>-->
<!--      </el-menu-item-group>-->
<!--      <el-menu-item-group title="分组2">-->
<!--        <el-menu-item index="1-3">选项3</el-menu-item>-->
<!--      </el-menu-item-group>-->
<!--      <el-submenu index="1-4">-->
<!--        <span slot="title">选项4</span>-->
<!--        <el-menu-item index="1-4-1">选项1</el-menu-item>-->
<!--      </el-submenu>-->
    <button class="btn1" @click="dj" v-if="kk"><i class="el-icon-caret-right"></i></button>
    <button class="btn1" @click="dj1" v-if="kk1" ><i class="el-icon-caret-left"></i></button>
    <el-menu-item index="1">
      <i class="el-icon-s-home"></i>
      <span @click="wd" slot="title">我的页面</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-search"></i>
      <span slot="title">搜索</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-s-grid"></i>
      <span slot="title">应用</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-receiving"></i>
      <span slot="title">下载</span>
    </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-question"></i>
        <span slot="title">帮助/联系</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-link"></i>
        <span slot="title">客户服务门户</span>
      </el-menu-item>
  </el-menu>
    </div>
    <div class="right1" ref="rig">

      <div class="rleft">
        <slot>{{bt1}}</slot>
      </div>
      <ul class="u1" v-if="u2">
        <li>
          <i class="el-icon-edit"></i>
          <span @click="cg">采购订单与服务</span>
        </li>
        <li>
          <i class="el-icon-document-copy"></i>
          <span @click="xw">新闻</span>
        </li>
        <li>
          <i class="el-icon-chat-line-square"></i>
          <span @click="xx">消息</span>
        </li>
        <li>
          <i class="el-icon-message-solid"></i>
          <span @click="tz">通知</span>
        </li>

      </ul>
      <div class="shouqi">
        <i @click="shou" class="el-icon-s-operation"></i>
      </div>
    </div>
    <div class="lx" v-if="kk2">
      <div class="xinxi">各种信息等等</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "leftt",
        data() {
          return {
            isCollapse: true,
            kg:true,
            u2:true,
            bt:'',
            bt1:'',
            kk:true,
            kk1:false,
            kk2:false
          };
        },
      created() {

            this.bt1=JSON.parse(localStorage.getItem('bt'));

      },
      methods: {
          handleOpen(key, keyPath) {


          },
          handleClose(key, keyPath) {


          },
          wd(){
            console.log(123);
          },
          dj(){
            this.handleOpen();
            this.kk=false;
            this.kk1=true
            console.log(window.innerWidth);
            this.$refs.rig.style.width=window.innerWidth*0.84+"px";
            var timer=setTimeout(()=>{
              this.kk2=true;
              clearTimeout(timer);
            },300)

          },
        dj1(){
          this.handleClose();
          this.kk1=false;
          this.kk=true;
          this.kk2=false;
          var timer=setTimeout(()=>{
            this.$refs.rig.style.width=window.innerWidth*0.94+"px";
            clearTimeout(timer);
          },200)
        },
          shou(){
            if(this.u2==true){
              this.u2=false;
            }else{
              this.u2=true;
            }
          },
          xw(e){
            this.bt=e.path[0].innerText;
            localStorage.setItem('bt',JSON.stringify(this.bt));
            this.$router.push('/xinwen');
          },
          cg(e){
            this.bt=e.path[0].innerText;
            localStorage.setItem('bt',JSON.stringify(this.bt));
            this.$router.push('/caigou');
          },
          xx(e){
            this.bt=e.path[0].innerText;
            localStorage.setItem('bt',JSON.stringify(this.bt));
            this.$router.push('/xiaoxi');

          },
          tz(e){
            this.bt=e.path[0].innerText;
            localStorage.setItem('bt',JSON.stringify(this.bt));
            this.$router.push('/tongzhi');
          }


        },



    }
</script>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 15%;
    min-height: 300px;
    position: relative;
  }
  .el-menu-vertical-demo{
    background-color: rgba(255,0,0,0.3);
  }
  .u1{
    float: right;
    margin-right: 3rem;
    margin-top: 1rem;
  }
  .u1 li{
    list-style: none;
    float: left;
    margin-right: 1rem;
  }
  .left1{

  }
  .rleft{
    float: left;
    margin:2% 0 0 2% ;
  }
  .right1{
    position: absolute;
    top:6.5rem;
    right: 0;
    margin-right: 0.8rem;
    width: 94%;
    height: 10%;
    background-color: rgba(255,0,0,0.3);
  }
  .shouqi{
    float: right;
    position: absolute;
    top:20%;
    right: 0;
    margin-right: 2rem;

  }
  .btn1{
    width: 0.8rem;
    height: 30%;
    background-color: rgba(0,0,0,0.4);
    outline: none;
    border: none;
    position: absolute;
    top:30%;
    right: 0;
    z-index: 2;
  }
  .btn1 i{
    position: absolute;
    top: 45%;
    left: 0;
  }
  .lx{
    width: 15%;
    height: 40%;
    border-right: 1px #DCDFE6 solid;
    background-color: rgba(255,255,255,0);
    position: absolute;
    z-index: 2;
  }
  .xinxi{
    margin: 20% auto;
    text-align: center;
  }
</style>
