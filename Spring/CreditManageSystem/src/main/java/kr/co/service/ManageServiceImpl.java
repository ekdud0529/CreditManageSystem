package kr.co.service;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import kr.co.dao.ManageDAO;
import kr.co.vo.ManageVO;

@Service
public class ManageServiceImpl implements ManageService {

	@Inject
	private ManageDAO dao;
	
	@Override
	public List<ManageVO> search(ManageVO manageVO) throws Exception {
//		String year = searchVO.getYear().equals("전체")?"1=1":"s.year="+searchVO.getYear();
//		String semester = searchVO.getSemester().equals("전체")?"1=1":"s.semester="+searchVO.getSemester();
//		String target_grade = searchVO.getTarget_grade().equals("전체")?"1=1":"s.target_grade="+searchVO.getTarget_grade();
//		String division_cd = searchVO.getDivision_cd().equals("0000")?"1=1":"s.division_cd="+searchVO.getDivision_cd();
//		String title = "c.title like \'%" + searchVO.getTitle() + "%\'";
		String abeekStr = new String("");
		
		if(manageVO.isAbeek_bsm()) { abeekStr += "021|"; }
		if(manageVO.isAbeek_liberal_arts()) { abeekStr += "022|"; }
		if(manageVO.isAbeek_tech()) { abeekStr += "024|"; }
		if(manageVO.isAbeek_design()) { abeekStr += "023|"; }
		if(abeekStr.length() != 0) abeekStr.substring(0, abeekStr.length()-1);
		
//		searchVO.setYear(year);
//		searchVO.setSemester(semester);
//		searchVO.setTarget_grade(target_grade);
//		searchVO.setDivision_cd(division_cd);
//		searchVO.setTitle(title);
		manageVO.setAbeekStr(abeekStr);
		
		return dao.search(manageVO);
	}

	@Override
	public List<ManageVO> getTakes() throws Exception {		
		return dao.getTakes();
	}
	
	@Override
	public void onSave(ManageVO manageVO) throws Exception {
		List<ManageVO> originTakes = dao.getTakes();
		System.out.println("length:" + manageVO.getCourse_id_arr().length);
		List<ManageVO> _insert = new ArrayList<>();
		List<ManageVO> _remove = new ArrayList<>();
		for(int i=0;i<manageVO.getCourse_id_arr().length;i++) {
			boolean _new = true;
			for(int j=0;j<originTakes.size();j++) {
				System.out.println("origin: " + originTakes.get(j).getCourse_id() + ", data: " + manageVO.getCourse_id_arr()[i]);
				if(originTakes.get(j).getCourse_id().equals(manageVO.getCourse_id_arr()[i]) &&
						originTakes.get(j).getYear().equals(manageVO.getYear_arr()[i]) &&
						originTakes.get(j).getSemester().equals(manageVO.getSemester_arr()[i])) {
					_new = false;
				}
			}
			if(_new) {
				ManageVO insert = new ManageVO();
				insert.setCourse_id(manageVO.getCourse_id_arr()[i]);
				insert.setYear(manageVO.getYear_arr()[i]);
				insert.setSemester(manageVO.getSemester_arr()[i]);
				insert.setGp(manageVO.getGp_arr()[i]);
				System.out.println("insert" + insert.getCourse_id() + insert.getGp());
				_insert.add(insert);
			}
		}
		for(int i=0;i<originTakes.size();i++) {
			boolean _delete = true;
			for(int j=0;j<manageVO.getCourse_id_arr().length;j++) {
				if(originTakes.get(i).getCourse_id().equals(manageVO.getCourse_id_arr()[j]) &&
						originTakes.get(i).getYear().equals(manageVO.getYear_arr()[j]) &&
						originTakes.get(i).getSemester().equals(manageVO.getSemester_arr()[j])) {
					_delete = false;
				}
			}
			if(_delete) {
				ManageVO remove = new ManageVO();
				remove.setCourse_id(originTakes.get(i).getCourse_id());
				remove.setYear(originTakes.get(i).getYear());
				remove.setSemester(originTakes.get(i).getSemester());
				System.out.println("delete" + remove.getCourse_id());
				_remove.add(remove);
			}
		}
		if(!_insert.isEmpty()) dao.insertTakes(_insert);
		if(!_remove.isEmpty()) dao.deleteTakes(_remove);
	}
	
}
