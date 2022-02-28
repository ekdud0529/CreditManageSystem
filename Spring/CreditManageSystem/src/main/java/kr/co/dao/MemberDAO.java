package kr.co.dao;

import kr.co.vo.MemberVO;

public interface MemberDAO {
	
	// 로그인
	public MemberVO logIn(MemberVO vo) throws Exception;
	
	// 회원가입
	public void register(MemberVO vo) throws Exception;
}