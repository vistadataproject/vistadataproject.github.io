---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS4 CPINFO 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS4 CPINFO{:/}
 tag | {::nomarkdown}CPINFO{:/}
 routine | [ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Save outpatient med order co-pay information.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | CPINFO^[ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html)
 Method comment | Save reponses to CP questions
 Input parameters | {::nomarkdown}ORINFO{:/}
 Code | {::nomarkdown}  Q:'$D(ORINFO)<br> N ORIFN,ORI,ORX,ANS S ORI=0<br> F  S ORI=$O(ORINFO(ORI)) Q:'ORI  D<br> .S ORIFN=$P($P(ORINFO(ORI),U,1),";",1)<br> .S ANS=$P(ORINFO(ORI),U,2)<br> .D REFMT(.ORX,ANS)<br> .D SC^ORCSAVE2(.ORX,ORIFN)<br> S Y=1<br> K ORIFN,ORX,ORI,ANS{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}