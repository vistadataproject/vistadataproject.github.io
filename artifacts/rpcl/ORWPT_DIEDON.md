---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) --> ORWPT DIEDON 

 property | value 
--- | --- 
 name | ORWPT DIEDON
 description | {::nomarkdown}Returns date of death if patient has expired.  Otherwise returns 0.{:/}
 VISTA (8994) description | [nodeVISTA 8994](http://localhost:9000/query?fmql=DESCRIBE%208994%20FILTER%20(.01%3DORWPT%20DIEDON)&format=HTML)
 MUMPS implementation | [DIEDON^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 type | READ_STRUCTURED
 complexity | 
 uses | 
 return type | SINGLE VALUE
 return description | Returns date of death if patient has expired.  Otherwise returns 0.

### Input Parameters

| id | parameterType | required | description | example | listMemberParameters | 
| --- | --- | --- | --- | --- | --- | 
| DFN | LITERAL | true | {::nomarkdown}Patient id (DFN){:/} |  |  | 