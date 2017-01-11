---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV TRAVERSE SOP 

 property | value 
--- | --- 
 label | MAGV TRAVERSE SOP
 tag | TRAVSOP
 routine | [MAGVRS09](http://code.osehra.org/dox/Routine_MAGVRS09_source.html)
 return value type | ARRAY
 description | This RPC allows the user to traverse the entries on the IMAGE SOP INSTANCEFile (#2005.64) that are indexed under an entry on the IMAGE SERIES File(#2005.63).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 20 | true | This is the internal entry number of the entry on the IMAGE SERIES File (#2005.63) whose child entries on the IMAGE SOP INSTANCE File (#2005.64) are to be traversed. | 
| DIR | LITERAL | 10 | true | This is the direction of traversal:  FIRST, NEXT, PREV, or LAST. | 
| CHILDIEN | LITERAL | 10 |  | This is the internal entry number of the entry on the IMAGE SOP INSTANCE File (#2005.64) from which to proceed.  It should be specified only forthe NEXT and PREV traversal commands. | 




 ###### Generated on January 11th 2017, 6:39:43 am