---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PSB UTL XSTATUS SRCH 

 property | value 
--- | --- 
 label | PSB UTL XSTATUS SRCH
 tag | FNDACTV
 routine | [PSBVDLU3](http://code.osehra.org/dox/Routine_PSBVDLU3_source.html)
 return value type | ARRAY
 description | RESULTS(0)=returned line countRESULTS(1)=patients location during activityRESULTS(2)=medication^ordernumberRESULTS(3)= action fileman date&timeRESULTS(4)= scheduled administration fileman date&time

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| RESULTS | REFERENCE |  | true | RESULTS array (ref) | 
| PARAMS | LITERAL |  | true | ^ piece#1 - DFN (required)#2 - OrderNumber#3 - Action (status) to search for#4 - TimeFrame                          NOTE:  =\FREQ\  This  Function will use order's                                    frequency.        ;                    1. If the order is a PRN, On Call or One-Time        ;                       the look back a default of 72 hours.        ;                    2. if the order is a Continuous order key                                 off of the frequency as follows.        ;                          a.) if the frequency is <24 hours                                       use the default of 72 hours.        ;                          b.) if the frequency is >= 24 hour,                                       look back 3.5 times the frequency        ;                 NOTE:  [\X#\   This Function will search back #                                     of admins.         ;  Example call: D FNDACTV^PSBVDLU3(.results,\1234^1U^H^12\) | 