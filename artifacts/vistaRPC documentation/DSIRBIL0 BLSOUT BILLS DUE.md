---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIRBIL0 BLSOUT BILLS DUE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIRBIL0 BLSOUT BILLS DUE{:/}
 tag | {::nomarkdown}BLSOUT{:/}
 routine | [DSIRBIL0](http://code.osehra.org/dox/Routine_DSIRBIL0_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This routine retrieves a requestor from the provided request and createsan outstanding bill report for that requestor. {:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a pointer to the ROI Instance file (19620).  It can point to any request that is requested by the desired requestor.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}