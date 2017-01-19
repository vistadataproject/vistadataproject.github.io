---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDFH CURISO 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDFH CURISO{:/}
 tag | {::nomarkdown}CURISO{:/}
 routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return a patient's current isolation.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | CURISO^[ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 Method comment | Return a patient's current isolation
 Input parameters | {::nomarkdown}ORVP{:/}
 Code | {::nomarkdown}  S ORVP=ORVP_";DPT(" S VAL=$P($$IP^ORMBLD,U,2)<br> I '$L(VAL) S VAL="<none>"{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}