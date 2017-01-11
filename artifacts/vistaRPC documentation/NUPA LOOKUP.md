---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; NUPA LOOKUP 

 property | value 
--- | --- 
 label | NUPA LOOKUP
 tag | LOOK
 routine | [NUPABCL](http://code.osehra.org/dox/Routine_NUPABCL_source.html)
 return value type | GLOBAL ARRAY
 description | Does lookups on files.  Returns info in ^TMP(\DILIST\,$J) or -1 if recordnot in file.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PARAMETERS | LIST |  | true | Array of format: PAR(\F\)=The file to do the lookup on.PAR(\V\)=The value to lookup.PAR(\FD\)=Fields to return data from.PAR(\IND\)=Indexes to do the lookup on.PAR(\NUM\)=Number of results to return.PAR(\SCR\)=The fileman lookup screen. | 




Generated on January 11th 2017, 6:34:23 am