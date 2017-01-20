---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 ISHDORD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 ISHDORD{:/}
 tag | {::nomarkdown}ISHDORD{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ISHDORD^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Return 1 if it's on-hold med order
 Input parameters | {::nomarkdown}ORID{:/}
 Code | {::nomarkdown}  Q:'+ORID<br> Q:'$D(^OR(100,+ORID,0))<br> N STS,HDSTS,ODGP,INPT,OUPT,MEDS,IVMD<br> S HDSTS=$O(^ORD(100.01,"B","HOLD",0))<br> S STS=$P($G(^OR(100,+ORID,3)),U,3)<br> S INPT=$O(^ORD(100.98,"B","UD RX",0))<br> S OUPT=$O(^ORD(100.98,"B","O RX",0))<br> S MEDS=$O(^ORD(100.98,"B","RX",0))<br> S IVMD=$O(^ORD(100.98,"B","IV RX",0))<br> S ODGP=$P(^OR(100,+ORID,0),U,11)<br> I (U_INPT_U_OUPT_U_MEDS_U_IVMD_U[U_ODGP_U),(HDSTS=STS) S ORY=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">Executable Only</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}