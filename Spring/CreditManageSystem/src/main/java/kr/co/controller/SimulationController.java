package kr.co.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

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
import kr.co.vo.MemberVO;

@Controller
@RequestMapping("/")
public class SimulationController {
	public static final Logger logger = LoggerFactory.getLogger(SimulationController.class);
	
	@Inject
	SimulationService service;
	
	//졸업기준
	@RequestMapping(value="criteria", method=RequestMethod.POST)
	@ResponseBody
	public List<CriteriaVO> criteria(HttpServletRequest request, HttpSession session) throws Exception{
		logger.info("criteria");
		session = request.getSession();
		MemberVO member = (MemberVO) session.getAttribute("member");
		int admissionYear = Integer.parseInt(member.getStudentId().substring(0,4));
		return service.criteria(admissionYear);
	}
	
	//취득학점
	@RequestMapping(value="credit", method=RequestMethod.POST)
	@ResponseBody
	public List<CreditVO> credit(HttpServletRequest request, HttpSession session) throws Exception{
		logger.info("credit");
		session = request.getSession();
		MemberVO member = (MemberVO) session.getAttribute("member");
		return service.credit(member.getStudentId());
	}
	
	//평균평점
	@RequestMapping(value="gpa", method=RequestMethod.POST)
	@ResponseBody
	public float gpa(@RequestBody MemberVO vo) throws Exception{
	public float gpa(HttpServletRequest request, HttpSession session) throws Exception{
		logger.info("gpa");
		session = request.getSession();
		MemberVO member = (MemberVO) session.getAttribute("member");
		return service.gpa(member.getStudentId());
	}
	
	//선후수체계
	@RequestMapping(value="order", method=RequestMethod.POST)
	@ResponseBody
	public List<OrderVO> order(@RequestBody List<ManageVO> takes, HttpServletRequest request, HttpSession session) throws Exception{
		logger.info("order");
		session = request.getSession();
		MemberVO member = (MemberVO) session.getAttribute("member");
		int year = Integer.parseInt(member.getStudentId().substring(0,4));
		return service.order(year, takes);
	}
}
