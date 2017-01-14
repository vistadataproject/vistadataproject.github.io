---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDPS4 CPLST 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS4 CPLST{:/}
 tag | {::nomarkdown}CPLST{:/}
 routine | [ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Get co-pay ralated questions{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | CPLST^[ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html)
 Method comment | Get CP questions
 Input parameters | {::nomarkdown}PTIFN<br/>ORIFNS{:/}
 Code | ```  N ORIFN,ORDA,ORI,ORPSO,CPX
 S ORI=0,ORPSO=+$O(^DIC(9.4,"C","PSO",0))
 F  S ORI=$O(ORIFNS(ORI)) Q:'ORI  D
 .S ORIFN=+ORIFNS(ORI),ORDA=$P(ORIFNS(ORI),";",2)
 .I $D(^OR(100,ORIFN,0)),($P(^OR(100,ORIFN,0),U,14)=ORPSO) D
 ..N PRIO S PRIO=0
 ..I $D(^OR(100,ORIFN,4.5,"ID","URGENCY")) S PRIO=$O(^("URGENCY",0))
 ..S PRIO=$G(^OR(100,ORIFN,4.5,+PRIO,1))
 ..Q:PRIO=99
 ..S CPX=$$SC(ORIFN)
 ..I $L(CPX)>1 S TEST(ORIFN)=ORIFN_";"_ORDA_CPX
 K PTIFN,ORIFN,ORDA,ORI,CPX```




 Generated on January 14th 2017, 7:26:35 am