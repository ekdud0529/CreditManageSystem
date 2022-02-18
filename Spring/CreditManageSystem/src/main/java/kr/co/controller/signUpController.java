package kr.co.controller;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import kr.co.service.signUpService;
import kr.co.vo.signUpVO;

@Controller
@RequestMapping("")
public class signUpController {
	
	private static final Logger Logger = LoggerFactory.getLogger(signUpController.class);
	
	@Inject
	signUpService service;
	
	// 회원가입 데이터 post
	@CrossOrigin
	@RequestMapping(value="/signUp", method = RequestMethod.POST)
	public void postRegister(@RequestBody signUpVO vo) throws Exception{
		Logger.info("post register");
		
		System.out.println("id : " + vo.getStudentId());
		System.out.println("pw : " + vo.getPassword());
		System.out.println("name : " + vo.getName());
		
		service.register(vo);
	}
}
