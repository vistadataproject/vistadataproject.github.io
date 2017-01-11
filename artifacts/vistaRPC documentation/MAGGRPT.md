---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGGRPT 

 property | value 
--- | --- 
 label | MAGGRPT
 tag | BRK
 routine | [MAGGTRPT](http://code.osehra.org/dox/Routine_MAGGTRPT_source.html)
 return value type | GLOBAL ARRAY
 description | Returns associated report for Image IEN.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGGIEN | LITERAL | 30 | true | Internal entry number in file ^MAG(2005. | 
| NOCHK | LITERAL | 4 | true | If this flag is sent with a value of 1, then the QA check willnot be run.  Image report will be returned even if it is animage of Questionable Integrity.This is used when deleting an Image, but the user needs to seethe report that may have been blocked otherwise.Defaults to 0 (false)  | 




 ###### Generated on January 11th 2017, 6:39:42 am