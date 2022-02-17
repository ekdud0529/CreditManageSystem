package kr.co.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import kr.co.vo.SimulationVO;

@Repository
public class SimulationDAOImpl implements SimulationDAO{
	
	@Inject
	private SqlSession sqlSession;

	@Override
	public List<SimulationVO> criteria(int admissionYear) throws Exception {
		return sqlSession.selectList("SimulationMapper.criteria", admissionYear);
	}
	
}
