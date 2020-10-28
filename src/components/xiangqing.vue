<template>
  <div class="nb1" :style="{height:topHeight}">
    <div class="tankuang" :style="{height:topHeight}" v-if="tk" ><div class="tpbox" ><img class="img1" :src="tplj" alt=""><div class="tpbox1"><div class="jcsj" style="width:50%;display: inline-block">检测时间:{{shijian}}</div><button class="btn1" style="color: white;background-color: rgba(0,160,233,1);border:none;outline:none;float: right;width: 20%;
height: 1%" @click="tpgb">关闭</button></div></div></div>
    <div class="tankuang1" :style="{height:topHeight}" v-if="tk1"><div style="margin: 0 auto;margin-top: 25% " class="shanc"><div style="color:white;margin: 10% 0 0 10%">要删除{{shijian1}}的信息吗？</div> <br> <div style="margin: 10% auto;margin-left:20%"><div class="xuan xuan1"  @click="qr">确认</div><div class="xuan xuan2"  @click="qx">取消</div></div> </div></div>
    <div class="nb">
      <div>
        <headerr></headerr>
      </div>
      <div class="left3">
      <div class="ls">
        <div class="lr">
          <div style="position: relative;width: 80%;height:1.5rem"><input class="sct" v-model="in1" type="text" placeholder="飞机类型" @focus="tan" ><span class="spp">▼</span>
          <div v-if="btnbiao" class="btnmen">
            <button class="btnn" @click="dianji2(item.value)" v-for="(item,index) in options" :key="index">{{item.value}}</button>
          </div>
<!--          <div><select class="sct" v-model="value" @input="gaibian" name="飞机类型"><span class="spp">飞机类型</span>-->
<!--            <option value="0" disabled>飞机类型</option>-->
<!--            <option v-for="item in options" value="1" :key="item.value"  :label="item.label" :value="item.value"> </option>-->、
<!--          </select>-->
          </div>
<!--          机型:<template>-->
<!--          <el-select style="background-color: black" v-model="value" @input="gaibian" size="mini" clearable placeholder="请选择">-->
<!--            <el-option-->
<!--              v-for="item in options"-->
<!--              :key="item.value"-->
<!--              :label="item.label"-->
<!--              :value="item.value">-->
<!--            </el-option>-->
<!--          </el-select>-->
<!--        </template>-->
          <div class="xiaotu"></div>
        </div >
        <input class="in2" type="text" placeholder="要查询的架次号"><span class="el-icon-search"></span>
      </div>
        <div class="lx">
          <ul class="u2">
            <li v-for="(item,index) in list" @click="dianji(item.id)" :key="index">{{item.name}}</li>
          </ul>
        </div>
      </div>
      <div class="right3" v-if="r3">
        <div  class="rs" v-if="shipin">
          <button @click="fanhui" class="btnnn"><=回到时间列表</button>
          <video-player style="width: 98%;margin-left:1%"
            class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
          ></video-player>
          <div><div>检测时间:{{shijian}}</div>
<!--            <div>类型:{{leixing}}</div>-->
            <div></div>
          </div>
        </div>
        <div class="rz" v-if="liebiao">

          <div class="bg">
            <table  style="border-collapse: collapse;width: 98%">
              <tr class="tr1">
                <td class="td1" style="width:25%">时间</td>
                <td class="td1" style="width:50%">类型</td>
                <td class="td1" style="width:25%">操作</td>
              </tr>
