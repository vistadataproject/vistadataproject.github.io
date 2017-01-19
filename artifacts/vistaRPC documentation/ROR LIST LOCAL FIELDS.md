---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ROR LIST LOCAL FIELDS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ROR LIST LOCAL FIELDS{:/}
 tag | {::nomarkdown}LFLIST{:/}
 routine | [RORRP040](http://code.osehra.org/dox/Routine_RORRP040_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}The ROR LIST LOCAL FIELDS remote procedure returns a list ofregistry-specific field definitions from the ROR LOCAL FIELD file(#799.53).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}REGIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1).{:/} | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Flags that control the execution (can be combined):   I  Include inactive field definitions{:/} | 
| {::nomarkdown}LOCK{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Lock the local fields before loading the data and leave them locked.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}