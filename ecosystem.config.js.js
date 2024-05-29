module.exports = {
  apps: [
    {
      name: 'kanban', // 애플리케이션 이름
      script: './app.js', // 실행할 메인 파일
      instances: 1, // 클러스터 모드 사용 시 생성할 인스턴스 수
      autorestart: true, // 애플리케이션이 종료된 경우 자동 재시작
      watch: false, // 파일 변경 시 재시작 여부 (true/false 또는 "경로")
      max_memory_restart: '1G', // 메모리 사용량이 1GB를 초과할 경우 재시작
      env: {
        NODE_ENV: 'development', // 개발 환경 설정
      },
      env_production: {
        NODE_ENV: 'production', // 프로덕션 환경 설정
      },
    },
  ],
};
