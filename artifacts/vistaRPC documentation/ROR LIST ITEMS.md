---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ROR LIST ITEMS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ROR LIST ITEMS{:/}
 tag | {::nomarkdown}LSTITEMS{:/}
 routine | [RORRP012](http://code.osehra.org/dox/Routine_RORRP012_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}The ROR LIST ITEMS remote procedure returns a list of registry-specific items from the ROR LIST ITEM file.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}REGIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1).{:/} | 
| {::nomarkdown}TYPE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The TYPE parameter defines type of the items that should be extracted:   3  Lab Groups  4  Drug Groups See description of the TYPE field (.02) of the ROR LIST ITEM file (#799.1)for more details.for more details.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}