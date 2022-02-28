package kr.co.dao;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import kr.co.vo.MemberVO;

@Repository
public class MemberDAOImpl implements MemberDAO{
	
	@Inject
	private SqlSession sql;
	
	// 로그인
	@Override
	public MemberVO logIn(MemberVO vo) throws Exception {
		return sql.selectOne("MemberMapper.login", vo);
	}
	
	// 회원가입
	@Override
	public void register(MemberVO vo) throws Exception {
		sql.insert("MemberMapper.register", vo);
	}
}
