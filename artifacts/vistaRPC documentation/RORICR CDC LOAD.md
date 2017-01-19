---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; RORICR CDC LOAD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}RORICR CDC LOAD{:/}
 tag | {::nomarkdown}LOADCDC{:/}
 routine | [RORRP025](http://code.osehra.org/dox/Routine_RORRP025_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}The RORICR CDC LOAD remote procedure loads the data for the CDC form that is edited/printed by the ICR registry.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}REGIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1).{:/} | 
| {::nomarkdown}PATIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}A valid patient IEN (DFN) should be assigned to the PATIEN parameter.{:/} | 
| {::nomarkdown}LOCK{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}If this parameter is defined and not zero then the RPC will try to lockthe registry record before loading the data and will leave it locked.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}