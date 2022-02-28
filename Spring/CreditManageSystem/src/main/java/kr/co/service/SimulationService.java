package kr.co.service;

import java.util.List;

import kr.co.vo.CreditVO;
import kr.co.vo.CriteriaVO;
import kr.co.vo.ManageVO;
import kr.co.vo.OrderVO;

public interface SimulationService {
	//졸업기준
	public List<CriteriaVO> criteria(int admissionYear) throws Exception;
	
	//취득학점
	public List<CreditVO> credit(String studentId) throws Exception;
	
	//평균평점
	public float gpa(String studentId) throws Exception;
	
	//선후수체계
	public List<OrderVO> order(int year, List<ManageVO> takes) throws Exception;
	
	//졸업가능여부
	public List<String> availability(String studentId, List<ManageVO> takes) throws Exception;

}
