package com.infi.main;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.multiaction.MultiActionController;

import com.infi.main.api.service.MainService;

public class MainController extends MultiActionController {
	
	private static final Logger logger = LoggerFactory.getLogger(MainController.class);
	
	private MainService mainService;
	
	public void setMainService(MainService mainService) {
		this.mainService = mainService;
	}
	
	public ModelAndView goHome(HttpServletRequest request, HttpServletResponse response, @RequestParam(value="aa", defaultValue="false") String aa) {
		ModelAndView mv = new ModelAndView("main/index");
		logger.debug(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> goHome() start!");
		logger.debug(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> request.getParameter? '"+request.getParameter("param")+"'");
		logger.debug(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> @RequestParam? '"+aa+"'");
		
		String message = "HOME";
		
		mv.addObject("message", message);

		return mv;
	}
	
	public void testAjax(HttpServletRequest request, HttpServletResponse response){
		logger.debug(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> request.getParameter? '"+request.getParameter("param")+"'");
		
		returnAjax(request.getParameter("param"), response);
	}
	
	public void returnAjax(String aa, HttpServletResponse response){
		PrintWriter pw;
		try {
			pw = response.getWriter();
			pw.print(aa);
			pw.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
