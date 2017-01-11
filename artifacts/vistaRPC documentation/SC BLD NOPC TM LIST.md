---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SC BLD NOPC TM LIST 

 property | value 
--- | --- 
 label | SC BLD NOPC TM LIST
 tag | NOPCTM
 routine | [SCMCBK1](http://code.osehra.org/dox/Routine_SCMCBK1_source.html)
 return value type | SINGLE VALUE
 description | Builds a list of patients that have a primary care assignment, but nocurrent primary care team assignment.  Uses $$PTPCNTM^SCAPMC20

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PARAMETER LIST | LIST | 512 | true | Pass in Team to be assigned to and effective date for search.Position to be assigned to is required for assign to position | 




 ###### Generated on January 11th 2017, 6:39:42 am