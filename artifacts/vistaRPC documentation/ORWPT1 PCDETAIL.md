---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWPT1 PCDETAIL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT1 PCDETAIL{:/}
 tag | {::nomarkdown}PCDETAIL{:/}
 routine | [ORWPT1](http://code.osehra.org/dox/Routine_ORWPT1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns primary care detailed information about a patient.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return Primary Care Detail information

 Leading comment lines | {::nomarkdown}Input - PATIENT = Patient DFN
Output - LST = Array of Patient Team Assignment Details
Source of data for CPRS is now a web service call to PCMM Web - 387
Other callers will get original data format
ICR #6027 - SCMC PCMM/R GET PRIMARY CARE DETAILS
new for PCMM Web requirements
RPC Broker sets XQCY0 to the caller's context{:/}




 Generated on January 13th 2017, 6:15:57 am