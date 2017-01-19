---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) &#8594; ORQQPL PROBLEM LIST 

 property | value 
--- | --- 
 name | ORQQPL PROBLEM LIST
 domain | Problem
 description | {::nomarkdown}Problem list for CPRS GUI client{:/}
 VA RPC Documentation | [see 8994 and method descriptions](../vistaRPC documentation/ORQQPL PROBLEM LIST)
 MUMPS implementation | [PROBL^ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
 type | CHANGE
 complexity | HIGH
 uses | 
 return type | ARRAY
 return description | List of problems with comments

### Input Parameters

| id | parameterType | required | description | example | 
| --- | --- | --- | --- | --- | 
| DFN | REFERENCE | true | {::nomarkdown}Patient IEN{:/} | 25 | 
| GMPSTAT | LITERAL |  | {::nomarkdown}Problem status filter: A - active, I - inactive, B - Both active and inactive, R - removed{:/} | A | 
| ORIDT | DATE |  | {::nomarkdown}Problem date filter? This parameter is typically passed in as zero{:/} | 0 | 

{::nomarkdown} <br/><p style="font-size: 11px">Generated on January 19th 2017, 8:27:18 am</p>{:/}