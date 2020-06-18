package com.infi.main.component.service;

import javax.jws.WebService;

import com.infi.main.api.service.MainService;

@WebService(endpointInterface = "com.infi.api.service.MainService")
public class MainServiceImpl implements MainService{
	@Override
	public String setMessage(String str) {
		return "test ok."+str;
	}
}
