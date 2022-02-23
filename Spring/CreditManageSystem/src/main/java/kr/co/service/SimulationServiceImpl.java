package kr.co.service;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import kr.co.dao.SimulationDAO;
import kr.co.vo.CreditVO;
import kr.co.vo.CriteriaVO;

@Service
public class SimulationServiceImpl implements SimulationService{
	
	@Inject
	private SimulationDAO dao;

	//¡πæ˜±‚¡ÿ
	@Override
	public List<CriteriaVO> criteria(int admissionYear) throws Exception {
		return dao.criteria(admissionYear);
	}

	//√ÎµÊ«–¡°
	@Override
	public List<CreditVO> credit(String studentId) throws Exception {
		List<CreditVO> result = dao.credit(studentId);
		CreditVO liberal = null, major = null, etc = null, design = null;
		for(CreditVO c : result) {
			if(c.getCode().length()==2) continue;
			switch(c.getCode().substring(0,3)) {
			case "011":
				if(c.getCode().length()==3) {
					liberal = c;
				}else {
					liberal.setTotal(liberal.getTotal()+c.getTotal());
				}
				break;
			case "013":
				if(c.getCode().length()==3) {
					major = c;
				}else {
					major.setTotal(major.getTotal()+c.getTotal());
				}
				break;
			case "014":
			case "015":
				if(c.getCode().length()==3){
					etc = c;
				}else {
					etc.setTotal(etc.getTotal()+c.getTotal());
				}
				break;
			case "023":
				if(c.getCode().length()==3) {
					design = c;
				}else {
					design.setTotal(design.getTotal()+c.getTotal());
				}
				break;
			}
		}
		
		return result;
	}

	//∆Ú±’∆Ú¡°
	@Override
	public float gpa(String studentId) throws Exception {
		return dao.gpa(studentId);
	}

}
