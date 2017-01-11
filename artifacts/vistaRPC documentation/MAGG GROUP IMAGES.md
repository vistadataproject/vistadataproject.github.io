---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGG GROUP IMAGES 

 property | value 
--- | --- 
 label | MAGG GROUP IMAGES
 tag | GROUP
 routine | [MAGGTIG](http://code.osehra.org/dox/Routine_MAGGTIG_source.html)
 return value type | ARRAY
 description | Returns array of images for an Image entry.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGIEN | LITERAL | 30 | true | Internal entry of Image entry in Image File ^MAG(2005, | 
| NOCHK | LITERAL | 4 | true | If this flag is sent with a value of 1, then the QA check willnot be run.  Image Group Abs will be returned even if it is anImage Group of Questionable Integrity.This is used when deleting an Image, but the user needs to seethe abstracts that may have been blocked otherwise.Defaults to 0 (false) | 
| FLAGS | LITERAL |  | true | Supported FLAGS\D\ - Include deleted images | 




Generated on January 11th 2017, 6:34:23 am