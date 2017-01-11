---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SC BLD PAT SCDE LIST 

 property | value 
--- | --- 
 label | SC BLD PAT SCDE LIST
 tag | PTSCBLD
 routine | [SCMCBK](http://code.osehra.org/dox/Routine_SCMCBK_source.html)
 return value type | SINGLE VALUE
 description | Buils a list of patients who are associated with a particular stop code.Only those patients within the specified date range will appear in the list.Screens out inactive stop codes.  Format of the list is ^TMP($J,\SCSCDE\,DFN)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PARAMETER LIST | LIST | 512 | true |  | 




 Generated on January 11th 2017, 7:15:03 am