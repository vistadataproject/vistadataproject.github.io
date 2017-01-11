---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV TRAVERSE IMAGE FILE 

 property | value 
--- | --- 
 label | MAGV TRAVERSE IMAGE FILE
 tag | TRAVIMG
 routine | [MAGVRS09](http://code.osehra.org/dox/Routine_MAGVRS09_source.html)
 return value type | ARRAY
 description | This RPC allows the user to traverse the entries on the IMAGE INSTANCE FILE File (#2005.65) that are indexed under an entry on the IMAGE SOP INSTANCE File (#2005.64).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 20 | true | This is the internal entry number of the entry on the IMAGE SOP INSTANCE File (#2005.64) whose child entries on the IMAGE INSTANCE FILE File (#2005.65) are to be traversed. | 
| DIR | LITERAL | 10 | true | This is the direction of traversal:  FIRST, NEXT, PREV, or LAST. | 
| CHILDIEN | LITERAL | 10 |  | This is the internal entry number of the instance on the IMAGE INSTANCEFILE File (#2005.65) from which to proceed.  It should be specified onlyfor the NEXT and PREV traversal commands. | 




 Generated on January 11th 2017, 7:15:04 am