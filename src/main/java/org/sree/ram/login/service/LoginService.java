package org.sree.ram.login.service;

import org.sree.ram.login.model.Login;
import org.sree.ram.org.sree.ram.login.dao.LoginDAO;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * Created by Sreeram on 21/06/2015.
 */

@Path("/validate")
public class LoginService {

    @POST
    @Path("/user")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response validate(Login login){
        System.out.println("in validate method ...");
        System.out.println("User Name: "+login.getName());
        System.out.println("Password: "+login.getPass());

        LoginDAO daoObj = new LoginDAO();
        String status = daoObj.check(login.getName(), login.getPass());
        if (status.equals("success")){
            return Response.status(200).type("text/plain").entity("Success").build();
        }else{
            return Response.status(403).type("text/plain").entity("Wrong credentials").build();
            //return Response.status(Response.Status.NOT_FOUND).entity("Wrong credentials").build();
        }
    }
}
