---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPT ATEAMS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPT ATEAMS{:/}
 tag | {::nomarkdown}ATEAMS{:/}
 routine | [ORWTPT](http://code.osehra.org/dox/Routine_ORWTPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | RPC
 Lines | ```
 N CNT,NAME,NODE,NUM K TEAMS
 S CNT=0
 S NUM=0 F  S NUM=$O(^OR(100.21,NUM)) Q:NUM<1  S NODE=$G(^(NUM,0)) D
 .I $P(NODE,U,6)'="Y" Q
 .I $P(NODE,U,2)="P" Q
 .S CNT=CNT+1
 .S TEAMS(CNT)=NUM_U_NODE ;$P(NODE,U)```
 Leading comment lines | {::nomarkdown}all teams available to subscribe to{:/}




 Generated on January 13th 2017, 6:55:29 am