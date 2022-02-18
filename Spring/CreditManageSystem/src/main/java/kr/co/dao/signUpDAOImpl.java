package kr.co.dao;

import javax.inject.*;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import kr.co.vo.signUpVO;

@Repository
public class signUpDAOImpl implements signUpDAO{
	@Inject
	private SqlSession sql;

	@Override
	public void register(signUpVO vo) throws Exception {
		sql.insert("MemberMapper.register", vo);
	}
}
