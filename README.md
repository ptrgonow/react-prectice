# 프교수님의 리액트 교보재

#### - Patrick

***

#### React lifeCycle

###### 리액트 컴포넌트의 생명주기

    - Mount : 컴포넌트 생성 시점 (init)
    - Update : 컴포넌트 업데이트 시점
    - Unmount : 컴포넌트 소멸 시점 (destroy)

###### 참조

[react-lifecycle](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

***

# React Hook

###### state와 lifecycle 기능에 갈고리(Hook)를 걸어,
###### 원하는 시점에 정해진 function을 실행 되게 하는 것


    - useState : 상태 관리

    - useEffect : 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 작업.
                  rander 이후에 사용되어야 함. (Update시 실행됨)
                  최적화에 유리한 부분 (업데이트 되지 않는 부분은 랜더하지 않음.)



+ ## useState
###### State(상태) : 시스템이나 컴포넌트가 특정 시점에 가지고 있는 정보.

```javascript

const [count, setCount] = useState(0);

```
시스템의 작동을 결정하는 데이터와 메타데이터를 포함하며, 다양한 형태로 존재할 수 있고,
시스템의 작동 방식에 따라 그 저장과 관리 방법이 달라질 수 있다.

***

+ ## useForm
