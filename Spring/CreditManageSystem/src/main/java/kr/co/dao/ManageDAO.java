package kr.co.dao;

import java.util.List;

import kr.co.vo.ManageVO;
import kr.co.vo.SearchVO;

public interface ManageDAO {
	
	// °Ë»ö
	public List<ManageVO> search(SearchVO searchVO) throws Exception;

}
