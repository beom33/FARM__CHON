# 농촌 체험 예약 플랫폼

## 목차

- [1. 프로젝트 소개](#1-프로젝트-소개)
    * [개요](#개요)
    * [기획배경 및 기대효과](#기획배경-및-기대효과)
- [팀원 소개](#팀원-소개)
- [역할 분담](#역할-분담)
- [2. 기술 스택](#2-기술-스택)
- [3. UserFlow 작성](#3-UserFlow-작성)
- [4. 기능 명세서](#4-기능-명세서)
- [5. ERD](#5-ERD)
- [6. 화면설계](#6-화면설계)
- [7. 프로젝트 일정표](#7-프로젝트-일정표표)

## 👩‍🏫1. 프로젝트 소개

#### 개발기간
2024/08/01 ~ 2024/08/30

### 개요

최근 분석에 따르면 2021년 이후부터 국민들의 국내 여행 수요가 증가하였다고 합니다. 특히 코로나19 이후 감염 위험이 적은 '농촌'이 떠오르며 '촌캉스(농촌 + 바캉스)'와 같은 여행 트렌드가 주목받았습니다. 또한 농촌 여행을 통해 휴식, 경험, 학습을 중시하는 런케이션(Learning + Vacation)을 추구하는 경향이 강해졌으며, '체험', '경험', '힐링'과 같은 키워드가 높은 언급량을 보였습니다. 이에 따라 농촌 여행도 새로운 트렌드에 맞춰 끊임없이 변화하고 있으며, 변화하는 트렌드를 반영한 농촌 지역 활성화를 위해 본 프로젝트를 진행하게 되었습니다.

### 기대효과 및 활용 분야

- 변화하는 농촌 여행 트렌드에 따라 체험 정보와 주변 여행지, 지역별 축제에 관한 정보를 다양하게 제공할 수 있습니다.
- 농촌 체험 정보 제공뿐만 아니라 체험 예약 기능을 포함하여 체험을 예약하고 실제 방문까지 이어질 수 있도록 합니다.
- 농촌 방문객 증가를 통해 관광 산업을 발전시키고, 새로운 일자리 창출과 더불어 농촌 지역 활성화를 도모합니다.
- 관광객 유입으로 인한 농촌 지역 인프라 개선을 기대합니다.
- 농촌의 다양한 체험 활동을 통해 농촌 문화의 보존뿐만 아니라 농촌 자원의 활용도를 증가시킵니다.
- 농촌으로의 여행을 통해 바쁜 삶 속에서 휴식과 힐링, 그리고 평소 접하기 어려운 다양한 경험을 제공합니다.

## 👨‍👩‍👧‍👦 팀원 소개
|<img src="https://avatars.githubusercontent.com/u/163953938?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/132132524?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/136600208?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/154653812?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/163940532?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/164159618?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/163953803?v=4" width="150" height="150"/>|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|[@hyeon12](https://github.com/hyeon12)|[@heyejiyang](https://github.com/heyejiyang)|[@kth232](https://github.com/kth232)|[@soeunl](https://github.com/soeunl)|[@siwon9](https://github.com/siwon9)|[@Yunda0204](https://github.com/Yunda0204)|[@beom33](https://github.com/beom33)|
## 역할 분담

| 개발자 | |
|-----------|---------|
| 서정현 |축제 상세페이지(API활용), 지도 이미지맵 클릭시 지역별 축제 조건검색 기능, 내 위치 기반 주변 여행지 검색, 마이페이지, 회원 수정/탈퇴, 게시글 작성 디자인, 회원가입/로그인 디자인, 마이페이지 디자인|
| 양예지 |메인페이지 게시판 목록 조회, 게시판 - 게시글 및 파일 업로드, 다운로드 기능, 게시글 검색/정렬기능, 관리자페이지 - 회원 조회/수정/삭제, 게시글 분류별 조회, 체험 예약 조회 및 관리 |
| 강태현 |농촌 체험 정보 조회 및 체험 세부 정보 조회, 조건별 조회(API활용), 농촌 체험 예약/확인/취소 기능, 찜하기 기능, 예약페이지 달력 구현 및 디자인, 에러페이지 및 디자인|
| 이소은 | 프로젝트 총괄, 디자인 총괄, 여행지 세부 정보 및 주변 여행지 조회, 조건별 조회(API활용), 찜하기 기능, 마이페이지 찜하기 목록띄우기, 메인페이지 구현, 로딩바 구현, 여행 페이지, 게시판 디자인 |
| 최시원 |메인페이지 공통 디자인 및 설계|
| 이진표 | 농촌 체험 예약 기능 구현, 예약 상태 조회, 예약 현황 조회 및 취소 기능, 중복 예약 불가 처리, 예약 처리 css|
| 유준범 |회원가입, 로그인 페이지 구현, 이메일 인증 기능 구현, 프로필 이미지 업로드 기능, 회원 프로필 조회 및 수정 |

[역할분담 상세](https://topaz-basketball-d8b.notion.site/b272ee666204492684d1f0990ff2b3be)

## 💻2. 기술 스택

✅ Programming Languages
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white">

✅ Front-end Development <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white">
<img src="https://img.shields.io/badge/Thymeleaf-005F0F?style=for-the-badge&logo=Thymeleaf&logoColor=white">

✅ Back-end Development <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white">
<img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white">
<img src="https://img.shields.io/badge/Spring Security-6DB33F?style=for-the-badge&logo=Spring Security&logoColor=white">
<img src="https://img.shields.io/badge/gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white">

✅Database <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://img.shields.io/badge/oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white">

✅Devops <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://aws.amazon.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" width="40" height="40"/> </a>
&nbsp;&nbsp;<a href="https://www.jenkins.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" alt="jenkins" width="40" height="40"/> </a>

## 3. UserFlow 작성

![image](https://github.com/user-attachments/assets/39ea9435-2642-42a5-af24-4dea62b39642)


## 4. 기능 명세서
📄[기능명세서](https://www.notion.so/c9d367c479054e918154883713dd2164?pvs=4)

![image](https://github.com/user-attachments/assets/f78af26e-325d-4183-ae36-0e49aaf2a42f)


![image](https://github.com/user-attachments/assets/2484ded7-5ddc-4fb5-b375-c28ac8bf6f71)


## 5. ERD
![farmstival](https://github.com/user-attachments/assets/39925f85-bc8f-43de-bda7-742b7a618104)

## 6. 화면설계

- 메인페이지
  
![GIFMaker_me (2)](https://github.com/user-attachments/assets/1069fa6f-92af-4669-b86c-14346694b74e)

- 예약 페이지

![GIFMaker_me (3)](https://github.com/user-attachments/assets/475ae6cb-abeb-472c-a796-05dc64ff681c)

- 여행, 축제 페이지
  
![GIFMaker_me (4)](https://github.com/user-attachments/assets/9c26eea6-149a-4184-9d11-9282549c7466)

- 게시판
  
![GIFMaker_me (5)](https://github.com/user-attachments/assets/cd18abdf-d335-45b3-888a-72d9b2c3b118)

- 관리자

![GIFMaker_me (6)](https://github.com/user-attachments/assets/cb2150f3-778c-4175-aabd-8aae39c7d9c4)


## 7. 프로젝트 일정표

![image](https://github.com/user-attachments/assets/dd30110d-de91-4d6f-812c-5edb57c9575d)

![image](https://github.com/user-attachments/assets/a4d9c57b-3176-4180-8ef6-5403222f6e16)

### 추가 자료
[회의록](https://www.notion.so/27f886bdbc9e49a1888fb0adee7c154e?v=0bb8fce285774602a4273a9136e040fe&pvs=4)

[발표ppt](https://github.com/user-attachments/files/16869152/ppt_.pdf)

<!--

**Here are some ideas to get you started:**

🙋‍♀️ A short introduction - what is your organization all about?
🌈 Contribution guidelines - how can the community get involved?
👩‍💻 Useful resources - where can the community find your docs? Is there anything else the community should know?
🍿 Fun facts - what does your team eat for breakfast?
🧙 Remember, you can do mighty things with the power of [Markdown](https://docs.github.com/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
-->
