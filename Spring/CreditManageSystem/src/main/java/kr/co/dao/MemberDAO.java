package kr.co.dao;

import kr.co.vo.MemberVO;

public interface MemberDAO {
	
	public MemberVO logIn(MemberVO vo) throws Exception;
	
	public void register(MemberVO vo) throws Exception;
}
