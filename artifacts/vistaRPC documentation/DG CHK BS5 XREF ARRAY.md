---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DG CHK BS5 XREF ARRAY 

 property | value 
--- | --- 
 label | DG CHK BS5 XREF ARRAY
 tag | GUIBS5A
 routine | [DPTLK6](http://code.osehra.org/dox/Routine_DPTLK6_source.html)
 return value type | ARRAY
 description | CHECKS IF OTHER PATIENTS ON 'BS5' XREF WITH SAME LAST NAMERETURN 1 OR 0 IN 1ST STRING (-1 IF BAD DFN OR NO ZERO NODE).RETURNS ARRAY NODES WHERE TEXT IS PRECEEDED BY 0 AND PATIENT DATAIS PRECEEDED BY 1.  PATIENT DATA WILL BE IN FOLLOWING FORMAT: 1^DFN^PATIENT NAME^DOB^SSN


### Method description

 property | value 
--- | --- 
 Method comment | RPC checks if other patients on "BS5" xref
 Leading comment lines | with same last name,returns 1 or 0 in 1st string (or -1 if bad DFN or no zero node),if 1 returns array nodes where,text is preceeded by 0 (0^<text>) ,and patient data is preceeded by 1 (1^DFN^patient name^DOB^SSN),return type:  global array,parameter:  ien of Patient file

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL |  | true | PATIENT FILE IEN | 




Generated on January 11th 2017, 6:34:23 am