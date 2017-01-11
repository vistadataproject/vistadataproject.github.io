---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV TRAVERSE SERIES 

 property | value 
--- | --- 
 label | MAGV TRAVERSE SERIES
 tag | TRAVSERS
 routine | [MAGVRS09](http://code.osehra.org/dox/Routine_MAGVRS09_source.html)
 return value type | ARRAY
 description | This RPC allows the user to traverse the entries on the IMAGE SERIES File(#2005.63) that are indexed under an entry on the IMAGE STUDY File(#2005.62).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 20 | true | This is the internal entry number of the entry on the IMAGE STUDY File (#2005.62) whose child entries on the IMAGE SERIES File (#2005.63) are to be traversed.IEN | 
| DIR | LITERAL | 10 | true | This is the direction of traversal:  FIRST, NEXT, PREV, or LAST. | 
| CHILDIEN | LITERAL | 10 | true | This is the internal entry number of the entry on the IMAGE SERIES File (#2005.63) from which to proceed.  It should be specified only for theNEXT or PREV traversal commands. | 