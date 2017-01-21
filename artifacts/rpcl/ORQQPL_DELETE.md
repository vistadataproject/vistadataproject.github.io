---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) &#8594; ORQQPL DELETE 

 property | value 
--- | --- 
 name | ORQQPL DELETE
 domain | Problem
 description | {::nomarkdown}DELETES A PROBLEM{:/}
 VA RPC Documentation | [see 8994 and method descriptions](../vistaRPC documentation/ORQQPL DELETE)
 MUMPS implementation | [DELETE^ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 type | CHANGE
 complexity | MEDIUM
 uses | 
 return type | SINGLE VALUE
 return description | 

### Input Parameters

| id | parameterType | required | description | example | 
| --- | --- | --- | --- | --- | 
| GMPIFN | REFERENCE | true | {::nomarkdown}record ifn{:/} | 1 | 
| GMPROV | REFERENCE | true | {::nomarkdown}provider{:/} | 57 | 
| GMPVAMC | REFERENCE | true | {::nomarkdown}facility id{:/} | 2957 | 
| REASON | LITERAL |  | {::nomarkdown}reason for removal{:/} |  | 

{::nomarkdown} <br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:15 am</p>{:/}