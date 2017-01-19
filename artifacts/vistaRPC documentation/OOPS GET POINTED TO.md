---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OOPS GET POINTED TO 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OOPS GET POINTED TO{:/}
 tag | {::nomarkdown}GETLIST{:/}
 routine | [OOPSGUI3](http://code.osehra.org/dox/Routine_OOPSGUI3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}The broker call passes the file and field number back to the variable FLD onthe M side.  The M code will return the code (pointer) and the description forset of codes or table files to be used in lookups.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}single{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} |  | {::nomarkdown}This must contain the File and Field number separated by the caret character.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}