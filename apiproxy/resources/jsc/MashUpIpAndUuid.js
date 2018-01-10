/* globals context */

var orginObj=JSON.parse(context.getVariable("response.content"));
 var uuidObj=JSON.parse(context.getVariable("uuidResponse.content"));
 
 var response={
     "ip": orginObj.origin,
     "uuid": uuidObj.uuid
 };
 
 context.setVariable('response.content', JSON.stringify(response));
 context.setVariable('response.header.X-New-Relic-Id', uuidObj.uuid);