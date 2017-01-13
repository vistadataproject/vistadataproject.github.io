---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT TEAMS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT TEAMS{:/}
 tag | {::nomarkdown}TEAMS{:/}
 routine | [ORQPTQ1](http://code.osehra.org/dox/Routine_ORQPTQ1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns a list of teams.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return list of teams for a system
 Lines | ```{::nomarkdown} N ORTM,I,ORTMN<br/> S ORTMN="",I=1<br/> F  S ORTMN=$O(^OR(100.21,"B",ORTMN)) Q:ORTMN=""  D<br/> .S ORTM="",ORTM=$O(^OR(100.21,"B",ORTMN,ORTM)) Q:ORTM=""<br/> .I $P($G(^OR(100.21,ORTM,11)),U)'=0!($D(^OR(100.21,ORTM,1,$G(DUZ,0)))) S ORY(I)=ORTM_U_ORTMN,I=I+1<br/> S:+$G(ORY(1))<1 ORY(1)="^No teams found."```{:/}
 Leading comment lines | {::nomarkdown}Also called under DBIA # 2692.{:/}




 Generated on January 13th 2017, 7:11:26 am