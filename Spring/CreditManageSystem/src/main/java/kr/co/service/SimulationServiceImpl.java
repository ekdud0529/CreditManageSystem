package kr.co.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import kr.co.dao.SimulationDAO;
import kr.co.vo.SimulationVO;

@Service
public class SimulationServiceImpl implements SimulationService{
	
	@Inject
	private SimulationDAO dao;

	@Override
	public List<SimulationVO> criteria(int admissionYear) throws Exception {
		return dao.criteria(admissionYear);
	}

}
