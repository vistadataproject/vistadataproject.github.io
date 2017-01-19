---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDX1 UNDCORIG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX1 UNDCORIG{:/}
 tag | {::nomarkdown}UNDCORIG{:/}
 routine | [ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORYARR{:/} | {::nomarkdown}LIST{:/} |  |  |  | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | UNDCORIG^[ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html)
 Input parameters | {::nomarkdown}ORYARR{:/}
 Code | {::nomarkdown}  N CNT<br> S CNT=0 F  S CNT=$O(ORYARR(CNT)) Q:CNT'>0  S $P(^OR(100,+ORYARR(CNT),6),U,9)=0{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:12 am</p>{:/}