---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDBA7 ISWITCH 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDBA7 ISWITCH{:/}
 tag | {::nomarkdown}ISWITCH{:/}
 routine | [ORWDBA7](http://code.osehra.org/dox/Routine_ORWDBA7_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}CIDC RPCRETURNS 1 IF PATIENT HAS BILLABLE INSURANCERETURNS 0 IF PATIENT DOES NOT HAVE BILLABLE INSURANCE{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}PATIENT'S IEN{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ISWITCH^[ORWDBA7](http://code.osehra.org/dox/Routine_ORWDBA7_source.html)
 Method comment | Return 0 if don't ask (no ins) or 1 to ask CIDC quest (yes ins)
 Input parameters | {::nomarkdown}DFN{:/}
 Code | ```  S Y=$$CIDC^IBBAPI(DFN)```




 Generated on January 14th 2017, 7:26:36 am