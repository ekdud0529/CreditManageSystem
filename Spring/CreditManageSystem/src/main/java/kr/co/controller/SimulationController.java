package kr.co.controller;

import java.util.List;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import kr.co.service.SimulationService;
import kr.co.vo.SimulationVO;

@Controller
@RequestMapping("/")
public class SimulationController {
	public static final Logger logger = LoggerFactory.getLogger(SimulationController.class);
	
	@Inject
	SimulationService service;
	
	@RequestMapping(value="criteria", method=RequestMethod.POST)
	@ResponseBody
	public List<SimulationVO> criteria(@RequestBody SimulationVO simulationVO) throws Exception{
		logger.info("criteria");
		return service.criteria(simulationVO.getAdmission_year());
	}
}
