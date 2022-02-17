package kr.co.service;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import kr.co.dao.logInDAO;
import kr.co.vo.logInVO;

@Service
public class logInServiceImpl implements logInService{
	@Inject logInDAO dao;
	
	@Override
	public logInVO login(logInVO vo) throws Exception {
		return dao.login(vo);
	}
}
