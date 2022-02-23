package kr.co.service;

import kr.co.vo.memberVO;

public interface memberService {

	// 회원가입
	public void register(memberVO vo) throws Exception;
	
	// 로그인
	public memberVO logIn(memberVO vo) throws Exception;
}
