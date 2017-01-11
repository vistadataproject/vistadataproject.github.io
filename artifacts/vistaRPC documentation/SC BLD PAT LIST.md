---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SC BLD PAT LIST 

 property | value 
--- | --- 
 label | SC BLD PAT LIST
 tag | PTLSTBLD
 routine | [SCMCBK](http://code.osehra.org/dox/Routine_SCMCBK_source.html)
 return value type | SINGLE VALUE
 description | Builds a list of patients to be assigned to either a team or positionthrough the multiple assignment form.  This list is called by the actual \filer\ for either the Team or the position.  The list's format is ^TMP($J,\SC PATIENT LIST\,DFN)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| SCVAL | LITERAL | 512 | true |  | 




 Generated on January 11th 2017, 7:15:03 am