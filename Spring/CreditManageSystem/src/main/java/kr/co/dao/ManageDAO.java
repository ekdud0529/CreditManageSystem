package kr.co.dao;

import java.util.List;

import kr.co.vo.ManageVO;

public interface ManageDAO {
	
	// 검색
	public List<ManageVO> search(ManageVO manageVO) throws Exception;
	
	// 수강내역 불러오기
	public List<ManageVO> getTakes() throws Exception;
	
	// 추가 수강내역 insert
	public void insertTakes(List<ManageVO> manageVO) throws Exception;
	
	// 삭제된 수강내역 delete
	public void deleteTakes(List<ManageVO> manageVO) throws Exception;

}
