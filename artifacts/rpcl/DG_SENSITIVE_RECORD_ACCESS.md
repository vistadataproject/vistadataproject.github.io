---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) &#8594; DG SENSITIVE RECORD ACCESS 

 property | value 
--- | --- 
 name | DG SENSITIVE RECORD ACCESS
 domain | Patient
 description | {::nomarkdown}This Remote Procedure Call (RPC) will: - Verify user is not accessing his/her own Patient file record ifthe Restrict Patient Record Access (#1201) field in the MAS parameters(#43) file is set to yes and the user does not hold the DG RECORD ACCESSsecurity key. If parameter set to yes and user is not a key holder , asocial security number must be defined in the New Person file for the userto access any Patient file record. - Determine if user accessing a sensitive record or an employee'srecord.{:/}
 VA RPC Documentation | [see 8994 and method descriptions](../vistaRPC documentation/DG SENSITIVE RECORD ACCESS)
 MUMPS implementation | [PTSEC^DGSEC4](http://code.osehra.org/dox/Routine_DGSEC4_source.html)
 type | 
 complexity | 
 uses | 
 return type | ARRAY
 return description | Output array (Required)\n     RESULT(1)= -1-RPC/API failed\n                   Required variable not defined\n                 0-No display/action required\n                   Not accessing own, employee, or sensitive record\n                 1-Display warning message\n                   Sensitive and DG SENSITIVITY key holder\n                   or Employee and DG SECURITY OFFICER key holder\n                 2-Display warning message/require OK to continue\n                   Sensitive and not a DG SENSITIVITY key holder\n                   Employee and not a DG SECURITY OFFICER key holder\n                 3-Access to record denied\n                   Accessing own record\n                 4-Access to Patient (#2) file records denied\n                   SSN not defined\n    RESULT(2-10) = error or display messages

### Input Parameters

| id | parameterType | required | description | example | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | true | {::nomarkdown}DFN = Patient (#2) file DFN.{:/} |  | 
| DGMSG | LITERAL |  | {::nomarkdown}DGMSG = 1 - if message should be generated when a user's SSN is undefined 0 - message will not be generated If not defined, defaults to 1.{:/} |  | 
| DGOPT | LITERAL |  | {::nomarkdown}Contains Option name^Menu text for DG Security Log update.{:/} |  | 

{::nomarkdown} <br/><p style="font-size: 11px">Generated on April 3rd 2017, 4:24:12 pm</p>{:/}