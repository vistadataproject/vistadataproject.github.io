---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; IBD GET INPUT OBJECT BY CLINIC 

 property | value 
--- | --- 
 label | IBD GET INPUT OBJECT BY CLINIC
 tag | CLNLSTI
 routine | [IBDFRPC](http://code.osehra.org/dox/Routine_IBDFRPC_source.html)
 return value type | ARRAY
 description | Returns a list of input objects on all encounter forms defined for aclinic in the clinic setup.  There are 3 types of input objects,lists, hand print fields, and multiple choice fields.  Each has itsown set of unique characterists for input.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CLINIC | LITERAL | 30 | true | This is the pointer to file 44 or a unique clinic name. | 




 Generated on January 11th 2017, 7:15:03 am