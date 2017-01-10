---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG3 LOGACTION 

 property | value 
--- | --- 
 label | MAG3 LOGACTION
 tag | LOGACT
 routine | [MAGGTAU](http://code.osehra.org/dox/Routine_MAGGTAU_source.html)
 return value type | SINGLE VALUE
 description | Certain actions performed by a user are tracked for statistical purposesin the IMAGING WINDOWS SESSIONS and IMAGING WINDOWS WORKSTATIONS files.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ACTION | LITERAL | 256 | true | LOGACT calls ACTION^MAGGTAU to log action.        ; ACTIONS LOGGED        ; LOGON - Session StartTime     LOGOFF - Session End Time        ; IMG   - Image accessed        PAT    - Patient Accessed        ; CAP   - Image Captured        MOD    - Image entry modified        ;        ; ACTION is \^\ delimited string        ; $P(1) is code ( see above )   $P(2) is DFN        ; $P(3) is Image IEN | 