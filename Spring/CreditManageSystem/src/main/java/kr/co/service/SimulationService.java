package kr.co.service;

import java.util.List;

import kr.co.vo.CreditVO;
import kr.co.vo.CriteriaVO;

public interface SimulationService {
	//¡πæ˜±‚¡ÿ
	public List<CriteriaVO> criteria(int admissionYear) throws Exception;
	
	//√ÎµÊ«–¡°
	public List<CreditVO> credit(String studentId) throws Exception;
	
	//∆Ú±’∆Ú¡°
	public float gpa(String studentId) throws Exception;

}
