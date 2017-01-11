---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS CHANGE CASE STATUS 

 property | value 
--- | --- 
 label | OOPS CHANGE CASE STATUS
 tag | CHGCASE
 routine | [OOPSGUI6](http://code.osehra.org/dox/Routine_OOPSGUI6_source.html)
 return value type | SINGLE VALUE
 description | This broker call passes in the ASISTS IEN, new case status and if the casestatus is deleted the reason for deletion.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| INPUT | LITERAL | 256 | true | The INPUT parameter has the format: IEN^CASE STATUS where IEN is the ASIST record IEN and CASE STATUS is the case status the claim should be changed to. | 
| FLD58 | LITERAL | 80 |  | The parameter FLD58 is the text field Reason for Deletion if the case statushas been changed to deleted. | 




 Generated on January 11th 2017, 7:15:04 am