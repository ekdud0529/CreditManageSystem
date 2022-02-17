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

	//졸업기준
	@Override
	public List<CriteriaVO> criteria(int admissionYear) throws Exception {
		return dao.criteria(admissionYear);
	}

	//취득학점
	@Override
	public List<CreditVO> credit(String studentId) throws Exception {
		List<CreditVO> tmp = dao.credit(studentId);
		List<CreditVO> result = new ArrayList<>();
		int liberalTotal = 0;
		int etcTotal = 0;
		int designTotal = 0;
		int takeTotal = 0;
		for(CreditVO c : tmp) {
			switch(c.getCode().substring(0,3)) {
			case "011":
				liberalTotal += c.getTotal();
				break;
			case "014":
			case "015":
				etcTotal += c.getTotal();
				break;
			case "023":
				designTotal += c.getTotal();
				break;
			}
		}
		takeTotal = liberalTotal + tmp.get(4).getTotal() + tmp.get(5).getTotal() + etcTotal;
		CreditVO liberal = new CreditVO(studentId,"011","교양",liberalTotal);
		CreditVO etc = new CreditVO(studentId,"014","공필/일선",etcTotal);
		CreditVO design = new CreditVO(studentId,"023","설계",designTotal);
		CreditVO take = new CreditVO(studentId,"01","취득학점",takeTotal);
		result.add(take);
		result.add(liberal);
		result.addAll(tmp.subList(0, 4));
		result.addAll(tmp.subList(4, 6));
		result.add(etc);
		result.addAll(tmp.subList(6, 10));
		result.add(design);
		result.addAll(tmp.subList(10, 14));
		
		return result;
	}

}
