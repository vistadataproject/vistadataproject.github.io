---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDFH CURISO 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDFH CURISO{:/}
 tag | {::nomarkdown}CURISO{:/}
 routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return a patient's current isolation.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return a patient's current isolation
 Input Parameters | {::nomarkdown}ORVP{:/}
 Lines | ```{::nomarkdown} S ORVP=ORVP_";DPT(" S VAL=$P($$IP^ORMBLD,U,2)<br/> I '$L(VAL) S VAL="<none>"```{:/}




 Generated on January 13th 2017, 7:11:26 am