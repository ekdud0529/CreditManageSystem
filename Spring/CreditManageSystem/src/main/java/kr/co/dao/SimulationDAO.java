package kr.co.dao;

import java.util.List;

import kr.co.vo.SimulationVO;

public interface SimulationDAO {
	//Á¹¾÷±âÁØ
	public List<SimulationVO> criteria(int admissionYear) throws Exception;
}
