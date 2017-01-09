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
 VISTA (8994) description | [nodeVISTA 8994](../vistaRPC documentation/ORWPT DIEDON)
 MUMPS implementation | [DIEDON^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 type | READ_STRUCTURED
 complexity | 
 uses | 
 return type | SINGLE VALUE
 return description | Returns date of death if patient has expired.  Otherwise returns 0.
 Method comment | Check for a date of death

### Input Parameters

| id | parameterType | required | description | example | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | true | {::nomarkdown}Patient id (DFN){:/} |  | 