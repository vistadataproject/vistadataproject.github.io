---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; OOPS MULTIPLE DATA 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OOPS MULTIPLE DATA{:/}
 tag | {::nomarkdown}MULTIPLE{:/}
 routine | [OOPSGUIC](http://code.osehra.org/dox/Routine_OOPSGUIC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This broker call will be used to both get and set data stored in a sub-recordor multiple.  When saving (setting) data, the entire subrecord is deleted thenre-filed.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INPUT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter contains three pieces of data, the top level file number to befiled into, the field number, and the IEN in the format:  FILE^FIELD^IEN.{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter is an array that contains the data to be filed into the multiple.  If this parameter is null, then a GET will be preformed rather than a set.{:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}