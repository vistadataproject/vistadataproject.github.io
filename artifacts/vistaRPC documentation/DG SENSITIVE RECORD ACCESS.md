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


### Method description

 property | value 
--- | --- 
 Method comment | RPC/API entry point for patient sensitive & record access checks
 Leading comment lines | Output array (Required),RESULT(1)= -1-RPC/API failed,Required variable not defined,0-No display/action required,Not accessing own, employee, or sensitive record,1-Display warning message,Sensitive and DG SENSITIVITY key holder,or Employee and DG SECURITY OFFICER key holder,2-Display warning message/require OK to continue,Sensitive and not a DG SENSITIVITY key holder,Employee and not a DG SECURITY OFFICER key holder,3-Access to record denied,Accessing own record,4-Access to Patient (#2) file records denied,SSN not defined,RESULT(2-10) = error or display messages,Input parameters: DFN = Patient file entry (Required),DGMSG = If 1, generate message (optional),DGOPT  = Option name^Menu text (Optional)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL |  | true | DFN = Patient (#2) file DFN. | 
| DGMSG | LITERAL | 1 | true | DGMSG = 1 - if message should be generated when a user's SSN is undefined        0 - message will not be generated        If not defined, defaults to 1. | 
| DGOPT | LITERAL |  | true | Contains Option name^Menu text for DG Security Log update. | 