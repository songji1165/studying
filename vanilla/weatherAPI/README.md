# Weather API & ajax
- [weather API](https://openweathermap.org/)를 사용해보았다.

### problem & solution
1. - p) weather API를 사용하려면 좌표값을 갖고 있어야 했다.
        - 기본적으로 api에 대한 공부가 필요했다.
    - s) giolocation API 이론 공부를 먼저 하였다.
        - 사용자권한이 허용되지 않으면 위치 정보를 얻을 수 없기 때문에
          getCurrentPosition에 에러파라미터를 추가해주어 경고창의 띄어 사용자권한을 얻을 수 있도록 유도하는 기능을 추가하였다.
2. - p) weather API를 불러오는 과정에서 fetch API에 대한 이해가 필요 했다.
    - s) weather홈페이지를 통해 Weather API 사용법을 숙지하였고, fetch API에 대한 이론 공부를 하였다. 
        - Weather API처럼 다른 서버에 데이터를 갖고오기 위해서는 해당 key값이 필요하다 -> 오픈 데이터이지만 모든 사람들 남발하여 사용할 경우 해당 서버에 문제가 생길 수 있기 때문에 해당 api를 사용하겠다는 인증정도로 생각하면 될 것같다.
        - weather API의 데이터 속 객체를 통해서 원하는 값을 DOM에 추가해주었다.

# 느낀점
전체적인 흐름은 이해되고 그림이 그려졌지만 해당 지식이 없어서 해당 이론에 대한 공부가 필요했다.
앞으로도 공부와 프로젝트를 번갈아가며 학습하면 실력이 많이 늘 것 같다.
