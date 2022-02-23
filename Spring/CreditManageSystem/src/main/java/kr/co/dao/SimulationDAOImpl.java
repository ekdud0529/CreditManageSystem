package kr.co.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import kr.co.vo.CreditVO;
import kr.co.vo.CriteriaVO;
import kr.co.vo.OrderVO;

@Repository
public class SimulationDAOImpl implements SimulationDAO{
	
	@Inject
	private SqlSession sqlSession;

	//졸업기준
	@Override
	public List<CriteriaVO> criteria(int admissionYear) throws Exception {
		return sqlSession.selectList("SimulationMapper.criteria", admissionYear);
	}

	//취득학점
	@Override
	public List<CreditVO> credit(String studentId) throws Exception {
		return sqlSession.selectList("SimulationMapper.credit", studentId);
	}

	//평균평점
	@Override
	public float gpa(String studentId) throws Exception {
		return sqlSession.selectOne("SimulationMapper.gpa", studentId);
	}

	//선후수체계
	@Override
	public List<OrderVO> order(int year) throws Exception {
		return sqlSession.selectList("SimulationMapper.order", year);
	}
}
