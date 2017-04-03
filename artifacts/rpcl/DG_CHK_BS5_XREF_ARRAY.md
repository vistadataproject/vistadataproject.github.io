---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) &#8594; DG CHK BS5 XREF ARRAY 

 property | value 
--- | --- 
 name | DG CHK BS5 XREF ARRAY
 domain | Patient
 description | {::nomarkdown}CHECKS IF OTHER PATIENTS ON 'BS5' XREF WITH SAME LAST NAMERETURN 1 OR 0 IN 1ST STRING (-1 IF BAD DFN OR NO ZERO NODE).RETURNS ARRAY NODES WHERE TEXT IS PRECEEDED BY 0 AND PATIENT DATAIS PRECEEDED BY 1. PATIENT DATA WILL BE IN FOLLOWING FORMAT: 1^DFN^PATIENT NAME^DOB^SSN{:/}
 VA RPC Documentation | [see 8994 and method descriptions](../vistaRPC documentation/DG CHK BS5 XREF ARRAY)
 MUMPS implementation | [GUIBS5A^DPTLK6](http://code.osehra.org/dox/Routine_DPTLK6_source.html)
 type | 
 complexity | 
 uses | 
 return type | ARRAY
 return description | CHECKS IF OTHER PATIENTS ON 'BS5' XREF WITH SAME LAST NAMERETURN 1 OR 0 IN 1ST STRING (-1 IF BAD DFN OR NO ZERO NODE).RETURNS ARRAY NODES WHERE TEXT IS PRECEEDED BY 0 AND PATIENT DATAIS PRECEEDED BY 1. PATIENT DATA WILL BE IN FOLLOWING FORMAT: 1^DFN^PATIENT NAME^DOB^SSN

### Input Parameters

| id | parameterType | required | description | example | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | true | {::nomarkdown}PATIENT FILE IEN{:/} |  | 

{::nomarkdown} <br/><p style="font-size: 11px">Generated on April 3rd 2017, 4:24:12 pm</p>{:/}