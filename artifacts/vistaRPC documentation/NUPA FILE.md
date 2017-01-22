---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; NUPA FILE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}NUPA FILE{:/}
 tag | {::nomarkdown}FILE{:/}
 routine | [NUPABCL](http://code.osehra.org/dox/Routine_NUPABCL_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Files data into Fileman files.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DIE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The file to save data to, in regular fileman format.{:/} | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The DA variable for the DIE call, in regular fileman format.{:/} | 
| {::nomarkdown}FIELD{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The field number to file data into, in numeric format.{:/} | 
| {::nomarkdown}VALUE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The value to save to the field.{:/} | 
| {::nomarkdown}SLASHES{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The number of slashes for the DIE call, typically 3 or 4.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}