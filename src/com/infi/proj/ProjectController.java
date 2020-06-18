package com.infi.proj;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Handles requests for the application home page.
 */
@RequestMapping("proj")
@Controller
public class ProjectController {
	
	private static final Logger logger = LoggerFactory.getLogger(ProjectController.class);
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "index.do", method = RequestMethod.GET)
	public String index(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);
		
		model.addAttribute("myMsg", "This page is Project." );
		
		return "proj/index";
	}
	
	@RequestMapping(value = "goTextCut.do", method = RequestMethod.GET)
	public String goTextCut(Locale locale, Model model) {
		
		model.addAttribute("myMsg", "This Page text cut to use javascript by byte.");
		
		return "textCut/index";
	}
	
	@RequestMapping(value = "goExcelDown.do", method = RequestMethod.GET)
	public String goExcelDownToJsp(Locale locale, Model model) {
			
		model.addAttribute("myMsg", "This Page converts Jsp page composed table to Excel File. \n ref)http://mkil.tistory.com/274");

		return "excelDownToJsp/index";
	}
	
	@RequestMapping(value = "excelDownData.do", method = RequestMethod.GET)
	public String sampleExcelData(Locale locale, Model model) {
		
		//여긴 테스트 데이터로 했지만 DB에서 select해서 list로만들어주면 바로 응용가능
		List<Map<String, String>> list = new ArrayList<Map<String, String>>();
		
		Map<String, String> map1 = new HashMap<String, String>();
		map1.put("ITEM", "blouse");
		map1.put("PRICE","1500000000");
		map1.put("LINK", "blouse@naver.com");
		
		Map<String, String> map2 = new HashMap<String, String>();
		map2.put("ITEM", "Tshirt");
		map2.put("PRICE","1000000000");
		map2.put("LINK", "Tshirt@naver.com");
		
		Map<String, String> map3 = new HashMap<String, String>();
		map3.put("ITEM", "Jeans");
		map3.put("PRICE","2500000000");
		map3.put("LINK", "Jeans@naver.com");
		
		list.add(0, map1);
		list.add(1, map2);
		list.add(2, map3);
		
		model.addAttribute("list", list);
		
		return "excelDownToJsp/excelJsp";
	}
}
