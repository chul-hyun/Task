1. flex-grow 규칙
  - flex-grow 가 설정되어있으면 그대로 사용
  - parnet가 column
    - height가 설정되지 않음
      - 1
    - else
      - undefined
  - else(parent가 row)
    - width가 설정되지 않음
      - 1
    - else
      - undefined

위 규칙을 통해 우선순위를 
1. flex-grow 가 설정되어있으면 그대로 사용
2. height (row 일때는 width) 가 설정되어있으면 그대로 사용
3. flex-grow = 1

2. 