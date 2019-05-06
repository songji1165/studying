<template>
  <div class="modal">
    <h1>{{title}}</h1>
    <p>이름 : {{name}}</p>
    <button @click="nameChange()">이름 바꾸기</button>

    <div class="user">
      <UserInfo
        :userOfChild="name"
        :addressOfChild="address"
        :phoneOfChild="phone"
        :hasDogOfChild="hasDog"
      ></UserInfo>
      <UserEdit
        :userOfChild="name"
        :addressOfChild="address"
        :phoneOfChild="phone"
        :hasDogOfChild="hasDog"
        @child="parents"
      ></UserEdit>
    </div>
  </div>
</template>

<script>
import UserInfo from "./userinfo.vue";
import UserEdit from "./useredit";

export default {
  components: {
    UserInfo,
    UserEdit
  },
  data() {
    return {
      title: "User 컴포넌트",
      name: "User",
      address: "Seoul",
      phone: "123-1244",
      hasDog: true
    };
  },
  methods: {
    nameChange() {
      this.name = "Eunji";
    },
    parents(user) {
      //user={name,address,phone,hasDog}
      this.name = user.name;
      this.address = user.address;
      this.phone = user.phone;
      this.hasDog = user.hasDog;
    }
  }
};
</script>

<style>
.modal {
  border: 1px solid #d9d9d9;
}
.user > div {
  float: left;
  width: 50%;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
}
</style>

