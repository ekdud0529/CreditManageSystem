package kr.co.service;

import kr.co.vo.MemberVO;

public interface MemberService {

	public void register(MemberVO vo) throws Exception;
	
	public MemberVO logIn(MemberVO vo) throws Exception;
}
