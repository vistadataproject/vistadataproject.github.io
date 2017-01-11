---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV TRAVERSE PROC REF 

 property | value 
--- | --- 
 label | MAGV TRAVERSE PROC REF
 tag | TRAVPROC
 routine | [MAGVRS09](http://code.osehra.org/dox/Routine_MAGVRS09_source.html)
 return value type | ARRAY
 description | This RPC allows the user to traverse the entries on the IMAGING PROCEDURE REFERENCE File (#2005.61) that are indexed under an entry on the IMAGING PATIENT REFERENCE File (#2005.6).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 20 | true | This is the internal entry number of the entry on the IMAGING PATIENT REFERENCE File (#2005.6) whose child entries on the IMAGING PROCEDURE REFERENCE File (#2005.61) are to be traversed. | 
| DIR | LITERAL | 10 | true | This is the direction of traversal:  FIRST, NEXT, PREV, or LAST. | 
| CHILDIEN | LITERAL | 10 |  | This is the internal entry number of the entry on the IMAGING PROCEDUREREFERENCE File (#2005.61) from which to proceed.  It should be specifiedonly for the NEXT and PREV traversal commands. | 