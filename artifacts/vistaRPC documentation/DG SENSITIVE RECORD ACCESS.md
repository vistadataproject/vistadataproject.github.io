---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DG SENSITIVE RECORD ACCESS 

 property | value 
--- | --- 
 label | DG SENSITIVE RECORD ACCESS
 tag | PTSEC
 routine | [DGSEC4](http://code.osehra.org/dox/Routine_DGSEC4_source.html)
 return value type | ARRAY
 description | This Remote Procedure Call (RPC) will:         - Verify user is not accessing his/her own Patient file record ifthe Restrict Patient Record Access (#1201) field in the MAS parameters(#43) file is set to yes and the user does not hold the DG RECORD ACCESSsecurity key.  If parameter set to yes and user is not a key holder , asocial security number must be defined in the New Person file for the userto access any Patient file record.         - Determine if user accessing a sensitive record or an employee'srecord.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL |  | true | DFN = Patient (#2) file DFN. | 
| vs:Input_Parameter-8994_02 | DGMSG | LITERAL | 1 | true | DGMSG = 1 - if message should be generated when a user's SSN is undefined        0 - message will not be generated        If not defined, defaults to 1. | 
| vs:Input_Parameter-8994_02 | DGOPT | LITERAL |  | true | Contains Option name^Menu text for DG Security Log update. | 