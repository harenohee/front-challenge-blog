---
title: "css position 속성에 대하여"
description: "position: 요소를 배치하는 방법에 대해 정의하는 속성"
date: "2023-08-01"
slug: "CSSPosition"
tags: ["CSS"]
---

**position**

- **요소를 배치하는 방법**에 대해 정의하는 속성
- top, bottom, left, right으로 최종 위치 결정

**속성 값**

1. static: `기본값` 일반적인 문서 흐름에 따라 요소를 배치
2. relative: 일반적인 흐름에 따라 배치하되, 상하좌우 `offset` 적용가능
   </br>a. offset 값을 주면 정상적인 원래 위치로부터 지정하는 양만큼 다시 위치를 잡음
3. absolute: 일반적인 문서 흐름에서 배제. 가장 가까운 position요소에 대해 상대적 `offset`을 적용
4. sticky: 일반적인 문서 흐름에서 배제. 스크롤되는 가장 가까운 요소에 `offset` 적용

[참고블로그](https://nonipc.com/entry/CSS-position-relative-%EC%99%80-absolute-%EC%B0%A8%EC%9D%B4)
