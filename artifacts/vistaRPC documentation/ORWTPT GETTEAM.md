---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPT GETTEAM 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPT GETTEAM{:/}
 tag | {::nomarkdown}GETTEAM{:/}
 routine | [ORWTPT](http://code.osehra.org/dox/Routine_ORWTPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETTEAM^[ORWTPT](http://code.osehra.org/dox/Routine_ORWTPT_source.html)
 Method comment | RPC
 Input parameters | {::nomarkdown}TEAM{:/}
 First comment | {::nomarkdown}<pre> returns members of a team</pre>{:/}
 Code | {::nomarkdown}  N CNT,NAME,NUM,USER K USERS<br> S TEAM=+$G(TEAM),CNT=0<br> S NUM=0 F  S NUM=$O(^OR(100.21,TEAM,1,NUM)) Q:NUM<1  S USER=+$G(^(NUM,0)) D<br> .S NAME=$P($G(^VA(200,USER,0)),U)<br> .I '$L(NAME) Q<br> .S CNT=CNT+1<br> .S USERS(CNT)=USER_U_NAME{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/rOptions.pas">Options/rOptions.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:02 am</p>{:/}