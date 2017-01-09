---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) &#8594; ORQQPL REPLACE 

 property | value 
--- | --- 
 name | ORQQPL REPLACE
 domain | Problem
 description | {::nomarkdown}REPLACES A PROBLEM THAT WAS PREVIOUSLY DELETED{:/}
 VISTA (8994) description | [nodeVISTA 8994](../vistaRPC documentation/ORQQPL REPLACE)
 MUMPS implementation | [REPLACE^ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 type | CHANGE
 complexity | MEDIUM
 uses | 
 return type | SINGLE VALUE
 return description | 
 Method comment | replace problem on patient's list
 Leading comment lines | taken from REPLACE^GMPLRPTR

### Input Parameters

| id | parameterType | required | description | example | 
| --- | --- | --- | --- | --- | 
| GMPIFN | REFERENCE | true | {::nomarkdown}IFN OF PROBLEM{:/} | 1 | 