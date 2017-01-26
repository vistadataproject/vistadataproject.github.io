---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OOPS REPLACE WP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OOPS REPLACE WP{:/}
 tag | {::nomarkdown}REPLWP{:/}
 routine | [OOPSGUI2](http://code.osehra.org/dox/Routine_OOPSGUI2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This call will replace Word Processing fields based on input paramtersindicating the file, field and IEN of the record that will be changed. Anotherinput parameter contains the data via a list or pointer that will be placedinto the \new\ word processing fields. {:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INPUT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The input parameter must contain the file,field and IEN of the record to bemodified. It must be in the formatFILE^FIELD^IEN.{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the new text that will be inserted into the word processing field.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:45 pm</p>{:/}