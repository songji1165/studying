<template>
  <div>
    <h3>사용자 정보를 확인합니다.</h3>
    <ol>
      <li>
        이름 : {{nameChild}}
      </li>
      <li>
        주소 : {{addressChild}}
      </li>
      <li>
        반려견 유무 : {{hasDog}}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props : ['nameChild', 'addressChild', 'hasDogChild'],
  computed : {
    hasDog () {
        return this.hasDogChild === 'true' ? '있음' : '없음'

    }
  }
  
}
</script>
