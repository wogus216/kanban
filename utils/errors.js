const errors = {
  /* USER */
  // 회원가입
  E00000: { code: 'E00000', message: '이미 가입된 이메일 입니다.' },
  E00001: { code: 'E00001', message: '동일한 비밀번호를 입력해 주세요.' },
  E00009: { code: 'E00009', message: '회원가입 실패' },
  // 로그인, jwt 발급
  E00010: { code: 'E00010', message: '존재하지 않는 사용자 입니다.' },
  E00011: {
    code: 'E00011',
    message: '로그인 실패(이메일 또는 패스워드 불일치)',
  },
  E00019: { code: 'E00019', message: '로그인 실패' },
  // 프로필 조회
  E00029: { code: 'E00029', message: '프로필 조회 실패' },
  // 프로필 수정
  E00039: { code: 'E00039', message: '프로필 수정 실패' },
  // 비밀번호 변경(인증 후)
  E00040: { code: 'E00040', message: '기존 비밀번호를 확인해 주세요.' },
  E00041: { code: 'E00041', message: '기존 비밀번호와 동일합니다.' },
  E00042: { code: 'E00042', message: '비밀번호 확인을 확인해 주세요.' },
  E00049: { code: 'E00049', message: '비밀번호 변경 실패' },
  // 멘토 조회
  E00059: { code: 'E00059', message: '멘토 조회 실패' },
  // 멘티 조회
  E00069: { code: 'E00069', message: '멘티 조회 실패' },
  // 회원 탈퇴
  E00079: { code: 'E00079', message: '회원탈퇴 실패' },
  // 비밀번호 유실
  E00089: { code: 'E00089', message: '비밀번호 유실 실패' },
  // 비밀번호 변경(인증 전)
  E00090: { code: 'E00090', message: '비밀번호가 일치하는지 확인해 주세요.' },
  E00099: { code: 'E00099', message: '비밀번호 변경 실패' },

  /* EVENT */
  // 모든 일정 조회(Schedule)
  E00109: { code: 'E00109', message: '모든 일정 조회 실패' },
  // 이벤트 조회
  E00119: { code: 'E00119', message: '이벤트 조회 실패' },
  // 이벤트 생성
  E00129: { code: 'E00129', message: '이벤트 생성 실패' },
  // 이벤트 수정
  E00139: { code: 'E00139', message: '이벤트 수정 실패' },
  // 이벤트 삭제
  E00149: { code: 'E00149', message: '이벤트 삭제 실패' },

  /* VMOST ART */
  // VMOST ART 조회(단일)
  E00309: { code: 'E00309', message: 'VMOST ART 조회 실패' },
  // VMOST ART 조회(다중)
  E00319: { code: 'E00319', message: 'VMOST ART 조회 실패' },
  // VMOST ART 생성
  E00329: { code: 'E00329', message: 'VMOST ART 생성 실패' },
  // VMOST ART 수정
  E00339: { code: 'E00339', message: 'VMOST ART 수정 실패' },
  // VMOST ART 삭제
  E00349: { code: 'E00349', message: 'VMOST ART 삭제 실패' },

  /* MIDDLEWARE */
  // user
  E01000: { code: 'E01000', message: '계정 유무 체크 미들웨어' },
  E01001: { code: 'E01001', message: '회원가입 미들웨어' },
  E01002: { code: 'E01002', message: '로그인 미들웨어' },
  E01003: { code: 'E01003', message: '프로필 수정 미들웨어' },
  E01004: { code: 'E01004', message: '비밀번호 변경(인증 후) 미들웨어' },
  E01005: { code: 'E01005', message: '비밀번호 유실 미들웨어' },
  E01006: { code: 'E01006', message: '비밀번호 변경(인증 전) 미들웨어' },
  // event
  E01100: { code: 'E01100', message: '이벤트 생성 미들웨어' },
  E01101: { code: 'E01101', message: '이벤트 수정 미들웨어' },
  // vmost art
  E01300: { code: 'E01300', message: 'VMOSTART 생성 미들웨어' },
  E01301: { code: 'E01301', message: 'VMOSTART 수정 미들웨어' },
};

module.exports = { errors };
