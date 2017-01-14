---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; OOPS DELETE WITNESS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}OOPS DELETE WITNESS{:/}
 tag | {::nomarkdown}DELWITN{:/}
 routine | [OOPSGUI2](http://code.osehra.org/dox/Routine_OOPSGUI2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This broker call will delete witness information from the \CA1W\ node in file 2260 based on the IEN and sub file id passed in.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INPUT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This required input parameter must contain the IEN and record number of thesubfile for witness information to be deleted. The input format is IEN^SUB.{:/} | 
| {::nomarkdown}OOPS CHANGE CAS{:/} |  |  |  |  | 




 Generated on January 14th 2017, 7:26:35 am