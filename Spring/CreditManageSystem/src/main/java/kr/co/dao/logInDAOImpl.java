package kr.co.dao;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import kr.co.vo.signUpVO;

@Repository
public class logInDAOImpl implements logInDAO{
	@Inject
	private SqlSession sql;
	
	@Override
	public signUpVO login(signUpVO vo) throws Exception{
		return sql.selectOne("creditMSMapper.login", vo);
	}
}