<!--              <tr v-for="(item,index) in list2" @click="dianji1(item.id,item.date,item.bug)" :key="index">-->
              <tr v-for="(item,index) in list2" :key="index">
              <td >{{item.date}}</td>
              <td><div class="boxx k" ref="ko" >全部缺陷:{{item.total}}</div><div class="k k1">|</div><div class="boxx1 k" ref="ko1" >裂纹数量:{{item.crackCount}}</div><div class="boxx2 k" ref="ko2">损伤数量:{{item.damageCount}}</div><div class="boxx3 k" ref="ko3" >腐蚀数量:{{item.corrosionCount}}</div><div class="boxx4 k" ref="ko4" >雷击数量:{{item.lightCount}}</div></td>
                <td><span class="el-icon-view" @click="dianji1(item.id,item.date)"></span><span @click="shanchu(item.id,item.date)" class="el-icon-delete-solid"></span></td>
            </tr>
            </table>
          </div>
          <div class="block1">
          <div  :key="index" class="block">
            <el-pagination  background
              @current-change="handleCurrentChange"
              :current-page="1"
              :page-sizes="[20]"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total">
            </el-pagination>
          </div>
          </div>
        </div>
        <div class="rx1" v-if="shipin" ref="rxx">
          <div class="box2" ref="quanbu"  ><div class="box3 tu"></div>全部:{{all}}张  <div class="box4" v-if="kg1" @click="tu11(1)">▼</div><div v-else="kg1" class="box5" @click="tu22(1)">▲</div>
            <div class="rx" v-if="tu1" ref="quanbu1">
<!--            <img v-for="(item,index) in list3" :key="index"  :src="item">-->
              <img @click="tpdj" v-for="(item,index) in listzong" :key="index" :src="item" alt="">
          </div></div>
          <div  class="box2" ref="liewen"><div class="box3 tu1"></div>裂纹:{{crack}}张 <div class="box4" v-if="kg2" @click="tu11(2)">▼</div><div v-else="kg2" class="box5" @click="tu22(2)">▲</div>
            <div class="rx" v-if="tu2">
              <!--            <img v-for="(item,index) in list3" :key="index"  :src="item">-->
              <img @click="tpdj" v-for="(item,index) in listliewen" :key="index" :src="item" alt="">
            </div></div>
          <div   class="box2" ref="sunshang"><div class="box3 tu2"></div>损伤:{{damage}}张 <div class="box4" v-if="kg3" @click="tu11(3)">▼</div><div v-else="kg3" class="box5" @click="tu22(3)">▲</div>
            <div class="rx" v-if="tu3">
              <!--            <img v-for="(item,index) in list3" :key="index"  :src="item">-->
<!--              <img @click="tpdj" v-for="(item,index)in listsunshang" :key="index" :src=item alt="">-->
              <img @click="tpdj" v-for="(item,index) in listsunshang" :key="index" :src="item" alt="">

            </div></div>
          <div  class="box2" ref="fushi"><div class="box3 tu3"></div>腐蚀:{{corrosion}}张 <div class="box4" v-if="kg4" @click="tu11(4)">▼</div><div class="box5" v-else="kg4" @click="tu22(4)">▲</div>
            <div class="rx" v-if="tu4">
              <!--            <img v-for="(item,index) in list3" :key="index"  :src="item">-->
<!--              <img @click="tpdj" v-for="(item,index)in listfushi" :key="index" :src=item alt="">-->
              <img @click="tpdj" v-for="(item,index) in listfushi" :key="index" :src="item" alt="">
            </div></div>
          <div class="box2" ref="leiji"><div class="box3 tu4"></div>雷击:{{light}}张 <div class="box4" v-if="kg5" @click="tu11(5)">▼</div><div class="box5" v-else="kg5" @click="tu22(5)">▲</div>
            <div class="rx" v-if="tu5">
              <!--            <img v-for="(item,index) in list3" :key="index"  :src="item">-->
