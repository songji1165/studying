<template>
  <div>
    <h3>사용자 정보를 수정합니다.</h3>
    <ol>
      <li>
        이름 :
        <input type="text" v-model="user.name">
      </li>
      <li>
        주소 :
        <input type="text" v-model="user.address">
      </li>
      <li>
        반려견 유무 :
        <input type="radio" name="hasDog" value="true" id="true" v-model="user.hasDog">
        <label for="true">있음</label>
        <input type="radio" name="hasDog" value="false" id="false" v-model="user.hasDog">
        <label for="false">없음</label>
      </li>
    </ol>
    <button @click="edit">수정하기</button>
  </div>
</template>

<script>
export default {
  props: ["nameChild", "addressChild", "hasDogChild"],
  data() {
    return {
      user: {},
    };
  },
  created() {
    // 새로운 데이터를 만들어 주었다.(커스텀로직 추가)
    this.user.name = this.nameChild;
    this.user.address = this.addressChild;
    this.user.hasDog = this.hasDogChild;
  },
  methods : {
    edit () {
      this.$emit('edit',this.user)
      console.log(this.user)
    }
  }
  
};



// 똑같이 생각하자 
</script>

