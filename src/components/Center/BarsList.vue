<template>
  <div class="bar-list" :class="{'home' : enter == 'home'}">
      <ul>
        <li class="bar-item flex" v-for="(v,i) in list" :key="i" @click="pageToBarInfo(v.id, v.name)">
          <div class="bar-img">
            <img :src="v.logo | prefixImageUrl" alt="" class="circle">
          </div>
          <div class="bar-info flex flex-1 flex-v flex-pack-center">
            <h2 class="bar-name">{{v.name}}</h2>
            <div class="bar-address">{{v.area_name}}{{v.address}}</div>
          </div>
          <div class="bar-distance flex flex flex-align-center" v-if="enter == 'home'">
            <svg-icon icon-class="position"/><span>{{v.distance | distance}}</span>
          </div>
          <div class="tc bar-money pr flex flex-v flex-pack-center" v-if="enter != 'home'">
            <p class="f16" style="color:red;">{{v.agent_balance}}</p>
            <p class="f13" style="color:#818181;">可提现收益</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  props: ['barsList', 'enter'],
  components: {

  },
  data () {
    return {
    }
  },
  mounted () {
  },
  computed: {
    list () {
      return this.barsList ? this.barsList : []
    }
  },
  methods: {
    pageToBarInfo (id, name) {
      if (this.enter === 'home') {
        this.$router.push({path: `/Main/${id}`})
      } else {
        this.$router.push({path: `/AgentBarInfo`, query: {id: id, type: 3}})
      }
    }
  },
  filters: {
    distance (value) {
      if (typeof value === 'string') {
        return value
      }
      var d = Number(value / 1000).toFixed(2) + 'km'
      return d
    }
  }
}
</script>

<style lang="less" scoped>
.bar-item {
  padding: 0.36rem 0.3rem;
  .home & {
    margin-bottom: 1px;
    background-color: #181b2a;
  }
}
.bar-img {
  width: 1rem;
  margin-right: 0.4rem;
  img {
    width: 1rem;
    height: 1rem;
  }
}
.bar-name {
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  margin-bottom: 5px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  .home & {
    color: #fff;
  }
}
.bar-address {
  font-size: 12px;
  line-height: 1.5;
  color: #ccc;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  .home & {
    color: #61667a;
  }
}
.bar-distance {
  margin-left: 0.1rem;
  .home & {
    color: #61667a;
  }
  span {
    font-size: 13px;
  }
  .svg-icon {
    width: 0.32rem;
    height: 0.32rem;
  }
}
.bar-money {
  padding: 0 10px;
  margin-left: 10px;
}
.bar-money:before {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: #ddd;
  content: "";
}
</style>
