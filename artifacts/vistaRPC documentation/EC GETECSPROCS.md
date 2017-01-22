---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; EC GETECSPROCS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}EC GETECSPROCS{:/}
 tag | {::nomarkdown}PROC{:/}
 routine | [ECUERPC](http://code.osehra.org/dox/Routine_ECUERPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns an array of procedures for an Event Code screen (file #720.3). Eventcode screens are based on location, DSS unit and Category.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ECARY{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Input variable ECARY contains the following values separated by up-arrow.  1.  ECL  - Location IEN  2.  ECD  - DSS Unit IEN  3.  ECC  - Category IEN{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}