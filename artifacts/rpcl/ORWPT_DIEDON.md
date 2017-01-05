---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) --> ORWPT DIEDON 

 property | value 
--- | --- 
 name | ORWPT DIEDON
 description | Returns date of death if patient has expired.  Otherwise returns 0.
 MUMPS implementation | DIEDON^ORWPT
 type | READ_STRUCTURED
 complexity | 
 uses | 
 return type | SINGLE VALUE
 return description | Returns date of death if patient has expired.  Otherwise returns 0.

### Input Parameters

| id | parameterType | required | description | example | listMemberParameters | 
| --- | --- | --- | --- | --- | --- | 
| DFN | LITERAL | true | Patient id (DFN) |  |  | 