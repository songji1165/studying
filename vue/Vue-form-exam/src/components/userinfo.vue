<template>
  <div class="userInfo">
    <h2>자세한 회원정보를 확인합니다.</h2>
    <ol>
      <li>이름 : {{ userOfChild }}</li>
      <!-- <li>{{sayHello}}</li> -->
      <li>주소 : {{addressOfChild}}</li>
      <li>전화번호 : {{phoneOfChild}}</li>
      <li>강아지 : {{hasDogKr}}
      </li>
    </ol>
      <button @click="switchName">정보 수정</button>
  </div>
</template>

<script>
export default {
  
  props: ['userOfChild', 'addressOfChild', 'phoneOfChild', 'hasDogOfChild'],
    // {}값   : 데이터타입  userOfChild:String
    //userOfChild: {
            //데이터 타입
      //type: String,
            //꼭 필요한값이다 아니다  required : true
            // 부모한테 전달받은 값이 없을 때 defalt : 'lego' 가 출력
      //default: "Lego"}

  computed: {
    // sayHello() {
    //   return this.userOfChild + "안녕하세요";
    // }
    hasDogKr () {
        return this.hasDogOfChild === true ? '있음' : '없음'
    }
  },
  methods: {
    switchName() {
      this.$emit(userOfChild, "컴퓨터");
    }
  }
};
</script>

<style>
.userInfo {
  background: pink;
}

ol{
    background : #fff
}
</style>

