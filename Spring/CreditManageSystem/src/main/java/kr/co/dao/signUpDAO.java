package kr.co.dao;

import kr.co.vo.signUpVO;

public interface signUpDAO {
	
	// 회원가입
	public void register(signUpVO vo) throws Exception;
}
