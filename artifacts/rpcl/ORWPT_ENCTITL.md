---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) &#8594; ORWPT ENCTITL 

 property | value 
--- | --- 
 name | ORWPT ENCTITL
 domain | Patient
 description | {::nomarkdown}Returns external values to display for encounter in format: LOCNAME^LOCABBR^ROOMBED^PROVNAME{:/}
 VA RPC Documentation | [see 8994 and method descriptions](../vistaRPC documentation/ORWPT ENCTITL)
 MUMPS implementation | [ENCTITL^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 type | 
 complexity | 
 uses | 
 return type | SINGLE VALUE
 return description | Returns external values to display for encounter in format: LOCNAME^LOCABBR^ROOMBED^PROVNAME

### Input Parameters

| id | parameterType | required | description | example | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | true | {::nomarkdown}Patient id (DFN){:/} |  | 
| LOC | LITERAL | true | {::nomarkdown}Hospital location identifier{:/} |  | 
| PROV | LITERAL | true | {::nomarkdown}Provider/User identifier{:/} |  | 

{::nomarkdown} <br/><p style="font-size: 11px">Generated on April 3rd 2017, 4:24:12 pm</p>{:/}