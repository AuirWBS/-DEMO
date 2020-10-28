<template>
  <div>
    <div class="headd">
      <headerr></headerr>
      <el-breadcrumb class="eb" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/xxqr' }">信息确认</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="boddy">

      <div id="box" @mouseenter="jinru" @mousemove="yidong" ref="op" >
        <img id="fj" src="static/images/sf2.png">
        <div id="leiji" ref="lei"></div>
        <div id="liewen" ref="lie"></div>
        <div id="sunshang" ref="sun"></div>
        <div id="fushi" ref="fu"></div>
          <div id="qiepian" ref="qp">
            <div id="qian"></div>
            <div id="hou"></div>
          </div>
      </div>
      <div class="man-container">
        <div class="el-card">
          <div class="el-card__header">
            <slot name="header">
              <p>文件上传</p>
            </slot>
          </div>
          <div class="el-card__body">
            <el-row style="margin: 10px 0 0 0">
              <span>上传目录：</span>
              <ul style="margin: 10px 0;display: inline-block;">
                <li>
                  <el-select v-model="theme" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </li>
              </ul>
            </el-row>
            <el-row style="margin: 0px">
              <ul style="margin: 0;display: inline-block;">
                <li>
                  <el-upload
                    class="upload"
                    ref="upload"
                    action="string"
                    :file-list="fileList"
                    :auto-upload="false"
                    :http-request="uploadFile"
                    :on-change="handleChange"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    multiple="multiple"
                  >
                    <el-button slot="trigger" size="small" type="primary" @click="delFile">选取文件</el-button>
                    <el-button
                      style="margin-left: 10px;"
                      size="small"
                      type="success"
                      @click="submitUpload"
                    >上传到服务器</el-button>
                  </el-upload>
                </li>
              </ul>
            </el-row>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
        <div v-show="lj2">
          <div class="dz">雷击</div>
          <img src="../../static/images/雷击/雷击1.jpg">
          <img src="../../static/images/雷击/雷击2.jpg">
          <img src="../../static/images/雷击/雷击3.jpg">
          <img src="../../static/images/雷击/雷击4.png">
          <img src="../../static/images/雷击/雷击5.jpg">
          <div class="kk">
            <el-button class="btn" style="margin-top: 12px;" @click="next">确认通过</el-button>
            <el-button class="btn" style="margin-top: 12px;" @click="notnext">不通过</el-button>
            <el-steps class="elsteps" :active="active" finish-status="success" simple style="margin-top: 20px">
              <el-step title="检验" ></el-step>
              <el-step title="审核" ></el-step>
              <el-step title="通过" ></el-step>
            </el-steps>
          </div>
        </div>
        <div v-show="ss2">
          <div class="dz">损伤</div>
          <img src="../../static/images/损伤/损伤1.jpg">
          <img src="../../static/images/损伤/损伤2.jpg">
          <img src="../../static/images/损伤/损伤3.jpg">
          <img src="../../static/images/损伤/损伤4.jpg">
          <img src="../../static/images/损伤/损伤5.jpg">
          <img src="../../static/images/损伤/损伤6.jpg">
          <img src="../../static/images/损伤/损伤7.jpg">
          <div class="kk">
            <el-button class="btn" style="margin-top: 12px;" @click="next">确认通过</el-button>
            <el-button class="btn" style="margin-top: 12px;" @click="notnext">不通过</el-button>
            <el-steps class="elsteps" :active="active" finish-status="success" simple style="margin-top: 20px">
              <el-step title="检验" ></el-step>
              <el-step title="审核" ></el-step>
              <el-step title="通过" ></el-step>
            </el-steps>
          </div>
        </div>
        <div v-show="lw2">
          <div class="dz">裂纹</div>
          <img src="../../static/images/裂纹/裂纹1.jpeg">
          <img src="../../static/images/裂纹/裂纹2.jpg">
          <div class="kk">
          <el-button class="btn" style="margin-top: 12px;" @click="next">确认通过</el-button>
          <el-button class="btn" style="margin-top: 12px;" @click="notnext">不通过</el-button>
          <el-steps class="elsteps" :active="active" finish-status="success" simple style="margin-top: 20px">
            <el-step title="检验" ></el-step>
            <el-step title="审核 " ></el-step>
            <el-step title="通过" ></el-step>
          </el-steps>
          </div>
        </div>
        <div v-show="ffs2">
          <div class="dz">腐蚀</div>
          <img src="../../static/images/腐蚀/腐蚀1.jpg">
          <div class="kk">
            <el-button class="btn" style="margin-top: 12px;" @click="next">确认通过</el-button>
            <el-button class="btn" style="margin-top: 12px;" @click="notnext">不通过</el-button>
            <el-steps class="elsteps" :active="active" finish-status="success" simple style="margin-top: 20px">
              <el-step title="检验" ></el-step>
              <el-step title="审核 " ></el-step>
              <el-step title="通过" ></el-step>
            </el-steps>
          </div>
        </div>
    </div>

  </div>
