---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ROR LIST SELECTION RULES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ROR LIST SELECTION RULES{:/}
 tag | {::nomarkdown}SELRULES{:/}
 routine | [RORRP014](http://code.osehra.org/dox/Routine_RORRP014_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}The ROR LIST SELECTION RULES remote procedure returns a list of registry selection rules from the ROR SELECTION RULE file(#798.2) that are referenced by the SELCTION RULE multiple (3)of the ROR REGISTRY PARAMETERS file (#798.1).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}REGIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}