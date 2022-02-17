package kr.co.service;

import java.util.List;

import kr.co.vo.SimulationVO;

public interface SimulationService {
	
	public List<SimulationVO> criteria(int admissionYear) throws Exception;

}
