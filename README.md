# JoyFilm-Server

## 1. Giới thiệu

- JoyFilm-Server là một phần quan trọng của hệ thống JoyFilm, chịu trách nhiệm cung cấp dữ liệu phim và API cho trang web JoyFilm.

- Back-end và Front-end được phát triển theo cơ sở **MERN Stack** (MongoDB, ExpressJS, React, NodeJS).

- Link Website: [JoyFilm](https://myjoyfilm.vercel.app/)

- Repository Front-end (MERN Stack & NextJS): [JoyFilm - https://github.com/dothenghia/**JoyFilm**](https://github.com/dothenghia/JoyFilm)

- Repository Front-end (MERN Stack): [JoyFilm-Web - https://github.com/dothenghia/**JoyFilm-Web**](https://github.com/dothenghia/JoyFilm-Web)

## 2. Tech Stack

### Back-end

- NodeJS

- ExpressJS

### Database

- MongoDB

### Deploy

- Netlify (Back-end)
    
## 3. API

### Danh sách phim cho Trang chủ

`GET` https://<span></span>joyfilm-server.netlify.app/.netlify/functions/actions

### Danh sách phim Mới cập nhật

`GET` https://<span></span>joyfilm-server.netlify.app/.netlify/functions/actions/new/**<span style="color:red">${page}</span>**

Ví dụ: https://<span></span>joyfilm-server.netlify.app/.netlify/functions/actions/new/**<span style="color:red">1</span>**

### Danh sách phim Lẻ

`GET` https://<span></span>joyfilm-server.netlify.app/.netlify/functions/actions/single/**<span style="color:red">${page}</span>**

Ví dụ: https://<span></span>joyfilm-server.netlify.app/.netlify/functions/actions/single/**<span style="color:red">1</span>**

### Danh sách phim Bộ

`GET` https://<span></span>joyfilm-server.netlify.app/.netlify/functions/actions/series/**<span style="color:red">${page}</span>**

Ví dụ: https://<span></span>joyfilm-server.netlify.app/.netlify/functions/actions/series/**<span style="color:red">1</span>**

### Danh sách phim Hoạt hình

`GET` https://<span></span>joyfilm-server.netlify.app/.netlify/functions/actions/cartoon/**<span style="color:red">${page}</span>**

Ví dụ: https://<span></span>joyfilm-server.netlify.app/.netlify/functions/actions/cartoon/**<span style="color:red">1</span>**

### Danh sách phim Chiếu rạp

`GET` https://<span></span>joyfilm-server.netlify.app/.netlify/functions/actions/theater/**<span style="color:red">${page}</span>**

Ví dụ: https://<span></span>joyfilm-server.netlify.app/.netlify/functions/actions/theater/**<span style="color:red">1</span>**

### Danh sách phim theo Tìm kiếm

`GET` https://<span></span>joyfilm-server.netlify.app/.netlify/functions/actions/search?name=**<span style="color:red">${string}</span>**

Ví dụ: https://<span></span>joyfilm-server.netlify.app/.netlify/functions/actions/search?name=**<span style="color:red">harry%20potter</span>**

## 4. Thông tin liên hệ

- Facebook : [Thế Nghĩa](https://www.facebook.com/thenghia.80)

- Email : [tnghia.dev@gmail.com](mailto:tnghia.dev@gmail.com)

- Github : [dothenghia](https://github.com/dothenghia)
