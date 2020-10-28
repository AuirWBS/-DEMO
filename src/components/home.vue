<template>
 <div>
   <div class="header">
     <headerr></headerr>
   </div>
   <div class="bodyy">
     <leftt></leftt>
   </div>
   <div class="footer">
     <div class="xiao">
       <div class="xiaoshang">
         <div class="xsz">
         <i class="el-icon-s-tools"></i></div>
         <div class="xsy">
         <i class="el-icon-info"></i>
         <i class="el-icon-s-operation"></i></div>
       </div>
       <div class="xiaoxia">
         <span class="sp1">修理服务</span>
         <span class="sp2">提供维修服务资源</span>
         <i class="ji el-icon-delete-solid"></i>
       </div>
     </div>
     <div class="xiao">
       <div class="xiaoshang">
         <div class="xsz">
           <i class="el-icon-s-tools"></i></div>
         <div class="xsy">
           <i class="el-icon-info"></i>
           <i class="el-icon-s-operation"></i></div>
       </div>
       <div class="xiaoxia">
         <span class="sp1">航材交易共享</span>
         <span class="sp2">提供航材交易和共享服务</span>
         <i class="ji el-icon-delete-solid"></i>
       </div>
     </div>
     <div class="xiao">
       <div class="xiaoshang">
         <div class="xsz">
           <i class="el-icon-s-tools"></i></div>
         <div class="xsy">
           <i class="el-icon-info"></i>
           <i class="el-icon-s-operation"></i></div>
       </div>
       <div class="xiaoxia">
         <span class="sp1">客户改装</span>
         <span class="sp2">提供客户修改SB服务</span>
         <i class="ji el-icon-delete-solid"></i>
       </div>
     </div>
     <div class="xiao">
       <div class="xiaoshang">
         <div class="xsz">
           <i class="el-icon-s-tools"></i></div>
         <div class="xsy">
           <i class="el-icon-info"></i>
           <i class="el-icon-s-operation"></i></div>
       </div>
       <div class="xiaoxia">
         <span class="sp1">在线监管</span>
         <span class="sp2">提供质量人员授权预检查服务</span>
         <i class="ji el-icon-delete-solid"></i>
       </div>
     </div>
     <div class="xiao">
       <div class="xiaoshang">
         <div class="xsz">
           <i class="el-icon-s-tools"></i></div>
         <div class="xsy">
           <i class="el-icon-info"></i>
           <i class="el-icon-s-operation"></i></div>
       </div>
       <div class="xiaoxia">
         <span class="sp1">电子服务目录</span>
         <span class="sp2">提供电子化客户服务目录</span>
         <i class="ji el-icon-delete-solid"></i>
       </div>
     </div>
     <div class="xiao">
       <div class="xiaoshang">
         <div class="xsz">
           <i class="el-icon-s-tools"></i></div>
         <div class="xsy">
           <i class="el-icon-info"></i>
           <i class="el-icon-s-operation"></i></div>
       </div>
       <div class="xiaoxia">
         <span class="sp1">运营指标分析</span>
         <span class="sp2">提供顶层视图和看板管理</span>
         <i class="ji el-icon-delete-solid"></i>
       </div>
     </div>
     <div class="xiao">
       <div class="xiaoshang">
         <div class="xsz">
           <i class="el-icon-s-tools"></i></div>
         <div class="xsy">
           <i class="el-icon-info"></i>
           <i class="el-icon-s-operation"></i></div>
       </div>
       <div class="xiaoxia">
         <span class="sp1">在线监管</span>
         <span class="sp2">提供DIMR符合性挂签</span>
         <i class="ji el-icon-delete-solid"></i>
       </div>
     </div>

   </div>
 </div>
</template>
<script>
  import headerr from "../publicc/headerr";
  import leftt from "../publicc/leftt"
    export default {
        name: "home",
        data(){
          return{

          }
        },
      methods:{

      },
      components:{
          headerr,leftt
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
.footer{
  width: 84%;
  height: 60%;
  position: absolute;
  top:13rem;
  left: 16%;

}
.header{
  width: 100%;
  height: 18%;
  background-color: rgba(0,0,0,0.1);


}
  .xiao{
    width: 15%;
    height: 30%;
    border: 1px black solid;
    float: left;
    margin: 0 0 2% 3%;
    position: relative;
    overflow: hidden;
  }
  .xiaoshang{
    background-color: grey;
    width: 100%;
    height: 20%;
  }
  .xiaoshang i{

  }
  .xiao span{
    display: block;
  }
  .xsz{
    float: left;
  }
  .xsy{
    float: right;
  }
  .sp1{
    font-size: 1.5rem;
    font-weight:bold;
    margin: 5% 0 0 5%;
  }
  .sp2{
    font-size: 0.7rem;
    margin: 5% 0 0 5%;
  }
  .ji{
    position: absolute;
    bottom: 5%;
    right: 5%;
  }
</style>
