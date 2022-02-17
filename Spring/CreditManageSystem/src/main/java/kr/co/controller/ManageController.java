package kr.co.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import kr.co.service.ManageService;
import kr.co.vo.ManageVO;
import kr.co.vo.SearchVO;

@Controller
@RequestMapping("")
public class ManageController {
	public static final Logger logger = LoggerFactory.getLogger(ManageController.class);
	
	@Inject
	ManageService service;
	
	@ResponseBody
	@CrossOrigin
	@RequestMapping(value = "/manage",method = RequestMethod.POST)
	public List<ManageVO> search(@RequestBody SearchVO searchVO) throws Exception {
		logger.info("Search");
		
		service.search(searchVO);
		
		System.out.println("year: " + searchVO.getYear());
		System.out.println("semester: " + searchVO.getSemester());
		System.out.println("target_grade: " + searchVO.getTarget_grade());
		System.out.println("division_cd: " + searchVO.getDivision_cd());
		System.out.println("abeekStr: " + searchVO.getAbeekStr());
		System.out.println("title: " + searchVO.getTitle());
		
		return service.search(searchVO);
	}
	
}
