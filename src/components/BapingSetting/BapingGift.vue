<template>
  <div class="scroller-bp">
    <checker v-model="giftSelected" type="checkbox" default-item-class="baping-item" selected-item-class="baping-item-selected">
      <template v-for="(v, i) in gifts">
        <checker-item :value="i" :key="i" @on-item-click="onClick">
          <div class="flex flex-align-center">
            <div class="baping-icon flex flex-pack-center">
              <img :src="v.icon | prefixImageUrl"/>
            </div>
            <div class="baping-info flex flex-v flex-pack-center flex-1">
              <p class="baping-title">{{v.title}}</p>
              <div class="baping-price flex flex-align-center">
                <div class="flex1 baping-price-tip">价格：{{v.price}}元</div>
                <div><a class="baping-edit" @click.prevent.stop="edit(i)">编辑</a></div>
              </div>
            </div>
            <div class="baping-check">
              <check-icon :value="giftSelected.some((vv,ii) => vv == i)" type="plain"></check-icon>
            </div>
          </div>
        </checker-item>
      </template>
    </checker>
  </div>
</template>

<script>
import { Checker, CheckerItem, CheckIcon } from 'vux'
import { getBpDatas, updateBpPrice, updateBpSelect } from '@/api/'
export default {
  data () {
    return {
      giftSelected: [],
      gifts: [],
      editIndex: -1
    }
  },
  created () {
    getBpDatas({ht_id: this.$route.query.id, type: 1}).then((res) => {
      let selecteds = []
      res.result.forEach((v, i) => {
        if (Number(v.selected) === 1) {
          selecteds.push(i)
        }
      })
      this.giftSelected = selecteds
      this.gifts = res.result
    })
  },
  methods: {
    onClick (itemValue, itemDisabled) {
      this.gifts[itemValue].selected = Number(this.gifts[itemValue].selected) === 1 ? 0 : 1
      let data = {
        id: this.gifts[itemValue].id,
        selected: this.gifts[itemValue].selected,
        ht_id: this.$route.query.id
      }
      updateBpSelect(data)
    },
    change (event) {
    },
    edit (index) {
      let _this = this
      this.editIndex = index
      this.$vux.confirm.prompt('价格', {
        title: '请输入价格',
        closeOnConfirm: false,
        onShow () {
          console.log('promt show')
          _this.$vux.confirm.setInputValue(_this.gifts[index].price)
        },
        onHide () {
          console.log('prompt hide')
        },
        onCancel () {
          console.log('prompt cancel')
        },
        onConfirm (msg) {
          msg = typeof msg === 'number' ? msg : Number(msg)
          if (!Number.isInteger(msg) || !/^\d+(?=\.{0,1}\d+$|$)/.test(Number(msg))) {
            _this.$vux.toast.show({
              text: '请输入正整数'
            })
            return false
          }
          let data = {
            price: msg,
            id: _this.gifts[_this.editIndex].id,
            ht_id: _this.$route.query.id
            // selected: _this.gifts[_this.editIndex].selected
          }
          updateBpPrice(data).then((res) => {
            _this.gifts[_this.editIndex].price = Number(msg)
            _this.$vux.confirm.hide()
          })
        }
      })
    }
  },
  components: {
    Checker,
    CheckerItem,
    CheckIcon
  }
}
</script>

<style lang="less" scoped>

</style>
