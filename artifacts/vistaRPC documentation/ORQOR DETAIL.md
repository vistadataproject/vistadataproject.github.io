---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQOR DETAIL 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQOR DETAIL{:/}
 tag | {::nomarkdown}DETAIL{:/}
 routine | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns detailed information regarding an order.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORDER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Order identifier/number from file #100.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DETAIL^[ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 Method comment | Return details of ORID (shell to kill VIDEO subs)
 Input parameters | {::nomarkdown}ORID<br/>DFN{:/}
 Code | ```  Q:'+ORID
 I $G(DFN) N ORVP S ORVP=DFN_";DPT("
 S LST="^TMP(""ORTXT"",$J)"
 D DETAIL^ORQ2(.LST,ORID)
 K @LST@("VIDEO")
 S LST=$NA(^TMP("ORTXT",$J)),@LST=""```




 Generated on January 14th 2017, 7:26:35 am