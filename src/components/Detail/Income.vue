<template>
  <div class="scroll-container scroll">
    <div class="detail-item flex flex-align-center bg2" v-for="(v, i) in list" :key="i">
      <div class="detail-item-left flex-1">
        <p class="overflow fff-bp f14">
          <template v-if="v.source_flag == 0">
            购买：{{v.title}}X{{v.odr_num}}
          </template>
          <template v-if="v.source_flag == 1">
            <template v-if="v.pay_type == 1">牛角</template><template v-if="v.pay_type == 2">现金</template>红包
          </template>
          <template v-if="v.source_flag == 2">
            红包退款
          </template>
          <template v-if="v.source_flag == 3">
            牛角退款
          </template>
        </p>
        <p class="f13 scolor v">{{v.create_time}}</p>
      </div>
      <div class="detail-item-right">
        <p class="overflow f14 ncolor">
          <template v-if="v.type == 1">+</template>
          <template v-if="v.type == 2">-</template>
          {{v.money}}
          <template v-if="v.pay_type == 1">牛角</template>
          <template v-if="v.pay_type == 2">元</template>
        </p>
        <p class="f13 scolor bottom-line">来自{{v.nickname}}</p>
      </div>
    </div>
    <infinite-loading @infinite="infiniteHandler">
      <inline-loading slot="spinner" :color="'#f31374'" :bgColor="'rgba(255, 255, 255, 0.2)'"></inline-loading>
      <span slot="no-results">没有记录</span>
      <span slot="no-more">没有更多啦</span>
    </infinite-loading>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import InlineLoading from '../InlineLoading'
import { getIncomeList } from '@/api/'
export default {
  data () {
    return {
      list: [],
      params: {
        pageSize: 15,
        page: 1
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '收益详情'
    next()
  },
  components: {
    InfiniteLoading,
    InlineLoading
  },
  methods: {
    infiniteHandler ($state) {
      getIncomeList(this.params).then((res) => {
        if (Array.isArray(res.result.data)) {
          this.list = this.list.concat(res.result.data)
          if (this.list.length >= res.result.total) {
            $state.complete()
          } else {
            this.params.page += 1
            $state.loaded()
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../styles/detail.less';
</style>

