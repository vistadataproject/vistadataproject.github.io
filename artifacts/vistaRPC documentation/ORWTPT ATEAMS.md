---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPT ATEAMS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPT ATEAMS{:/}
 tag | {::nomarkdown}ATEAMS{:/}
 routine | [ORWTPT](http://code.osehra.org/dox/Routine_ORWTPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ATEAMS^[ORWTPT](http://code.osehra.org/dox/Routine_ORWTPT_source.html)
 Method comment | RPC
 First comment | {::nomarkdown}<pre> all teams available to subscribe to</pre>{:/}
 Code | {::nomarkdown}  N CNT,NAME,NODE,NUM K TEAMS<br> S CNT=0<br> S NUM=0 F  S NUM=$O(^OR(100.21,NUM)) Q:NUM<1  S NODE=$G(^(NUM,0)) D<br> .I $P(NODE,U,6)'="Y" Q<br> .I $P(NODE,U,2)="P" Q<br> .S CNT=CNT+1<br> .S TEAMS(CNT)=NUM_U_NODE ;$P(NODE,U){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [Options/rOptions.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/rOptions.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}