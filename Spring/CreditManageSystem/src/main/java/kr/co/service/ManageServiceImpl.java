package kr.co.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import kr.co.dao.ManageDAO;
import kr.co.vo.ManageVO;
import kr.co.vo.SearchVO;

@Service
public class ManageServiceImpl implements ManageService {

	@Inject
	private ManageDAO dao;
	
	@Override
	public List<ManageVO> search(SearchVO searchVO) throws Exception {
		return dao.search(searchVO);
	}
	
}
