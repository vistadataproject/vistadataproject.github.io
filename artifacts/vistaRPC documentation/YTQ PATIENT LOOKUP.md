---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; YTQ PATIENT LOOKUP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}YTQ PATIENT LOOKUP{:/}
 tag | {::nomarkdown}FINDP{:/}
 routine | [YTQAPI11](http://code.osehra.org/dox/Routine_YTQAPI11_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Patient lookup utility.                                                      ; input:                                                                      ;   VALUE = value to lookup       ;   NUMBER= maximum number to find [optional]       ;     Lookup uses multiple index lookup of File #2                            ; output:                                                                     ;   [DATA]^number of records returned                                         ;    DFN^patient name^DOB^PID (ssn)^Gender{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:51 am</p>{:/}