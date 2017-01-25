---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) &#8594; ORWPT DIEDON 

 property | value 
--- | --- 
 name | ORWPT DIEDON
 domain | Patient
 description | {::nomarkdown}Returns date of death if patient has expired.  Otherwise returns 0.{:/}
 VA RPC Documentation | [see 8994 and method descriptions](../vistaRPC documentation/ORWPT DIEDON)
 MUMPS implementation | [DIEDON^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 type | READ_STRUCTURED
 complexity | 
 uses | 
 return type | SINGLE VALUE
 return description | Returns date of death if patient has expired.  Otherwise returns 0.

### Input Parameters

| id | parameterType | required | description | example | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | true | {::nomarkdown}Patient id (DFN){:/} |  | 

{::nomarkdown} <br/><p style="font-size: 11px">Generated on January 25th 2017, 12:46:20 am</p>{:/}