## 노마드 코더 리엑트 강의 예제 코드

[여기서 코드 확인](https://academy.nomadcoders.co/courses/216871/lectures/10881302)

## 중요 개념

### 3.1 All you need to know about State

> 매순간 너가 setState 호출할 때마다 react는 새로운 state와 함께 render function을 호출할거야.
> 그것도 state가 변동되는 부분만.

> `this.setState({count: this.state.count - 1});` 이 코드는 멍청해. 현재의 상태를 불러오는데 더 적합한 코드는 `this.setState(current => ({count: current.count + 1}));`야
> 이유는
