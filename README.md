## 노마드 코더 리엑트 강의 예제 코드

[여기서 코드 확인](https://academy.nomadcoders.co/courses/216871/lectures/10881302)

## 중요 개념

### 3.1 All you need to know about State

> setState 호출할 때마다 class 컴포넌트의 render가 호출됨

> `this.setState({count: this.state.count - 1});` 이 코드는 멍청해. 현재의 상태를 불러오는데 더 적합한 코드는 `this.setState(current => ({count: current.count + 1}));`야, 이유는 성능문제이지

### 3.2 Component Life Cycle

1. render > componentDidMount
2. setState > render > componentDidUpdate

### 4.0 Fetching Movies from API

> "async await"
> `this.setState({movies: movies});` == `his.setState({movies});` 신택스 슈가가 많네..
> state가 바뀌면 컴포넌트가 다시 실행된다. 그렇다면 컴포넌트에서 state로 분기를 주면 state 대로 화면의 케이스를 줄 수 있다. (트리거가 state)
