<template>
  <div class="testUSDW">

    <div class="header">
      <el-button @click="$router.back()" style="position: absolute;left: 3em;top: 2em">
        返回
      </el-button>
      <ConnectWallet></ConnectWallet>

    </div>
    <h2>查询方法</h2>
    <div class="row">
      <el-col>代币总供应量(_totalSupply)</el-col>
      <el-col><el-button @click="_totalSupply">TotalSupply</el-button></el-col>
      <el-col>{{ totalSupply }}</el-col>
    </div>
    <div class="row">
      <el-col>余额查询(balanceOf)</el-col>
      <el-input v-model="search1" placeholder="查询对象地址"></el-input>
      <el-col><el-button @click="balanceOf">balanceOf</el-button></el-col>
      <el-col>{{ balance }}</el-col>
    </div>
    <div class="row">
      <el-col>精度(decimals)</el-col>
      <el-col><el-button @click="decimals">decimals</el-button></el-col>
      <el-col>{{ decimal }}</el-col>
    </div>
    <div class="row">
      <el-col>授权余额查询(allowance)</el-col>
      <el-input v-model="search2" placeholder="查询对象地址"></el-input>
      <el-input v-model="search3" placeholder="授权对象地址"></el-input>
      <el-col><el-button @click="allowance">allowance</el-button></el-col>
      <el-col>{{ allowanceNumber }}</el-col>
    </div>
    <h2>基本调用</h2>
    <el-container style="box-shadow: #999 0 0 10px;padding: 1em;margin-top: 1em">
      <el-aside width="500px">
        <strong> 1Approve</strong>
        <p>批准传递的地址以代表msg.sender使用指定数量的令牌。</p>
        <p>* @param _spender将使用资金的地址。</p>
        * @param _value要花费的代币数量。
      </el-aside>
      <el-container>

        <el-header>
          <strong>授权此代币</strong>
        </el-header>
        <el-main>
          <el-input v-model="input1" placeholder="授权对象地址"></el-input>
          <el-input v-model="input2" placeholder="授权金额"></el-input>
          <el-button @click="approve">Approve</el-button>
        </el-main>
      </el-container>
    </el-container>
    <el-container style="box-shadow: #999 0 0 10px;padding: 1em;margin-top: 1em">
      <el-aside width="500px">
        <strong>2Transfer</strong>
       <p> * @dev指定地址的传输令牌</p>
       <p> * @param _to要传输的地址。</p>
        * @param _value要转移的金额。
      </el-aside>
      <el-container>
        <el-header>
          <strong>转移此代币</strong>
        </el-header>
        <el-main>
          <el-input v-model="input3" placeholder="转给谁"></el-input>
          <el-input v-model="input4" placeholder="金额(已加精度)"></el-input>
          <el-button @click="transfer">Transfer</el-button>
        </el-main>
      </el-container>
    </el-container>
    <el-container style="box-shadow: #999 0 0 10px;padding: 1em;margin-top: 1em">
      <el-aside width="500px">
        <strong>3pause</strong>
        <p>被所有者调用暂停，触发停止状态</p>
      </el-aside>
      <el-container>
        <el-header>
          <strong>暂停交易</strong>

        </el-header>
        <el-main>
          <el-button @click="pause">pause</el-button>
        </el-main>
      </el-container>
    </el-container>
    <el-container style="box-shadow: #999 0 0 10px;padding: 1em;margin-top: 1em">
      <el-aside width="500px">
        <strong>unpause</strong>
        <p>被所有者调用取消暂停</p>
      </el-aside>
      <el-container>
        <el-header>
          <strong>取消暂停</strong>

        </el-header>
        <el-main>
          <el-button @click="unpause">unpause</el-button>
        </el-main>
      </el-container>
    </el-container>
    <el-container style="box-shadow: #999 0 0 10px;padding: 1em;margin-top: 1em">
      <el-aside width="500px">
        <strong>4addBlackList</strong>
      </el-aside>
      <el-container>
        <el-header>
          <strong>添加黑名单成员</strong>
        </el-header>
        <el-main>
          <el-input v-model="input5" placeholder="地址"></el-input>
          <el-button @click="addBlackList">addBlackList</el-button>
        </el-main>
      </el-container>
    </el-container>
    <el-container style="box-shadow: #999 0 0 10px;padding: 1em;margin-top: 1em">
      <el-aside width="500px">
        <strong>removeBlackList</strong>
      </el-aside>
      <el-container>
        <el-header>
          <strong>删除黑名单成员</strong>
        </el-header>
        <el-main>
          <el-input v-model="input9" placeholder="地址"></el-input>
          <el-button @click="removeBlackList">removeBlackList</el-button>
        </el-main>
      </el-container>
    </el-container>
    <el-container style="box-shadow: #999 0 0 10px;padding: 1em;margin-top: 1em">
      <el-aside width="500px">
        <strong>5transferOwnership</strong>
        <p>允许当前所有者将合同的控制权转移给新所有者。</p>
        * @param newOwner转移所有权的地址。
      </el-aside>
      <el-container>
        <el-header>
          <strong>转让管理员</strong>
        </el-header>
        <el-main>
          <el-input v-model="input6" placeholder="地址"></el-input>
          <el-button @click="transferOwnership">transferOwnership</el-button>
        </el-main>
      </el-container>
    </el-container>
    <el-container style="box-shadow: #999 0 0 10px;padding: 1em;margin-top: 1em">
      <el-aside width="500px">
        <strong>6 issue</strong>
        <p>发行一个新的token数量</p>
        <p> 这些令牌被存入所有者地址</p>
         @param _amount要发行的令牌数量
      </el-aside>
      <el-container>
        <el-header>
          <strong>增发</strong>
        </el-header>
        <el-main>
          <el-input v-model="input7" placeholder="金额"></el-input>
          <el-button @click=" issue"> issue</el-button>
        </el-main>
      </el-container>
    </el-container>
    <el-container style="box-shadow: #999 0 0 10px;padding: 1em;margin-top: 1em">
      <el-aside width="500px">
        <strong>7 redeem</strong>

      </el-aside>
      <el-container>
        <el-header>
          <strong>燃烧代币</strong>
        </el-header>
        <el-main>
          <el-input v-model="input8" placeholder="金额"></el-input>
          <el-button @click="redeem"> redeem</el-button>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>
