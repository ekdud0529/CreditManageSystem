package kr.co.controller;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import kr.co.service.memberService;
import kr.co.vo.memberVO;

@Controller
@RequestMapping("")
public class memberController {
	
	private static final Logger Logger = LoggerFactory.getLogger(memberController.class);
	
	@Inject
	memberService service;
	
	// 회원가입 데이터 post
	@CrossOrigin
	@RequestMapping(value="/signUp", method = RequestMethod.POST)
	public void postRegister(@RequestBody memberVO vo) throws Exception{
		Logger.info("post register");
		
		System.out.println("id : " + vo.getStudentId());
		System.out.println("pw : " + vo.getPassword());
		System.out.println("name : " + vo.getName());
		
		service.register(vo);
	}
	
	// 로그인
	@ResponseBody
	@CrossOrigin
	@RequestMapping(value="/logIn", method=RequestMethod.POST)
	public memberVO login(@RequestBody memberVO vo, HttpServletRequest request, HttpSession session) throws Exception{
		Logger.info("post login");
		
		memberVO login = service.logIn(vo);
		
		System.out.println(vo.getStudentId());
		System.out.println(vo.getPassword());
		System.out.println("\n\n");
		System.out.println(login.getStudentId());
		System.out.println(login.getPassword());
		
		if(login.getStudentId() == vo.getStudentId()
		&& login.getPassword() == vo.getPassword())
		{
			session.setAttribute("studentId", vo.getStudentId());
			session.setAttribute("password", vo.getPassword());
		}
		
		return login;
	}
}
