package kr.co.service;

import java.util.List;

import kr.co.vo.ManageVO;

public interface ManageService {
	
	public List<ManageVO> search(ManageVO manageVO) throws Exception;
	
	public List<ManageVO> getTakes() throws Exception;
	
	public void onSave(ManageVO manageVO) throws Exception;

}
