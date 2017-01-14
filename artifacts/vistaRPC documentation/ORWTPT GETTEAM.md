---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWTPT GETTEAM 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPT GETTEAM{:/}
 tag | {::nomarkdown}GETTEAM{:/}
 routine | [ORWTPT](http://code.osehra.org/dox/Routine_ORWTPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETTEAM^[ORWTPT](http://code.osehra.org/dox/Routine_ORWTPT_source.html)
 Method comment | RPC
 First comment | {::nomarkdown}returns members of a team{:/}
 Input parameters | {::nomarkdown}TEAM{:/}
 Code | ```  N CNT,NAME,NUM,USER K USERS<br/> S TEAM=+$G(TEAM),CNT=0<br/> S NUM=0 F  S NUM=$O(^OR(100.21,TEAM,1,NUM)) Q:NUM<1  S USER=+$G(^(NUM,0)) D<br/> .S NAME=$P($G(^VA(200,USER,0)),U)<br/> .I '$L(NAME) Q<br/> .S CNT=CNT+1<br/> .S USERS(CNT)=USER_U_NAME```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}