<!--              <img @click="tpdj" v-for="(item,index)in listleiji" :key="index" :src=item alt="">-->
              <img @click="tpdj" v-for="(item,index) in listleiji" :key="index" :src="item" alt="">
            </div></div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
  import axios from "axios";
  import headerr from "../publicc/headerr";
    export default {
        name: "xiangqing",
      data(){
          return {
            hao:'',
            tk1:false,
            btnbiao:false,

            r3:false,
            pagesize:100,
            kg1:false,
            kg2:true,
            kg3:true,
            kg4:true,
            kg5:true,
            tplj:"",
            list: [],
            list2: [],
            list3:[],
            listzong: [],
            listleiji: [],
            listliewen: [],
            listfushi: [],
            listsunshang: [],

            total:"",

            all:'',
            damage:'',
            corrosion:'',
            crack:'',
            light:'',

            topHeight:"",

            gao:"",
            gao1:'',
            url:'',
            tk:false,
            url1:[],
            zt: '',
            jh: '',
            sj: '',

            liebiaohao:'',

            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4,
            val:1,

            tu4:false,
            tu2:false,
            tu3:false,
            tu1:true,
            tu5:false,
            scroll:'',
            shijian:'',
            shijian1:'',
            leixing:'',
            shipin:false,
            liebiao:true,
            playerOptions: {
              height: 400,
              playbackRates: [0.5, 1.0, 1.5, 2.0], // 播放速度
              autoplay: false, // 如果true,浏览器准备好时开始回放。
              muted: false, // 默认情况下将会消除任何音频。
              loop: false, // 导致视频一结束就重新开始。
              preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
              language: "zh-CN",
              aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
              fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
              sources: [
                {
                  type: "video/mp4",// 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
                  codecs:'h264',
                  src:'',
                }
              ],
              poster: "", // 你的封面地址
              // width: document.documentElement.clientWidth, //播放器宽度
              notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
              controlBar: {
                timeDivider: true,
                durationDisplay: true,
                remainingTimeDisplay: false,
                fullscreenToggle: true // 全屏按钮
              }
            },
            options: [{
              index:0,
              value: 'ARJ21'
            }, {
              index:1,
              value: 'C919'
            }, {
              index:2,
              value: 'CR929'
            }],

            in1:'',
          }
          },
      created() {
          this.getjiahao();
        var jk=localStorage.getItem('jx');
        if(jk!=''){
          this.in1=jk;
        }

          },
      methods: {
          qr(){
            this.hao=this.liebiaohao;
            this.tk1=false;
            this.deleteData();
            var timer=setTimeout(()=>{
              this.getjilu();
            },300)


          },
        qx(){
            this.tk1=false;
        },
          dianji2(x){
            localStorage.setItem('jx',x);
            this.in1=x;
            this.btnbiao=false;
          },
          tan(){
            this.btnbiao=true;
          },
          display(x){
            if(x!=0){
              this.display=true;
            }
          },
        shanchu(x,y) {
          this.liebiaohao=x;
          this.tk1=true;
          this.shijian1=y;
        },
        handleCurrentChange(val) {
            this.val=val;
          this.getjilu();
        },
          tpgb(){
          this.tk=false;
          },
          tpdj(e){

            this.tplj=e.path[0].currentSrc;
            this.tk=true;
          },
          tu11(x){
            if(x==1){
              this.tu1=true;
              this.$refs.quanbu.style.height=(this.gao+this.gao1)+"px";
              this.$refs.sunshang.style.height=this.gao+"px";
              this.$refs.fushi.style.height=this.gao+"px";
              this.$refs.leiji.style.height=this.gao+"px";
              this.$refs.liewen.style.height=this.gao+"px";
              this.kg1=false;
              this.kg2=true;
              this.kg3=true;
              this.kg4=true;
              this.kg5=true;
              this.tu2=false;
              this.tu3=false;
              this.tu4=false;
              this.tu5=false;
            }else if(x==2){
              this.tu1=false;
              this.tu2=true;
              this.$refs.liewen.style.height=(this.gao+this.gao1)+"px";
              this.$refs.sunshang.style.height=this.gao+"px";
              this.$refs.fushi.style.height=this.gao+"px";
              this.$refs.leiji.style.height=this.gao+"px";
              this.$refs.quanbu.style.height=this.gao+"px";
              this.kg1=true;
              this.kg2=false;
              this.kg3=true;
              this.kg4=true;
              this.kg5=true;
              this.tu3=false;
              this.tu4=false;
              this.tu5=false;
            }else if(x==3){
              this.tu1=false;
              this.tu2=false;
              this.tu3=true;
              this.$refs.sunshang.style.height=(this.gao+this.gao1)+"px";
              this.$refs.fushi.style.height=this.gao+"px";
              this.$refs.leiji.style.height=this.gao+"px";
              this.$refs.liewen.style.height=this.gao+"px";
              this.$refs.quanbu.style.height=this.gao+"px";
              this.kg1=true;
              this.kg2=true;
              this.kg3=false;
              this.kg4=true;
              this.kg5=true;
              this.tu4=false;
              this.tu5=false;
            }else if(x==4){
              this.tu1=false;
              this.tu2=false;
              this.tu3=false;
              this.tu4=true;
              this.$refs.fushi.style.height=(this.gao+this.gao1)+"px";
              this.$refs.sunshang.style.height=this.gao+"px";
              this.$refs.leiji.style.height=this.gao+"px";
              this.$refs.liewen.style.height=this.gao+"px";
              this.$refs.quanbu.style.height=this.gao+"px";
              this.kg1=true;
              this.kg2=true;
              this.kg3=true;
              this.kg4=false;
              this.kg5=true;
              this.tu5=false;
            }else if(x==5){
              this.tu1=false;
              this.tu2=false;
              this.tu3=false;
              this.tu4=false;
              this.tu5=true;
              this.$refs.leiji.style.height=(this.gao+this.gao1)+"px";
              this.$refs.sunshang.style.height=this.gao+"px";
              this.$refs.fushi.style.height=this.gao+"px";
              this.$refs.liewen.style.height=this.gao+"px";
              this.$refs.quanbu.style.height=this.gao+"px";
              this.kg1=true;
              this.kg2=true;
              this.kg3=true;
              this.kg4=true;
              this.kg5=false;
            }
          },
        tu22(y){
          if(y==1){
            this.tu1=false;
            this.$refs.quanbu.style.height=this.gao+"px";
            console.log(this.$refs.quanbu.style.height);
            this.kg1=true;
            this.kg2=true;
            this.kg3=true;
            this.kg4=true;
            this.kg5=true;
            this.tu2=false;
            this.tu3=false;
            this.tu4=false;
            this.tu5=false;
          }else if(y==2){
            this.tu1=false;
            this.tu2=false;
            this.$refs.liewen.style.height=this.gao+"px";
            this.kg1=true;
            this.kg2=true;
            this.kg3=true;
            this.kg4=true;
            this.kg5=true;
            this.tu3=false;
            this.tu4=false;
            this.tu5=false;
          }else if(y==3){
            this.tu1=false;
            this.tu2=false;
            this.tu3=false;
            this.$refs.sunshang.style.height=this.gao+"px";
            this.kg1=true;
            this.kg2=true;
            this.kg3=true;
            this.kg4=true;
            this.kg5=true;
            this.tu4=false;
            this.tu5=false;
          }else if(y==4){
            this.tu1=false;
            this.tu2=false;
            this.tu3=false;
            this.tu4=false;
            this.$refs.fushi.style.height=this.gao+"px";
            this.kg1=true;
            this.kg2=true;
            this.kg3=true;
            this.kg4=true;
            this.kg5=true;
            this.tu5=false;
          }else if(y==5){
            this.tu1=false;
            this.tu2=false;
            this.tu3=false;
            this.tu4=false;
            this.tu5=false;
            this.$refs.leiji.style.height=this.gao+"px";
            this.kg1=true;
            this.kg2=true;
            this.kg3=true;
            this.kg4=true;
            this.kg5=true;
          }
        },
        // gaibian() {
        //   if (this.value==this.options[0].value) {
        //     localStorage.setItem('jx',this.options[0].label)
        //     // localStorage.setItem('bt',JSON.stringify(String(this.btt)));
        //     // this.$router.push("xiaoxi");
        //     console.log('这是ARJ21');
        //   } else if (this.value=== this.options[1].value) {
        //     localStorage.setItem('jx',this.options[1].label)
        //     console.log('这是C919');
        //   } else if (this.value=== this.options[2].value) {
        //     localStorage.setItem('jx',this.options[2].label)
        //     console.log('这是CR929');
        //   }
        // },
          dianji(i,e){
            // e.classList.add("listbgc");
            this.jh=i;
            this.zt=0;
            this.getjilu();
            this.shipin=false;
            this.liebiao=true;
            setTimeout(()=>{
              this.r3=true;
            },300)

          },
        dianji1(j,x,y){
          this.sj=j;
          this.gettu();
          this.shijian=x;
          this.leixing=y;
          this.shipin=true;
          this.liebiao=false;
          var timer=setTimeout(()=>{
            this.gao=this.$refs.quanbu.clientHeight;
            console.log(this.gao);
            this.gao1=this.$refs.quanbu1.offsetHeight;
            console.log(this.gao1);
            clearTimeout(timer)
          },300)

        },
          qb(){
            this.zt=0;
            this.getjilu();
          },
          lj(){
              this.zt=3;
              this.getjilu();
          },
        lw(){
          this.zt=1;
          this.getjilu();
        },
        ffs(){
          this.zt=4;
          this.getjilu();
        },
        ss(){
          this.zt=2;
          this.getjilu();
         },
        getjiahao(){
          axios.get('/shelf/findAllShelfs', {params:{
            }}).then((item)=>{
            this.list=item.data.data;
          })
        },
        fanhui(){
          this.shipin=false;
          this.liebiao=true;
        },
        getjilu(){
          axios.post('/check/getCheckSumResult/', {
            pageSize:20,
            pageNum:this.val,
            shelfId:this.jh,
          }).then((item)=>{
            this.total=item.data.total;
            this.list2=item.data.data;
            console.log(this.list2);
            setTimeout(()=>{
              var op=this.$refs.ko;
              var op1=this.$refs.ko1;
              var op2=this.$refs.ko2;
              var op3=this.$refs.ko3;
              var op4=this.$refs.ko4;
              for(var i=0;i<op.length;i++){
                if(op[i].innerHTML=="全部缺陷:0"){
                  op[i].classList.add("disp");
                }
                if(op1[i].innerHTML=="裂纹数量:0"){
                  op1[i].classList.add("disp");
                }
                if(op2[i].innerHTML=="损伤数量:0"){
                  op2[i].classList.add("disp");
                }
                if(op3[i].innerHTML=="腐蚀数量:0"){
                  op3[i].classList.add("disp");
                }
                if(op4[i].innerHTML=="雷击数量:0"){
                  op4[i].classList.add("disp");
                }
              }

            },300);
            setTimeout(()=>{


            var tab=document.querySelectorAll("tr");
            for(var i=0;i<tab.length;i++){
              if(tab[i].rowIndex/2%1){
                tab[i].classList.add("bgc");
              }
            }
            },300)
        })
        },
        gettu(){
          axios.get('/check/getFlawDetail'+"/"+this.sj, {params:{
            }}).then((item)=>{
            this.list3=item.data.data;
            this.all=this.list3.total;
            this.damage=this.list3.damage_size;
              this.corrosion=this.list3.corrosion_size;
              this.crack=this.list3.crack_size;
              this.light=this.list3.light_size;

            this.listsunshang=this.list3.damage_pics;

            for(var i=0;i<this.listsunshang.length;i++){
              this.listsunshang[i]="../../static/crops/"+ this.listsunshang[i]
              console.log(this.listsunshang[i]);
            }

            this.listleiji=this.list3.light_pics;
            for(var i=0;i<this.listleiji.length;i++){
              this.listleiji[i]="../../static/crops/"+this.listleiji[i]
            }
            this.listliewen=this.list3.crack_pics;
            for(var i=0;i<this.listliewen.length;i++){
              this.listliewen[i]="../../static/crops/"+this.listliewen[i]
            }
            this.listfushi=this.list3.corrosion_pics;
            for(var i=0;i<this.listfushi.length;i++){
              this.listfushi[i]="../../static/crops/"+this.listfushi[i]
            }
            let list4=this.listzong.concat(this.listleiji,this.listliewen,this.listfushi,this.listsunshang);
            this.listzong=list4;
            this.url=item.data.data.video;
            this.url="../../static/shipin/"+this.url;
              var timer=setTimeout(()=>{
                this.playerOptions.sources[0].src= this.url;
                clearTimeout(timer);
              },50)
            var myPlayer = videojs("video"); //初始化视频
            $("#video_src").attr("src",this.url)
            myPlayer.src(this.url); //重新初始化视频地址
            myPlayer.load(this.url); //重新加载
          })
        },
        deleteData(){
          axios.get('/check/deleteRecordById'+"/"+this.hao, {params:{
            }}).then((item)=>{

          })
        },
        },
        menu() {
          this.scroll = this.$refs.rxx.scrollTop;
          this.$refs.boxx1.style.top=this.scroll+"px";
      },
      watch:{

      },
      beforeMount() {

      },
      mounted() {
        this.topHeight=(window.innerHeight+200)+"px";
        window.addEventListener('scroll', this.menu,true);
        window.removeEventListener('item',this.getjilu);
      },
      components:{
          headerr
      }
    }
