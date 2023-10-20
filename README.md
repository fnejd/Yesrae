
# 🎵 YESRAE 노래 추천 프로젝트 (빅데이터 추천)

## 프로젝트 소개

- 프로젝트명: **YESRAE**
- 서비스 특징: 사용자 취향 기반 노래 추천 서비스
- 주요 기능
  - 노래 플레이리스트
  - 유사도 기반 노래 퀴즈 (노맨틀)
  - 노래 이상형 월드컵
  - 이상형 월드컵 결과 바탕의 노래 추천
- 주요 기술
  - Annoy를 이용한 ANN 알고리즘 (노래 추천)
  - OAuth2.0, JWT
  - REST API
- 참조 리소스
  - JPA: 객체와 데이터베이스의 관계를 매핑
  - Querydsl: 쿼리 작성
  - Tailwind CSS: 디자인 전반 적용
  - Material Tailwind: 디자인 전반 적용
- 배포 환경
  <!-- 웹 서비스, 랜딩 페이지, 프로젝트 소개 등의 배포 URL 기입 -->
  - URL: [https://j9a304.p.ssafy.io/](https://j9a304.p.ssafy.io/)


## 프로젝트 상세 설명

### 개발 환경

### Frontend

- React (18)
  - Recoil
- TypeScript (5.2.2)
- Tailwind CSS
- Axios
- pnpm
- Vite
- Node.js (18.17.1)

### Backend

- Java (17)
- Spring Boot (3.1.3)
- Gradle (3.1.3)
- dependencies
  - Spring Security
  - JPA
  - querydsl
  - aws s3
- MySQL (8.0.33)
- Redis (3.0.504)
- Fast API (0.103.1)

### Server

- AWS EC2

## Skills

![사용기술](./img/Yesrae_Skills.jpg)

---

## 소프트웨어 아키텍처

![아키텍쳐](/img/Yesrae_architecture.jpg)

## 팀 소개

<table>
  <tr>
    <td align="center" width="500px">
      <a href="https://github.com/Noopy94" target="_blank">
        <img src="./img/Yesrae_LDH.jpg" alt="이두현 프로필" />
      </a>
    </td>
    <td align="center" width="500px">
      <a href="https://github.com/jvlover" target="_blank">
        <img src="./img/Yesrae_PMH.jpg" alt="박민혁 프로필" />
      </a>
    </td>
    <td align="center" width="500px">
      <a href="https://github.com/mongsuokki" target="_blank">
        <img src="./img/Yesrae_CJH.jpg" alt="최주호 프로필" />
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/Noopy94" target="_blank">
        이두현<br />(Front-end)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/jvlover" target="_blank">
        박민혁<br />(Front-end)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/mongsuokki" target="_blank">
        최주호<br />(Front-end)
      </a>
    </td>
  </tr>
  <tr>
    <td align="center" width="500px">
      <a href="https://github.com/bamtolee" target="_blank">
        <img src="./img/Yesrae_NSH.jpg" alt="노성호 프로필" />
      </a>
    </td>
    <td align="center" width="500px">
      <a href="https://github.com/fnejd" target="_blank">
        <img src="./img/Yesrae_KDH.jpg" alt="김도현 프로필" />
      </a>
    </td>
    <td align="center" width="500px">
      <a href="https://github.com/DUDINGDDI" target="_blank">
        <img src="./img/Yesrae_KMS.jpg" alt="김민식 프로필" />
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/bamtolee" target="_blank">
        노성호<br />(Back-end)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/fnejd" target="_blank">
        김도현<br />(Back-end)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/DUDINGDDI">
        김민식<br />(Back-end)
      </a>
    </td>
  </tr>
</table>

---

## Folder Structure

### BACKEND

```
C:.
├─java
│  └─com
│      └─ssafy
│          └─yesrae
│              ├─common
│              │  ├─exception
│              │  │  ├─article
│              │  │  ├─comment
│              │  │  ├─notification
│              │  │  ├─playlist
│              │  │  ├─song
│              │  │  ├─Template
│              │  │  └─user
│              │  ├─model
│              │  └─util
│              ├─config
│              │  ├─jwt
│              │  │  ├─filter
│              │  │  ├─service
│              │  │  └─util
│              │  ├─login
│              │  │  ├─filter
│              │  │  ├─handler
│              │  │  └─service
│              │  ├─oauth2
│              │  │  ├─handler
│              │  │  ├─service
│              │  │  └─userinfo
│              │  └─security
│              └─domain
│                  ├─article
│                  │  ├─controller
│                  │  ├─dto
│                  │  │  ├─request
│                  │  │  └─response
│                  │  ├─entity
│                  │  ├─repository
│                  │  └─service
│                  ├─comment
│                  │  ├─controller
│                  │  ├─dto
│                  │  │  ├─request
│                  │  │  └─response
│                  │  ├─entity
│                  │  ├─repository
│                  │  └─service
│                  ├─notification
│                  │  ├─controller
│                  │  ├─dto
│                  │  │  ├─request
│                  │  │  └─response
│                  │  ├─entity
│                  │  ├─repository
│                  │  └─service
│                  ├─playlist
│                  │  ├─controller
│                  │  ├─dto
│                  │  │  ├─request
│                  │  │  └─response
│                  │  ├─entity
│                  │  ├─repository
│                  │  └─service
│                  ├─song
│                  │  ├─controller
│                  │  ├─dto
│                  │  │  ├─request
│                  │  │  └─response
│                  │  ├─entity
│                  │  ├─repository
│                  │  └─service
│                  ├─template
│                  │  ├─controller
│                  │  ├─dto
│                  │  │  ├─request
│                  │  │  └─response
│                  │  ├─entity
│                  │  ├─repository
│                  │  └─service
│                  ├─tournament
│                  │  ├─controller
│                  │  ├─dto
│                  │  │  ├─request
│                  │  │  └─response
│                  │  ├─entity
│                  │  ├─repository
│                  │  └─service
│                  └─user
│                      ├─controller
│                      ├─dto
│                      │  ├─request
│                      │  └─response
│                      ├─entity
│                      ├─repository
│                      └─service
└─resources
    └─secret
```

### Crawling

```
C:.
├─java
│  └─com
│      └─ssafy
│          └─yesrae
│              └─crawling
│                  │  CrawlingApplication.java
│                  │
│                  └─domain
│                      └─song
│                          ├─controller
│                          │      SongController.java
│                          │
│                          ├─dto
│                          │  ├─request
│                          │  │      SongRegistPostReq.java
│                          │  │
│                          │  └─response
│                          │          SongFindRes.java
│                          │
│                          ├─entity
│                          │      Song.java
│                          │
│                          ├─repository
│                          │      SongRepository.java
│                          │
│                          └─service
│                                  SongService.java
│                                  SongServiceImpl.java
│
└─resources
        application.yml
```

### FastAPI

```
C:.
│  .env
│  annoy.ann
│  main.py
│  yesrae.log
│
├─api
│  │  song_quiz_api.py
│  │  song_recommend_api.py
│  └─ song_vector_api.py
│
├─config
│  │  log_config.py
│  │  mongodb_config.py
│  │  mysql_config.py
│  └─redis_config.py
│
├─database
│  │  orm.py
│  └─ repository.py
│
├─schema
│  │  request.py
│  └─ response.py
│
├─service
│  │  song_quiz.py
│  │  song_recommend.py
│  └─ song_vector.py
│
└─util
    │  song_analyze.py
    │  song_annoy.py
    └─ song_calculate.py
```

### FRONTEND

```
C:.
├─api
├─assets
│  └─font
├─components
│  ├─common
│  ├─HeaderNav
│  ├─nomantle
│  ├─playercontroller
│  ├─recommend
│  └─tournament
├─pages
│  ├─main
│  ├─nomantle
│  ├─playlist
│  ├─recommend
│  ├─song
│  ├─tournament
│  └─user
└─recoil
    ├─currentpage
    ├─currentsong
    ├─defaultdata
    ├─playlist
    ├─tournament
    └─user
```

### ERD

![ERD](./img/YESRAE_ERD.png)

## 화면

### 메인화면 (플레이 리스트)

- 플레이 리스트 목록을 바로 확인 가능합니다.

![메인화면](/img/Yesrae_메인화면.png)

### 마이페이지

- 마이페이지에서 회원이 좋아요한 플레이 리스트, 등록한 플레이 리스트 확인이 가능합니다.

![마이페이지](/img/Yesrae_마이페이지.PNG)

### 음악 플레이어

- 플레이 리스트 수록된 재생

![음악 플레이어](/img/Yesrae_음악플레이어.PNG)

### 플레이 리스트 등록

- 플레이 리스트 이미지, 제목, 설명, 태그 와 플레이 리스트 노래를 등록할 수 있습니다.

![음악 플레이 리스트 등록](/img/Yesrae_플레이리스트등록.PNG)

### 로그인 페이지

- 카카오 로그인과 구글 로그인이 가능 합니다.

![로그인](/img/Yesrae_로그인페이지.PNG)

### 노래 상세 페이지

- spotify 에서 제공하는 노래 특성 정보들을 확인할 수 있습니다.

![노래상세](/img/Yesrae_노래상세.png)

### 노래 퀴즈 페이지

- 노래 제목을 입력하면 저장되어 있는 곡들 중 해당 제목과 일치하는 가장 유사도가 높은 곡의 정답곡과의 유사도와 유사도 순위 결과가 나타납니다.

![노래상세](/img/Yesrae_노맨틀.png)

### 이상형 월드컵

- 이상형 월드컵 시작 화면입니다. 몇강을 할 것인지 선택이 가능합니다.  


![이상형 월드컵](/img/Yesrae_이상형.png)

- 이상형 월드컵 진행 화면입니다.

![이상형 월드컵 진행](/img/Yesrae_이상형월드컵진행.png)

- 이상형 월드컵 결과 화면에서는 1위에서 4위까지의 결과가 나타납니다.

![이상형 월드컵 결과](/img/Yesrae_이상형월드컵결과.png)

### 노래 추천

- 이상형 월드컵의 1위에서 4위곡들을 바탕으로 총 8곡을 추천합니다.

![노래 추천 진행](/img/Yesrae_추천진행.png)
![노래 추천 결과](/img/Yesrae_노래추천결과.png)
