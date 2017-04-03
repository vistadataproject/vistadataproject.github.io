---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) &#8594; ORPRF HASFLG 

 property | value 
--- | --- 
 name | ORPRF HASFLG
 domain | Patient
 description | {::nomarkdown}Does patient PTDFN has flags{:/}
 VA RPC Documentation | [see 8994 and method descriptions](../vistaRPC documentation/ORPRF HASFLG)
 MUMPS implementation | [HASFLG^ORPRF](http://code.osehra.org/dox/Routine_ORPRF_source.html)
 type | 
 complexity | 
 uses | 
 return type | ARRAY
 return description | Returns array ORY listing active assigned flags\nArray ORY has form:\n  ORY(flagID) = flagID^flagname,CAT1\n      where CAT1 is 1 if flag is cat 1, 0 if cat 2\n ORY = Num of items returned in array ORY = num of flags

### Input Parameters

| id | parameterType | required | description | example | 
| --- | --- | --- | --- | --- | 
| PTDFN | LITERAL | true | {::nomarkdown}Patient id (DFN){:/} |  | 

{::nomarkdown} <br/><p style="font-size: 11px">Generated on April 3rd 2017, 4:24:12 pm</p>{:/}