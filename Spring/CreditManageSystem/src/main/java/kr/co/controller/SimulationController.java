package kr.co.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.ObjectMapper;

import kr.co.service.SimulationService;
import kr.co.vo.CreditVO;
import kr.co.vo.CriteriaVO;
import kr.co.vo.ManageVO;
import kr.co.vo.OrderVO;
import kr.co.vo.memberVO;

@Controller
@RequestMapping("/")
public class SimulationController {
	public static final Logger logger = LoggerFactory.getLogger(SimulationController.class);
	
	@Inject
	SimulationService service;
	
	//졸업기준
	@RequestMapping(value="criteria", method=RequestMethod.POST)
	@ResponseBody
	public List<CriteriaVO> criteria(@RequestBody CriteriaVO vo) throws Exception{
		logger.info("criteria");
		return service.criteria(vo.getAdmissionYear());
	}
	
	//취득학점
	@RequestMapping(value="credit", method=RequestMethod.POST)
	@ResponseBody
	public List<CreditVO> credit(@RequestBody memberVO vo) throws Exception{
		logger.info("credit");
		return service.credit(vo.getStudentId());
	}
	
	//평균평점
	@RequestMapping(value="gpa", method=RequestMethod.POST)
	@ResponseBody
	public float gpa(@RequestBody memberVO vo) throws Exception{
		logger.info("gpa");
		return service.gpa(vo.getStudentId());
	}
	
	//선후수체계
	@RequestMapping(value="order", method=RequestMethod.POST)
	@ResponseBody
	public List<OrderVO> order(@RequestBody List<ManageVO> takes) throws Exception{
		logger.info("order");
		String studentId = "201819186";
		int year = Integer.parseInt(studentId.substring(0,4));
		return service.order(year, takes);
	}
}
