---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC CPT FIND 

 property | value 
--- | --- 
 label | DSIC CPT FIND
 tag | FIND
 routine | [DSICCPT](http://code.osehra.org/dox/Routine_DSICCPT_source.html)
 return value type | GLOBAL ARRAY
 description | For a lookup value, this will return a list of CPT codes matching that lookup value.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| VAL | LITERAL | 50 | true | This is the lookup value for getting a list of CPT codes | 
| DATE | LITERAL | 14 | true | This date is optional.  Default to TODAY.  Only CPT codes that were active as of this date will be included in the return list. | 




Generated on January 11th 2017, 6:34:23 am