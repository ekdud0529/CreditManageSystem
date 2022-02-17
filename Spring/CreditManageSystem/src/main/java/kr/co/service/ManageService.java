package kr.co.service;

import java.util.List;

import kr.co.vo.ManageVO;
import kr.co.vo.SearchVO;

public interface ManageService {
	
	public List<ManageVO> search(SearchVO searchVO) throws Exception;

}