</script>

<style scoped>
.xuan1{
  background-color: white;width: 30%;height:20%;float: left;text-align: center;
  position: relative;
  z-index: 3;
}
.xuan2{
  background-color: white;width: 30%;height:20%;float: left;text-align:center;margin-left: 10%;
  position: relative;
  z-index: 3;
}
.xuan:hover{
  background-color: #00A8FF;
}
.shanc{
  width: 20%;
  height: 10%;
  background-color: gray;
}
.tankuang1{

  width: 100%;
  background-color: rgba(0,0,0,0.6);
  opacity: 1;
  position: absolute;
  z-index: 2;

}
  .xiaotu{
    margin-top: 15%;
  }
  .spp{
    position: absolute;
    top:70%;
    right: 5%;

  }
  .btnn{
    width: 130%;
    height: 1.5rem;
    outline: none;
    border: none;

  }
  .btnmen{
    position: absolute;
    bottom: -6.2rem;
    left: 18%;
  }
  .btnn:hover{
      background-color: #00A8FF;
  }
  .sct{
    width: 80%;
    height: 1.5rem;
    background-color:#001F41;
    color: white;
    border-radius: 0;
    margin-left: 20%;
    margin-top: 5%;
  }
  .k{
    float: left;
    border-radius: 15px;
    text-align: center;
    padding:0 1%;
  }
  .k1{
    color: black;
  }
  .boxx{
    background-color:deepskyblue;
    padding-right:5% ;
    margin-right: 2%;
  }
  .boxx1{
    background-color: #D967DC;
  }
  .boxx2{
    background-color:#FF5257;
  }
  .boxx3{
    background-color: #F7821B;
  }
  .boxx4{
    background-color: #62BA46;
  }
