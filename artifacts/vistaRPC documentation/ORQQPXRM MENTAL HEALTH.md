---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPXRM MENTAL HEALTH 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPXRM MENTAL HEALTH{:/}
 tag | {::nomarkdown}MH{:/}
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns array for given mental health instrument{:/}


### Method description

 property | value 
 --- | --- 
 Input Parameters | {::nomarkdown}OTEST{:/}
 Lines | {::nomarkdown} D MH^PXRMRPCC(.ORY,OTEST)  ; DBIA 3080<br/> S ORY(0)=0<br/> I $$PATCH^XPDUTL("YS*5.01*85") S ORY(0)=1{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MENTAL HEALTH INSTRUMENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Name of the mental health instrument{:/} | 




 Generated on January 13th 2017, 7:15:27 am