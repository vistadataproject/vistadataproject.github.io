---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDPS4 CPINFO 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS4 CPINFO{:/}
 tag | {::nomarkdown}CPINFO{:/}
 routine | [ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Save outpatient med order co-pay information.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | CPINFO^[ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html)
 Method comment | Save reponses to CP questions
 Input parameters | {::nomarkdown}ORINFO{:/}
 Code | ```  Q:'$D(ORINFO)
 N ORIFN,ORI,ORX,ANS S ORI=0
 F  S ORI=$O(ORINFO(ORI)) Q:'ORI  D
 .S ORIFN=$P($P(ORINFO(ORI),U,1),";",1)
 .S ANS=$P(ORINFO(ORI),U,2)
 .D REFMT(.ORX,ANS)
 .D SC^ORCSAVE2(.ORX,ORIFN)
 S Y=1
 K ORIFN,ORX,ORI,ANS```




 Generated on January 14th 2017, 7:26:35 am