.left3{
  width: 15%;
  float: left;
  height: 850px;
  background-color: #002349;
  margin-top: 0.5%;
}
.right3{
  width: 84%;
  float: right;
  margin-top: 0.5%;
  background-color: #002956;
}
.btnnn{
  width: 15%;
  height: 5%;
  background-color: #002956;
  color: white;
  border: none;
  outline: none;
}
.ls{
}
.u2{
  width: 100%;
}
 .u2 li{
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    border: 0;
   text-align: center;
   background-color:#002349;
  }
  .u2 li:hover{
    background-color: #0099E9;
  }
  input{
    width: 60%;
    height: 5%;
    border-radius: 30px;
    border:1px white solid ;
    color: white;
    background-color: rgba(0,0,0,0.4);
    outline: none;
    padding: 3%;
    margin-left: 5%;
  }
  .rs{
    width: 68%;
    height: 780px;
    margin: 0 auto;
    float: left;
    position: relative;
    background-color: #002349;
    margin-top: 2%;
  }
  .rz{
    width: 98%;
    margin: 1% 1%;
    background-color: #002956;

  }

  video{
    width: 50%;
  }

  .u3 li{
    list-style: none;
    float: left;
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    border-right: 1px red solid;
  }
  .u3 li:last-child{
    border-right: none;
  }
  .u3 li:hover{
    background-color: red;
  }
  .bg{
  width:97%;
    display: block;
    margin: 2% 0 3% 3%;
  }
  table{
    border: red;
  }
  table tr:hover{
    background-color: black;
  }
  table tr:first-of-type:hover{
    background-color: rgba(38,44,58,1);
  }
  tr:first-child td{
    padding-left: 3%;
  }
  td{
    width: 20%;
    height: 2rem;
    text-align: left;

  }
  td:first-of-type{
    border-right: 1px white solid;

  }
  td:nth-of-type(2){

    border-right: 1px white solid;

  }
  .rx{
    width: 98%;
    height: 32rem;
    overflow-y: scroll;
    background-color: #002349;
    position: relative;
  }
  .rx1{
    width: 30%;
    float: right;
    background-color: black;
    margin:2% 1%;
  }
