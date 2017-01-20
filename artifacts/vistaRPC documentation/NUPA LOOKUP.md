---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; NUPA LOOKUP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}NUPA LOOKUP{:/}
 tag | {::nomarkdown}LOOK{:/}
 routine | [NUPABCL](http://code.osehra.org/dox/Routine_NUPABCL_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Does lookups on files.  Returns info in ^TMP(\DILIST\,$J) or -1 if recordnot in file.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAMETERS{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Array of format: PAR(\F\)=The file to do the lookup on.PAR(\V\)=The value to lookup.PAR(\FD\)=Fields to return data from.PAR(\IND\)=Indexes to do the lookup on.PAR(\NUM\)=Number of results to return.PAR(\SCR\)=The fileman lookup screen.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}