</template>
<script>
  import axios from "axios";
  var that = null;
  import headerr from "../publicc/headerr";
    export default {
      name: "xxqr",
      data() {
        return {
          active: 0,
          haha:0,
          lj2:false,
          ss2:false,
          lw2:false,
          ffs2:false,

          user: {},
          fileList: [],
          multiple: true,
          formData: "",
          options: [
            {
              value: "工作报告",
              label: "工作报告"
            },
          ],
          theme: ""

        };
      },
      components: {
        headerr,
      },
      methods: {
        next() {
          if (this.active++ > 2) this.active = 0;
        },
        notnext() {
          this.active = 0;
        },
        jinru(e) {
          this.hzyd(e)
          // var lol=e.clientX;
          // var lpl=(this.$refs.qp.clientWidth)/2;
          // this.$refs.qp.style.left=(lol-lpl)+"px";
        },
        yidong(e) {
         this.hzyd(e)
          if(e.clientX>=this.$refs.lei.offsetLeft+8&&e.clientX<=this.$refs.lei.offsetLeft+this.$refs.lei.offsetWidth+8){
            this.lj2=true;
            this.ss2=false;
            this.lw2=false;
            this.ffs2=false;
            this.active = 0;
          }else if(e.clientX>=this.$refs.lie.offsetLeft+8&&e.clientX<=this.$refs.lie.offsetLeft+this.$refs.lie.offsetWidth+8){
            this.lj2=false;
            this.ss2=false;
            this.lw2=true;
            this.ffs2=false;
            this.active = 0;
          }else if(e.clientX>=this.$refs.sun.offsetLeft+8&&e.clientX<=this.$refs.sun.offsetLeft+this.$refs.sun.offsetWidth+8){
            this.lj2=false;
            this.ss2=true;
            this.lw2=false;
            this.ffs2=false;
            this.active = 0;
          }else if(e.clientX>=this.$refs.fu.offsetLeft+8&&e.clientX<=this.$refs.fu.offsetLeft+this.$refs.fu.offsetWidth+8){
            this.lj2=false;
            this.ss2=false;
            this.lw2=false;
            this.ffs2=true;
            this.active = 0;
          }else{
            this.lj2=false;
            this.ss2=false;
            this.lw2=false;
            this.ffs2=false;
            this.active = 0;
          }
        },
        hzyd(e){
          // console.log(e.clientX);
          // console.log(this.$refs.qp.clientWidth);
          // console.log(this.$refs.qp.clientWidth/2);
          if(e.clientX>=this.$refs.qp.clientWidth/2&&e.clientX<=(this.$refs.op.clientWidth-(this.$refs.qp.clientWidth/2))){
            var lol=e.clientX;
            var lpl=(this.$refs.qp.clientWidth)/2;
            this.$refs.qp.style.left=(lol-lpl-8)+"px";
          }else if(e.clientX<this.$refs.qp.clientWidth/2){
            this.$refs.qp.style.left=0+"px";
          }else if(e.clientX<=this.$refs.op.clientWidth-this.$refs.qp.clientWidth/2){
            this.$refs.qp.style.left=(this.$refs.op.clientWidth-this.$refs.qp.clientWidth/2)+"px";
          }
        },
        delFile() {
          this.fileList = [];
        },
        handleChange(file, fileList) {
          this.fileList = fileList;
        },
        uploadFile(file) {
          this.formData.append("file", file.file);
        },
        handleRemove(file, fileList) {
          console.log(file, fileList);
        },
        handlePreview(file) {
          console.log(file);
        },
        submitUpload() {
          let formData = new FormData();
          formData.append("theme", this.theme);
          formData.append("file", this.fileList[0].raw);

          axios({
            url: this.HOST + "/", //换成自己的后台接口
            method: "post",
            data: formData,
            headers: {
              "Content-Type": "multipart/form-data;charset=utf-8"
            }
          })
            .then(res => {
              if (res.data.success) {
                // alert("导入成功!");
              } else {
                alert(res.data.message + "," + res.data.data);
              }
            })
            .catch(err => {
              console.log(err);
            });
        }


      },
      mounted() {
        that = this;
        let user = window.localStorage.getItem("access-user");
        if (user) {
          user = JSON.parse(user);
          this.user = user;
        }
      },
    }
</script>

<style scoped>
  /**{*/
  /*  margin: 0;*/
  /*  padding: 0;*/
  /*  font-size: 16px;*/
  /*}*/
  .eb{
    margin-top: 1em;
  }
  #box{
    width: 100%;
    height: 38em;
    background-color: grey;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    transition: 1s linear;
    position: relative;
  }
  #qiepian{
    width: 10%;
    height: 70%;
    position: absolute;
    top:3%;
    left: 0;
    transform:  translateZ(36em) rotateX(30deg) rotateY(40deg);
  }
  #qian{
    float: right;
    width: 50%;
    height: 36em;

    z-index: 2;
    background-color: black;
    opacity: 0.5;
  }
  #hou{
    float: left;
    width: 50%;
    height: 36em;
    background-color: black;
    opacity: 0.4;


  }
  #leiji{
    background-color: yellow;
    width: 4%;
    height: 3%;
    margin-top: -25%;
    margin-left: 55%;
    position: absolute;
    z-index: 2;
    /*top:17%;*/
    /*left: 10%;*/
  }
  #liewen{
    background-color: red;
    width: 4%;
    height: 3%;
    margin-top: -30%;
    margin-left: 28%;
    position: absolute;
    z-index: 2;
  }
  #sunshang{
    background-color: blue;
    width: 4%;
    height: 3%;
    margin-top: -36%;
    margin-left: 6%;
    position: absolute;
    z-index: 2;
  }
  #fushi{
    background-color: purple;
    width: 4%;
    height: 3%;
    margin-top: -20%;
    margin-left: 60%;
    position: absolute;
    z-index: 2;
  }
  .footer{
    width: 100%;
    height: 98em;

  }
  img{
    width: 33%;
  }
  #fj{
    width: 100%;
  }
  .elsteps{
    height: 3em;
  }
  .dz{
    font-size: 45px;
    display: block;
    text-align: center;
    width: 100%;
  }
  .btn{
    width: 10%;
    line-height: 3em;
  }
  .kk{
    display: block;
  }
  .man-container{
    display: block;
  }
</style>
