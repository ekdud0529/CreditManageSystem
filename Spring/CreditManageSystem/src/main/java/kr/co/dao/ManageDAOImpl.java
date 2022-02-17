package kr.co.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import kr.co.vo.ManageVO;
import kr.co.vo.SearchVO;

@Repository
public class ManageDAOImpl implements ManageDAO {
	
	@Inject
	private SqlSession sqlSession;
	
	@Override
	public List<ManageVO> search(SearchVO searchVO) throws Exception {
		return sqlSession.selectList("CreditMSMapper.search", searchVO);
	}
}
