---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORB KILL UNSIG ORDERS ALERT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWORB KILL UNSIG ORDERS ALERT{:/}
 tag | {::nomarkdown}KILUNSNO{:/}
 routine | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Check patient's unsigned orders, and kill unsigned orders alert for thisuser if no unsigned orders remain for his/her signature.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Patient DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} |  | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | KILUNSNO^[ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 Method comment | Delete unsigned order alerts if no unsigned orders remaining
 Input parameters | {::nomarkdown}ORVP{:/}
 Code | {::nomarkdown}  S ORVP=ORVP_";DPT("<br> D UNOTIF^ORCSIGN{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}