/*.rx::-webkit-scrollbar{*/
/*  width:0;*/

/*  }*/

.box1{
  width: 5%;
  height: 100%;
  position:absolute;
  top:0;
  right: 0;
}
  img{
    width: 45%;
    margin: 1% 0 0 2%;
  }
button {
  width: 15%;
  height: 7%;
  margin: 1% 2%;
}
  .u4 li{
    width: 100%;
    height: 100%;
    list-style: none;
    text-align: center;

  }
  .box2{
    width:100%;
    height: 2.5rem;
    background-color:#002349;
    margin-top: 1%;
    line-height: 2.5rem;
    display: block;
    float: left;
  }
  .nb{
    color: white;
  }
  .in2{
    width: 60%;
    margin-left: 15%;
  }
  .nb1{
    width: 100%;
    background-color: black;
    position: relative;
  }
  .lr{
    margin-top: 5%;
    margin-bottom: 15%;
  }
  .box3{
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    float: left;
    margin-top: 0.75rem;
    margin-left: 5%;
    margin-right: 5%;
  }
  .tu{
    background-color: deepskyblue;
  }
  .tu1{
    background-color: #D967DC;
  }
.tu2{
  background-color: #FF5257;
}
.tu3{
  background-color: #F7821B;
}
.tu4{
  background-color: #62BA46;
}
  .box4{
    float: right;
    margin-right: 25%;
    color: #7FBE26;
  }
  .box5{
    float: right;
    margin-right: 25%;
    color: #7FBE26;
  }
  .tankuang{
    width: 100%;

    background-color: rgba(0,0,0,0.6);
    opacity: 1;
    position: absolute;
    z-index: 2;
  }
  .img1{
    width: 100%;
  }
  .tpbox{
    width: 30%;
    height: 30%;
    margin: 0 auto;
    margin-top:15%;
    opacity: 1;
    position: relative;
  }
  .btn1{
    width: 50px;
    height: 25px;
    float: right;
  }
  .tpbox1{
    float: left;
    color: white;
    width: 100%;

  }
  .listbgc{
    background-color: #00A8FF;
  }
  .bgc{
    background-color: #002349;
  }
  table span{
    margin-left: 15%;
  }
  .block1{
    /*background-color:rgba(38,44,58,1);*/
    margin-left: 20%;
  }
  .disp{
    display: none;
  }

</style>
<style>
  .el-pager li {
    background-color:#002956 !important;
    color: white !important;
    border: 1px solid #002956;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color:  #18B1FF !important;
    color: white!important;
  }
  .el-pagination.is-background span{
    color: white;
  }
  .el-pagination.is-background .el-select el-select--mini{
    background-color:#002956 ;
    color: white;
  }
  .el-pagination.is-background .btn-next.disabled, .el-pagination.is-background .btn-next:disabled, .el-pagination.is-background .btn-prev.disabled, .el-pagination.is-background .btn-prev:disabled, .el-pagination.is-background .el-pager li.disabled{
    background-color: #002956;
    color: white;
  }
  .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li {
    background-color: #002956;
    color: white;
  }
  .xiaotu{
    width: 100%;
    height: 3rem;
    background-image: url("../../static/images/xiaofeiji.png");
    background-size: cover;
  }
</style>
