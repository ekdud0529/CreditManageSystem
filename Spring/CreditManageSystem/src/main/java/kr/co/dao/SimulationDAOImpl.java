package kr.co.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import kr.co.vo.CreditVO;
import kr.co.vo.CriteriaVO;

@Repository
public class SimulationDAOImpl implements SimulationDAO{
	
	@Inject
	private SqlSession sqlSession;

	//��������
	@Override
	public List<CriteriaVO> criteria(int admissionYear) throws Exception {
		return sqlSession.selectList("SimulationMapper.criteria", admissionYear);
	}

	//�������
	@Override
	public List<CreditVO> credit(String studentId) throws Exception {
		return sqlSession.selectList("SimulationMapper.credit", studentId);
	}
	
}
