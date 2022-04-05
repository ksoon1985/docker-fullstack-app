## 도커 허브에서 mysql 베이스 이미지를 가져옵니다.
FROM mysql:5.7

## my.cnf 설정을 덮어씌웁니다.
## ADD : COPY와 같은 기능을하지만 
## 원격리소스를 다운로드하고 TAR파일도 추출 가능
ADD ./my.cnf /etc/mysql/conf.d/my.cnf
