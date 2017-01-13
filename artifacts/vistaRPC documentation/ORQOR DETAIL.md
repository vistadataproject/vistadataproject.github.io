---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQOR DETAIL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQOR DETAIL{:/}
 tag | {::nomarkdown}DETAIL{:/}
 routine | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns detailed information regarding an order.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return details of ORID (shell to kill VIDEO subs)
 Input Parameters | {::nomarkdown}ORID<br/>DFN{:/}
 Lines | ```
 Q:'+ORID
 I $G(DFN) N ORVP S ORVP=DFN_";DPT("
 S LST="^TMP(""ORTXT"",$J)"
 D DETAIL^ORQ2(.LST,ORID)
 K @LST@("VIDEO")
 S LST=$NA(^TMP("ORTXT",$J)),@LST=""```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORDER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Order identifier/number from file #100.{:/} | 




 Generated on January 13th 2017, 6:55:28 am