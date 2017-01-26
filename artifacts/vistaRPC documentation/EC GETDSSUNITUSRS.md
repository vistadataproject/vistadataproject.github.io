---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; EC GETDSSUNITUSRS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}EC GETDSSUNITUSRS{:/}
 tag | {::nomarkdown}ECUSR{:/}
 routine | [ECUMRPC](http://code.osehra.org/dox/Routine_ECUMRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns an array of users with access to a particular DSS unit.  User access to a DSS unit is determined from file #200.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ECARY{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DSS unit IEN must be passed in as input parameter.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}