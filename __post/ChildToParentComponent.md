---
title: "자식 컴포넌트에서 부모 컴포넌트로 데이터 전달 방법"
description: "부모 컴포넌트에서 자식으로의 데이터 전달 방법과 그 반대의 경우 살펴보기"
date: "2023-07-10"
slug: "ChildToParentComponent"
tags: ["Job"]
---

### 부모 컴포넌트 → 자식 : props 이용하면 됨.

    📌 자식 컴포넌트의 데이터를 부모 컴포넌트로 끌어올려야 하는 상황이 종종 생긴다.

    - Case1
        - useState 를 통해 전달받을 데이터를 저장할 변수를 선언, props로 setter를 전달한다.

```jsx
const Parent = (props) => {
  const [data, setData] = useState("");
  return (
    <>
      <div>{data}</div>
      <Child setData={setData} />
    </>
  );
};

const Child = (props) => {
  return (
    <>
      <button onClick={() => props.setData("data from child")}>
        send data to parent
      </button>
    </>
  );
};
```

    - Case2
        - 부모 컴포넌트에서 함수를 정의하고 자식 컴포넌트에  props로 전달 → 데이터를 함수의 인자로 넣음.

```jsx
function App() {
  const parentFunction = (x) => {
    console.log(x);
  };

  return <Child parentFunction={parentFunction}></Child>;
}

function Child({ parentFunction }) {
  const [data, setData] = useState(2);

  parentFunction(data);

  return <div>Child</div>;
}
```

## 하.지.만

⚠️ 유지보수 어려움

상위 하위 컴포넌트가 많다면 prop drilling이 발생하거나 유지보수가 어려울 가능성

⚠️ 불필요한 렌더링 발생

수많은 상태 변경 과정이 일어나기 때문에

만약 부모 → 자식 관계가 간단하고 작은 데이터라면? (개발자의 판단 영역)
