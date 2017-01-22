---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ROR LIST COORDINATORS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ROR LIST COORDINATORS{:/}
 tag | {::nomarkdown}RCLIST{:/}
 routine | [RORRP023](http://code.osehra.org/dox/Routine_RORRP023_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}The ROR LIST COORDINATORS remote procedure returns a list of registry coordinators. The list is retrieved from the COORDINATOR multiple (14) ofthe ROR REGISTRY PARAMETERS file (#798.1).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}REGIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The REGIEN parameter should contain a valid registry IEN (IEN of the registry parameters record in the ROR REGISTRY PARAMETERS file #798.1).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}