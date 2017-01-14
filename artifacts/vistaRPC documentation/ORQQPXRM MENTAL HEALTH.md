---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQPXRM MENTAL HEALTH 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPXRM MENTAL HEALTH{:/}
 tag | {::nomarkdown}MH{:/}
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns array for given mental health instrument{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MENTAL HEALTH INSTRUMENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Name of the mental health instrument{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | MH^[ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 Input parameters | {::nomarkdown}OTEST{:/}
 Code | ```  D MH^PXRMRPCC(.ORY,OTEST)  ; DBIA 3080
 S ORY(0)=0
 I $$PATCH^XPDUTL("YS*5.01*85") S ORY(0)=1```




 Generated on January 14th 2017, 7:26:35 am