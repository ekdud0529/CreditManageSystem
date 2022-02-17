package kr.co.service;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import kr.co.dao.logInDAO;
import kr.co.vo.logInVO;

@Service
public class logInServiceImpl implements logInService{
	
	@Inject
	logInDAO dao;
	
	@Override
	public logInVO logIn(logInVO vo) throws Exception {
		return dao.logIn(vo);
	}
}
