---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG3 LOGACTION 

 property | value 
--- | --- 
 label | {::nomarkdown}MAG3 LOGACTION{:/}
 tag | {::nomarkdown}LOGACT{:/}
 routine | [MAGGTAU](http://code.osehra.org/dox/Routine_MAGGTAU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Certain actions performed by a user are tracked for statistical purposesin the IMAGING WINDOWS SESSIONS and IMAGING WINDOWS WORKSTATIONS files.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ACTION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}LOGACT calls ACTION^MAGGTAU to log action.        ; ACTIONS LOGGED        ; LOGON - Session StartTime     LOGOFF - Session End Time        ; IMG   - Image accessed        PAT    - Patient Accessed        ; CAP   - Image Captured        MOD    - Image entry modified        ;        ; ACTION is \^\ delimited string        ; $P(1) is code ( see above )   $P(2) is DFN        ; $P(3) is Image IEN{:/} | 




 Generated on January 13th 2017, 7:15:28 am