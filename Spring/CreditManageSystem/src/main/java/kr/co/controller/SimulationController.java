package kr.co.controller;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import kr.co.service.SimulationService;
import kr.co.vo.CreditVO;
import kr.co.vo.CriteriaVO;
import kr.co.vo.MemberVO;

@Controller
@RequestMapping("/")
public class SimulationController {
	public static final Logger logger = LoggerFactory.getLogger(SimulationController.class);
	
	@Inject
	SimulationService service;
	
	//¡πæ˜±‚¡ÿ
	@RequestMapping(value="criteria", method=RequestMethod.POST)
	@ResponseBody
	public List<CriteriaVO> criteria(@RequestBody CriteriaVO vo) throws Exception{
		logger.info("criteria");
		return service.criteria(vo.getAdmissionYear());
	}
	
	//√ÎµÊ«–¡°
	@RequestMapping(value="credit", method=RequestMethod.POST)
	@ResponseBody
	public List<CreditVO> credit(@RequestBody MemberVO vo) throws Exception{
		logger.info("credit");
		return service.credit(vo.getStudentId());
	}
	
	//∆Ú±’∆Ú¡°
	@RequestMapping(value="gpa", method=RequestMethod.POST)
	@ResponseBody
	public float gpa(@RequestBody MemberVO vo) throws Exception{
		logger.info("gpa");
		return service.gpa(vo.getStudentId());
	}
}
