package kr.co.service;

import kr.co.vo.signUpVO;

public interface signUpService {

	// 회원가입
	public void register(signUpVO vo) throws Exception;
}
