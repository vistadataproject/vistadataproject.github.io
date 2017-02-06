---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DDR KEY VALIDATOR 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DDR KEY VALIDATOR{:/}
 tag | {::nomarkdown}KEYVAL{:/}
 routine | [DDR3](http://code.osehra.org/dox/Routine_DDR3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Validates that values passed in do not violate key integrity.  UnderlyingDBS call is KEYVAL^DIE.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VALUES TO VALIDATE{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}512{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Array of data used to create FDA for KEYVAL^DIE call.  Alternating linescontain file#^IENS^field# and value associated with preceding file, record,and field.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:03 am</p>{:/}