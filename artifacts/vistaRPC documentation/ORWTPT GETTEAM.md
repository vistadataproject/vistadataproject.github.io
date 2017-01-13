---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPT GETTEAM 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPT GETTEAM{:/}
 tag | {::nomarkdown}GETTEAM{:/}
 routine | [ORWTPT](http://code.osehra.org/dox/Routine_ORWTPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | RPC
 Input Parameters | {::nomarkdown}TEAM{:/}
 Lines | ```
 N CNT,NAME,NUM,USER K USERS
 S TEAM=+$G(TEAM),CNT=0
 S NUM=0 F  S NUM=$O(^OR(100.21,TEAM,1,NUM)) Q:NUM<1  S USER=+$G(^(NUM,0)) D
 .S NAME=$P($G(^VA(200,USER,0)),U)
 .I '$L(NAME) Q
 .S CNT=CNT+1
 .S USERS(CNT)=USER_U_NAME```
 Leading comment lines | {::nomarkdown}returns members of a team{:/}




 Generated on January 13th 2017, 6:55:29 am