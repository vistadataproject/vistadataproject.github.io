---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; YTQ PATIENT LOOKUP 

 property | value 
--- | --- 
 label | YTQ PATIENT LOOKUP
 tag | FINDP
 routine | [YTQAPI11](http://code.osehra.org/dox/Routine_YTQAPI11_source.html)
 return value type | GLOBAL ARRAY
 description | Patient lookup utility.                                                      ; input:                                                                      ;   VALUE = value to lookup       ;   NUMBER= maximum number to find [optional]       ;     Lookup uses multiple index lookup of File #2                            ; output:                                                                     ;   [DATA]^number of records returned                                         ;    DFN^patient name^DOB^PID (ssn)^Gender




 Generated on January 11th 2017, 7:15:04 am