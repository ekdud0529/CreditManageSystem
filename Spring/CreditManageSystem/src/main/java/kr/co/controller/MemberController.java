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

import kr.co.service.MemberService;
import kr.co.vo.MemberVO;

@Controller
@RequestMapping("")
public class MemberController {
	
	private static final Logger Logger = LoggerFactory.getLogger(MemberController.class);
	
	@Inject
	MemberService service;
	
	// 회원가입 데이터 post
	@ResponseBody
	@CrossOrigin
	@RequestMapping(value="/signUp", method = RequestMethod.POST)
	public void postRegister(@RequestBody MemberVO vo) throws Exception{
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
	public MemberVO login(@RequestBody MemberVO vo, HttpServletRequest request, HttpSession session) throws Exception{
		Logger.info("post login");
		
		session = request.getSession();
		
		MemberVO login = service.logIn(vo);
		
		System.out.println("--POST--");
		System.out.println(vo.getStudentId());
		System.out.println(vo.getPassword());
		System.out.println("--DB--");
		System.out.println(login.getStudentId());
		System.out.println(login.getPassword());
		
		if((login.getStudentId().equals(vo.getStudentId()))
		&& (login.getPassword().equals(vo.getPassword())))
		{
			session.setAttribute("member", login);
			System.out.println("--session--");
			MemberVO isLogIn = (MemberVO) session.getAttribute("member");
			System.out.println(isLogIn.getStudentId());
			System.out.println(isLogIn.getPassword());
		}
		else session.setAttribute("member", null);
		
		return login;
	}
	
	// 로그아웃
	@RequestMapping(value="/logout", method = RequestMethod.GET)
	public void logout(HttpSession session) throws Exception{
		session.invalidate();
	}
}
