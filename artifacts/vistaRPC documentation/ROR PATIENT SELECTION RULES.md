---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ROR PATIENT SELECTION RULES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ROR PATIENT SELECTION RULES{:/}
 tag | {::nomarkdown}PTRULES{:/}
 routine | [RORRP022](http://code.osehra.org/dox/Routine_RORRP022_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}The ROR PATIENT SELECTION RULES remote procedure returns a list of selection rules that have caused addition of the patient to the registry.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}REGIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1).{:/} | 
| {::nomarkdown}PATIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Valid IEN of a registry patient should be assigned to the PATIENparameter.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}