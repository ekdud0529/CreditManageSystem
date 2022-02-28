package kr.co.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import kr.co.vo.ManageVO;

@Repository
public class ManageDAOImpl implements ManageDAO {
	
	@Inject
	private SqlSession sqlSession;
	
	@Override
	public List<ManageVO> search(ManageVO manageVO) throws Exception {
		return sqlSession.selectList("ManageMapper.search", manageVO);
	}
	
	@Override
	public List<ManageVO> getTakes() throws Exception {
		return sqlSession.selectList("ManageMapper.getTakes");
	}
	
	@Override
	public void insertTakes(List<ManageVO> manageVO) throws Exception {
		sqlSession.insert("ManageMapper.insertTakes", manageVO);
	}
	
	@Override
	public void deleteTakes(List<ManageVO> manageVO) throws Exception {
		sqlSession.delete("ManageMapper.deleteTakes", manageVO);
	}
}
