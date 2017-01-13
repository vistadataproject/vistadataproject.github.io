---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; EC GETECSCREEN 

 property | value 
--- | --- 
 label | {::nomarkdown}EC GETECSCREEN{:/}
 tag | {::nomarkdown}ECSCN{:/}
 routine | [ECUMRPC](http://code.osehra.org/dox/Routine_ECUMRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns a list active, inactive or both of Event Code Screens from EC EVENT CODE SCREENS FILE #720.3.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ECARY{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Input variable ECARY can contains the following elements separated by up-arrow.  STAT   - Active and/or inactive Event Code Screens           A-ctive (default), I-nactive, B-oth  LOCIEN - Location IEN (optional)  DSSIEN - DSS IEN (optional)If no parameter is passed, a status of active is assumed and all locations.If a LOCIEN is passed, then only the event codes screens with that location IEN is returned. Similarily, if a DSSIEN is passed, event code screens with for that DSS Unit is returned.{:/} | 




 Generated on January 13th 2017, 7:11:27 am