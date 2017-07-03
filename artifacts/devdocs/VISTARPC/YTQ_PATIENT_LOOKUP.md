---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; YTQ PATIENT LOOKUP
# YTQ PATIENT LOOKUP

Patient lookup utility.                                                      ; input:                                                                      ;   VALUE = value to lookup       ;   NUMBER= maximum number to find [optional]       ;     Lookup uses multiple index lookup of File #2                            ; output:                                                                     ;   [DATA]^number of records returned                                         ;    DFN^patient name^DOB^PID (ssn)^Gender

Property | Value
--- | ---
Label | FINDP
Routine | [YTQAPI11](http://code.osehra.org/dox/Routine_YTQAPI11_source.html)
Return Type | GLOBAL ARRAY




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}