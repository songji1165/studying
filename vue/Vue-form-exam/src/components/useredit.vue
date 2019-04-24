<template>
  <div class="userEdit">
    <h2>회원정보를 수정할 수 있습니다.</h2>
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
        전화번호 :
        <input type="text" v-model="user.phone">
      </li>
      <li>
        반려견유무 :
        <input
          type="radio"
          name="hasDog"
          id="ok"
          value="true"
          :checked="user.hasDog == true"
          v-model="user.hasDog"
        >
        <label for="ok">있음</label>
        <br>
        <input
          type="radio"
          name="hasDog"
          id="no"
          value="false"
          :checked="user.hasDog == false"
          v-model="user.hasDog"
        >
        <label for="no">없음</label>
      </li>
    </ol>
    <button @click="change">수정완료</button>
  </div>
</template>

<script>
export default {
  props: ["userOfChild", "addressOfChild", "phoneOfChild", "hasDogOfChild"],
  data() {
    return {
      user: {}
    };
  },
  created() {
    this.user.name = this.userOfChild;
    this.user.address = this.addressOfChild;
    this.user.phone = this.phoneOfChild;
    this.user.hasDog = this.hasDogOfChild;
  },
  methods: {
    change() {
      this.$emit('child', this.user)
    }
  }
};
</script>

<style>
.userEdit {
  background: skyblue;
}
</style>

