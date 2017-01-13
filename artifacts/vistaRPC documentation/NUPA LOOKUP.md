---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; NUPA LOOKUP 

 property | value 
--- | --- 
 label | {::nomarkdown}NUPA LOOKUP{:/}
 tag | {::nomarkdown}LOOK{:/}
 routine | [NUPABCL](http://code.osehra.org/dox/Routine_NUPABCL_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Does lookups on files.  Returns info in ^TMP(\DILIST\,$J) or -1 if recordnot in file.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAMETERS{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Array of format: PAR(\F\)=The file to do the lookup on.PAR(\V\)=The value to lookup.PAR(\FD\)=Fields to return data from.PAR(\IND\)=Indexes to do the lookup on.PAR(\NUM\)=Number of results to return.PAR(\SCR\)=The fileman lookup screen.{:/} | 




 Generated on January 13th 2017, 6:55:29 am