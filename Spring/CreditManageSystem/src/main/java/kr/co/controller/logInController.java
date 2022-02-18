package kr.co.controller;

import javax.inject.Inject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import kr.co.service.logInService;
import kr.co.vo.logInVO;

@Controller
@RequestMapping("")
public class logInController {
	private static final Logger Logger = LoggerFactory.getLogger(logInController.class);
	
	@Inject
	logInService service;
	
	@ResponseBody
	@CrossOrigin
	@RequestMapping(value="/logIn", method=RequestMethod.POST)
	public logInVO login(@RequestBody logInVO vo) throws Exception{
		Logger.info("post login");
		
		logInVO login = service.logIn(vo);
		
		System.out.println(vo.getStudentId());
		System.out.println(vo.getPassword());
		System.out.println("\n\n");
		System.out.println(login.getStudentId());
		System.out.println(login.getPassword());
		
		return login;
	}
}