import ConnectWallet from "../components/ConnectWallet"
/* eslint-disable */
export default {
  name: "testUSDW",
  components:{ConnectWallet},
  data() {
    return {
      search2:this.$store.state.account,
      search1:this.$store.state.account,
      search3:"0x694e3b56e0224859a7281dBFF8D77EeFD418BdAA",
      input1: "0x694e3b56e0224859a7281dBFF8D77EeFD418BdAA",
      input2: undefined,
      input3: undefined,
      input4: undefined,
      input5:undefined,
      input6:undefined,
      input7:undefined,
      input8:undefined,
      input9:undefined,
      totalSupply:undefined,
      decimal: undefined,
      balance:undefined,
      allowanceNumber:undefined,
      decimalNumber:undefined
    }
  },
  computed: {
    account(){


      return this.$store.state.account
    }
  },
  created() {
    console.log("created")
    this.decimals()
    this.$store.state.web3.eth.getPastLogs({
      address:"0x694e3b56e0224859a7281dBFF8D77EeFD418BdAA"
    }).then(res=>{
      console.log(res)
    })

  },
  methods:{
    approve(){
      this.$store.dispatch("usdt/approve",{_spender:this.input1,_value:BigInt(this.input2*this.decimalNumber)}).then(res=>{
        console.log(res)
        alert("success")
      }).catch(err=>{
        console.log(err)
        alert("failed")
      })
    },
    removeBlackList(){
      this.$store.dispatch("usdt/removeBlackList",this.input9).then(res=>{
        console.log(res)
        alert("success")
      }).catch(err=>{
        console.log(err)
        alert("failed")
      })
    },
    transfer(){
      this.$store.dispatch("usdt/transfer",{_to:this.input3,_value:BigInt(this.input4*this.decimalNumber)}).then(res=>{
        console.log(res)
        alert("success")
      }).catch(err=>{
        console.log(err)
        alert("failed")
      })
    },
    pause(){
      this.$store.dispatch("usdt/pause",).then(res=>{
        console.log(res)
        alert("success")
      }).catch(err=>{
        console.log(err)
        alert("failed")
      })
    },
    unpause(){
      this.$store.dispatch("usdt/unpause",).then(res=>{
        console.log(res)
        alert("success")
      }).catch(err=>{
        console.log(err)
        alert("failed")
      })
    },
    addBlackList(){
      this.$store.dispatch("usdt/addBlackList",this.input5).then(res=>{
        console.log(res)
        alert("success")
      }).catch(err=>{
        console.log(err)
        alert("failed")
      })
    },
    transferOwnership(){
      this.$store.dispatch("usdt/transferOwnership",this.input6).then(res=>{
        console.log(res)
        alert("success")
      }).catch(err=>{
        console.log(err)
        alert("failed")
      })
    },
    redeem(){
      this.$store.dispatch("usdt/redeem",BigInt(this.input7* this.decimalNumber)).then(res=>{
        console.log(res)
        alert("success")
      }).catch(err=>{
        console.log(err)
        alert("failed")
      })
    },
    issue(){

      this.$store.dispatch("usdt/issue",BigInt(this.input7 * this.decimalNumber)).then(res=>{
        console.log(res)
        alert("success")
      }).catch(err=>{
        console.log(err)
        alert("failed")
      })
    },
    _totalSupply(){
      this.$store.dispatch("usdt/_totalSupply").then(res=>{
        this.totalSupply= res /   this.decimalNumber
      })
    },
    balanceOf(){
      this.$store.dispatch("usdt/balanceOf",this.search1).then(res=>{
        this.balance= res/   this.decimalNumber
      })
    },
    allowance(){
      this.$store.dispatch("usdt/allowance",{
        _owner:this.search2
      }).then(res=>{
        this.allowanceNumber= res/ this.decimalNumber
      })
    },
    decimals(){
      console.log(this.account)
      if(this.account.length>5){
        this.$store.dispatch("usdt/decimals",{
        }).then(res=>{
          this.decimal= res
          this.decimalNumber = 10**parseInt(res)
        })

      }else{
        setTimeout(()=>{
          console.log(111111111111111)
          this.decimals()
        },500)
      }

    },
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-input__inner{
  width: 500px;
}
.header{
  display: flex;
  justify-content: center;
}
.row{
  display: flex;
  justify-content: space-around;
  padding: 2em 0;
  border-bottom: 2px solid #eee;
}
</style>
