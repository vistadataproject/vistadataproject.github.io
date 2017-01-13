---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS1 QOMEDALT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS1 QOMEDALT{:/}
 tag | {::nomarkdown}QOMEDALT{:/}
 routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Input Parameters | {::nomarkdown}ODIEN{:/}
 Lines | ```{::nomarkdown} N ARRAY,IDIEN,ORDERID,PKG,PSTYPE,VALUE<br/> S ORY=0,PKG=+$P(^ORD(101.41,ODIEN,0),U,7)<br/> S PSTYPE=$S($$GET1^DIQ(9.4,PKG_",",1)="PSO":"O",1:"I")<br/> S ORDERID=$O(^ORD(101.41,"B","OR GTX ORDERABLE ITEM","")) Q:ORDERID'>0<br/> S IDIEN=$O(^ORD(101.41,ODIEN,6,"D",ORDERID,"")) Q:IDIEN'>0<br/> S VALUE=$G(^ORD(101.41,ODIEN,6,IDIEN,1)) Q:VALUE'>0<br/> I $P($G(^ORD(101.43,VALUE,"PS")),U,6)=1 S ORY=VALUE```{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ODIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 7:11:27 am