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
import kr.co.vo.signUpVO;

@Controller
@RequestMapping("")
public class logInController {
	private static final Logger Logger = LoggerFactory.getLogger(logInController.class);
	
	@Inject
	logInService service;
	
	@CrossOrigin
	@ResponseBody
	@RequestMapping(value="/logIn", method = RequestMethod.POST)
	public String login(@RequestBody signUpVO vo) throws Exception{
		Logger.info("post login");
		
		signUpVO login = service.login(vo);
		
		if(login == null) {
			return "Failed";
		}
		else {
			return "success";
		}
	}
}
