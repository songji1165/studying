# Vue.component 연습
Vue를 이용해서 To do list를 만들었던 것에 모달창을 component로 수정해보았다.

### Problem & Solution
- P) component와 DOM의 관계가 많이 헤깔렸다.
- S) 
    1. Vue component는 HTML과 독립적인 존재라고 이해하자
        - component와 HTML은 바인딩이 필요하다.
    2. 바인딩 할 수 있는 것 ($emit, props)
    ![컴포넌트](https://kr.vuejs.org/images/props-events.png)
    > - parent = HTML 엘리먼트
      - child = component 데이터
    
***
##### 1. props : 상위 엘리먼트를 하위컴포넌트로 전달할 수 있다. (위 -> 아래)
- v-bind : <u>prop-name</u> = "엘리먼트값"
- props : [ <u>'propName'</u> ]

##### 2. Emit Event : 하위 컴포넌트에서 발생된 이벤트를 상위 엘리먼트에게 전달해준다. (아래 -> 위)
- v-on : <u>evnet-name</u> = "엘리먼트값"
- 
```js
    template : `
        <button @click="evnetClick">ok</button>
    `,
    methods : {
        eventClick : function(){
            this.$emit('event-name',이벤트값)
                //이벤트값은 엘리먼트함수의 인자가 된다.
        }
    }
```
***

# 느낀점
컴포넌트의 기본 개념을 잘 생각해서 로직을 구성해야 겠다.

