<template>
  <div>
    <h1>설문조사</h1>
    <p>이름 : {{name}}</p>
    <UserInfo
      :nameChild="name"
      :addressChild="address"
      :hasDogChild="hasDog"
    ></UserInfo>
    <UserEdit
      :nameChild="name"
      :addressChild="address"
      :hasDogChild="hasDog"
      @edit="editUser"
    ></UserEdit>
  </div>
</template>

<script>
import UserInfo from "./userinfo1";
import UserEdit from "./useredit1";

export default {
  components: {
    UserInfo,
    UserEdit
  },
  data() {
    return {
      name: "User",
      address : '',
      hasDog : false
    }
  },
 
  methods : {
    editUser (edit) {
      //user = {name, address, hasDog}
      this.name = edit.name
      this.address = edit.address
      this.hasDog = edit.hasDog
    }
  }

};
</script>
