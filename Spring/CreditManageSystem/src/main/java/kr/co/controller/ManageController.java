package kr.co.controller;

import java.util.List;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import kr.co.service.ManageService;
import kr.co.vo.ManageVO;

@Controller
@RequestMapping("")
public class ManageController {
	public static final Logger logger = LoggerFactory.getLogger(ManageController.class);
	
	@Inject
	ManageService service;
	
	@ResponseBody
	@CrossOrigin
	@RequestMapping(value = "/manage",method = RequestMethod.POST)
	public List<ManageVO> search(@RequestBody ManageVO manageVO) throws Exception {
		logger.info("Search");
		
		//service.search(searchVO);
		
		System.out.println("year: " + manageVO.getYear());
		System.out.println("semester: " + manageVO.getSemester());
		System.out.println("target_grade: " + manageVO.getTarget_grade());
		System.out.println("division_cd: " + manageVO.getDivision_cd());
		System.out.println("abeekStr: " + manageVO.getAbeekStr());
		System.out.println("title: " + manageVO.getTitle());
		
		return service.search(manageVO);
	}
	
	@ResponseBody
	@CrossOrigin
	@RequestMapping(value="/getTakes", method=RequestMethod.POST)
	public List<ManageVO> getTakes() throws Exception {
		logger.info("getTakes");
		return service.getTakes();
	}
	
	@ResponseBody
	@CrossOrigin
	@RequestMapping(value="/onSave", method=RequestMethod.POST)
	public void onSave(@RequestBody ManageVO manageVO) throws Exception {
		logger.info("onSave");
		System.out.println(manageVO.getCourse_id_arr()[0] + manageVO.getYear_arr()[0] + manageVO.getSemester_arr()[0] + manageVO.getGp_arr()[0]);
		service.onSave(manageVO);
	}
	
	
}
