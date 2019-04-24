# vue를 이용해서 설문조사 Form 만들기

vue cli를 이용해서 vue 연습을 해보았다.
prop과 emit을 연습하기에 적당한 예제인 것 같다.

### 수도코드

1. 설문조사 메인 modal1.vue, 유저정보를 보여주는 userInfo1.vue, 유저 정보를 수정하는 userEdit1.vue, 3구조로 구성
2. modal.vue 초기화 정보를 저장한다.
3. modalEdit.vue에는 modal.vue의 정보를 받아서 그 정보들을 수정해준 후 , 다시 modal.vue에 수정데이터를 보낸다.
4. modal.vue는 수정된data를 갖고 정보를 수정한다.
5. userInfo.vue는 modal.vue의 정보를 받아 사용자정보를 보여준다.
   > modal.vue (props) <-> (emit) userEdit.vue
   > modal.vue (props) <-> userInfo.vue

### Problem & Solution

1. - p) props로 받은 데이터를 수정하면 에러가 난다.
   - s) props로 받은 데이터는 부모에게 영향을 받을 수 있기 때문에 독립적으로 바꿔주어야 한다.
     1. data를 computed로 쓴다.
     2. 자식vue에 새로운 데이터를 만들어 준다(데이터 재할당 -> 커스텀로직 추가)
        > props로 받은 데이터는 해당 파일에서 수정해준 후에도 부모의 데이터가 바뀌면 부모를 따른다!
        > 그래서 ! 부모와 자식 간의 데이터 통신을 독립적으로 만들어야 한다.

   ```js
       props: ["nameChild", "addressChild", "hasDogChild"],

        created() {
           // 새로운 데이터를 만들어 주었다.(커스텀로직 추가)
           this.user.name = this.nameChild;
           this.user.address = this.addressChild;
           this.user.hasDog = this.hasDogChild;
        },

   ```

2. - P) input radio를 data에 맞쳐 checked하고 변경된 checked값을 갖고 오는 것에서 어려움이 있었다.
   - S) input radio와 javascript의 원리에 대해서 먼저 생각해보았다.
     ```js
         <input
             type="radio"
             value="false"
             v-model="user.hasDog"
             :checked="user.hasDog == false"
         >
     ```
     - checked 값이 false true로 체크유무가 결정된다.
     - radio checked가 true가 되어야 v-model에 값을 받게 된다. (false는 v-model의 값이 없다.)

# 느낀점

vue에서는 부모자식간의 통신에 대한 이론의 중요성을 다시 알게되었다.
자바스크립트를 통해 데이터간 동기화는 복잡하고 로직이 길어졌는데 확실히 vue를 사용하니 데이터 동기화적인 면에서 훨씬 편리했다.

> github올리는 과정에서 오류가 생겨서 우선 vue 컴포넌트 소스코드만 올렸다
