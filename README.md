# 졸업학점 관리 시스템

## 프로젝트 소개
공학인증으로 인해 졸업 요건이 까다로운 IT정보공학과 졸업 학점 관리 웹 서비스입니다.

## 기능
|기능|세부 기능|---|
|:---:|---|---|
|이수 과목 관리|- 과목 검색<br>- 과목 추가<br>- 과목 삭제<br>- 이수 상태 저장|- 이수 구분(전필, 전선, 일선, 공학인증필수, 교양)<br>- 공학 구분(BSM, 전문 교양, 공학 주제, 설계)|
|졸업 시뮬레이션|- 과목 검색<br>- 과목 추가<br>- 과목 삭제<br>- 졸업 시뮬레이션 결과 보기|- 이수 구분별 최소 학점 이상 이수 시 만족, 미이수 시 불만족 표시<br>- 선후수 만족 여부 표시<br>- 예상 총 평점, 현재 총 평점 표시|
|회원가입 및 로그인|- 회원가입<br>- 로그인||
  
## 개발 환경
- ReactJS, React Bootstrap
- Spring
- Oracle
  
## ERD
![KakaoTalk_20220123_191040139](https://user-images.githubusercontent.com/45174177/199898786-5fb35da5-2342-4d65-b56d-7b17ef4bff27.png)
  
## 구현 화면
### 홈 화면
<img width="900" src="https://user-images.githubusercontent.com/45174177/199899723-2665ccff-17c5-46d1-9d11-64ff5006fb25.png">
  
### 이수 과목 관리 화면
<img width="900" src="https://user-images.githubusercontent.com/45174177/199899777-02a84ef0-76e1-40f4-a382-e36d908a275b.png">
  
### 이수 과목 추가 화면
<img width="900" src="https://user-images.githubusercontent.com/45174177/199902882-19aa1759-bd20-4e34-8929-35fb23cd5520.png">
  
### 졸업 시뮬레이션 화면
<img width="900" src="https://user-images.githubusercontent.com/45174177/199900034-213eac03-4dd6-4406-898c-cab2098c4e61.png">
  
### 졸업 시뮬레이션 결과 화면
<img width="900" src="https://user-images.githubusercontent.com/45174177/199902474-4785d139-0e2b-4fc3-b56f-1b87a33be40d.png">
  
### 로그인 화면
<img width="900" src="https://user-images.githubusercontent.com/45174177/199900086-01e9cfe7-5ec9-49ab-8afd-47ec0e961ca0.png">
  
### 회원가입 화면
<img width="900" src="https://user-images.githubusercontent.com/45174177/199900115-19b325ac-f91d-4489-828b-cbed126cc7a2.png">

### 개선할 점
- DB에 없는 과목을 직접 입력할 때, Primary key 설정 문제를 해결하지 못해 기능 구현을 하지 못 했다.
