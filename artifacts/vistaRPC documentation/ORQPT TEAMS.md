---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT TEAMS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT TEAMS{:/}
 tag | {::nomarkdown}TEAMS{:/}
 routine | [ORQPTQ1](http://code.osehra.org/dox/Routine_ORQPTQ1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns a list of teams.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | TEAMS^[ORQPTQ1](http://code.osehra.org/dox/Routine_ORQPTQ1_source.html)
 Method comment | return list of teams for a system
 First comment | {::nomarkdown}<pre> Also called under DBIA # 2692.</pre>{:/}
 Code | {::nomarkdown}  N ORTM,I,ORTMN<br> S ORTMN="",I=1<br> F  S ORTMN=$O(^OR(100.21,"B",ORTMN)) Q:ORTMN=""  D<br> .S ORTM="",ORTM=$O(^OR(100.21,"B",ORTMN,ORTM)) Q:ORTM=""<br> .I $P($G(^OR(100.21,ORTM,11)),U)'=0!($D(^OR(100.21,ORTM,1,$G(DUZ,0)))) S ORY(I)=ORTM_U_ORTMN,I=I+1<br> S:+$G(ORY(1))<1 ORY(1)="^No teams found."{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:08 am</p>{:/}