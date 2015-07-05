package org.sree.ram.org.sree.ram.login.dao;

/**
 * Created by Sreeram on 22/06/2015.
 */
public class LoginDAO {
    public String check(String uName, String uPass){
        //Need to write code to connect to DB and get the login values.

        if(uName.equalsIgnoreCase("sree") && uPass.equalsIgnoreCase("ram")){
            return "success";
        }else{
            return "fail";
        }
    }
}
