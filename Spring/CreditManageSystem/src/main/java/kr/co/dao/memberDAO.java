package kr.co.dao;

import kr.co.vo.memberVO;

public interface memberDAO {
	
	// 로그인
	public memberVO logIn(memberVO vo) throws Exception;
	
	// 회원가입
	public void register(memberVO vo) throws Exception;
}