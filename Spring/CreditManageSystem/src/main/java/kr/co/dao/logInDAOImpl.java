package kr.co.dao;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import kr.co.vo.logInVO;

@Repository
public class logInDAOImpl implements logInDAO{
	
	@Inject
	private SqlSession sql;
	
	@Override
	public logInVO logIn(logInVO vo) throws Exception {
		return sql.selectOne("MemberMapper.login", vo);
	}
}
