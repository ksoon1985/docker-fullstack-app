## 베이스 이미지를 도커 허브에서 가져옴.
FROM node:alpine 
## 해당 애플의 소스코드들이 들어감.
WORKDIR /app
## package.json 파일 WORKDIR ./에(/app) 복사 
COPY package.json ./
## package.json 종속들 install
RUN npm install
## frontend 로컬파일 (./ 에 있는) WORKDIR ./(/app) 에 복사
COPY ./ ./
## 이 컨테이너가 실행될 때 같이 실행 할 명령어 지정 
CMD ["npm","run","start"]
