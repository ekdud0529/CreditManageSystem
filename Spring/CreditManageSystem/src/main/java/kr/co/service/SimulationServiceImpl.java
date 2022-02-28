package kr.co.service;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.json.simple.JSONObject;
import org.springframework.stereotype.Service;

import kr.co.dao.SimulationDAO;
import kr.co.vo.CreditVO;
import kr.co.vo.CriteriaVO;
import kr.co.vo.ManageVO;
import kr.co.vo.OrderVO;

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

	//평균평점
	@Override
	public float gpa(String studentId) throws Exception {
		return dao.gpa(studentId);
	}

	//선후수체계
	@Override
	public List<OrderVO> order(int year, List<ManageVO> takes) throws Exception {
		List<OrderVO> order = dao.order(year);
		List<OrderVO> remove = new ArrayList<>();
		
		for(int i = 0;i<order.size();i++) {
			String preId = order.get(i).getPreCourseId();
			String postId = order.get(i).getCourseId();
			ManageVO preCourse = null, postCourse = null;
			for(ManageVO t : takes) {
				if(t.getCourse_id().equals(preId)) preCourse = t;
				if(t.getCourse_id().equals(postId)) postCourse = t;
				if(preCourse!=null && postCourse!=null) break;
			}
			if(preCourse!=null && postCourse!=null) {
				if(preCourse.getYear()<postCourse.getYear() || (preCourse.getYear()==postCourse.getYear() && preCourse.getSemester()<postCourse.getSemester())) {
					order.get(i).setCheck(true);
				}
			}else if(preCourse!=null) {
				order.get(i).setCheck(true);
			}else if(preCourse==null && postCourse==null) {
				remove.add(order.get(i));
			}
		}
		
		order.removeAll(remove);
		return order;
	}

}
