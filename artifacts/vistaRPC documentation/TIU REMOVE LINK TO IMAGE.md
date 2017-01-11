---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU REMOVE LINK TO IMAGE 

 property | value 
--- | --- 
 label | TIU REMOVE LINK TO IMAGE
 tag | DELIMAGE
 routine | [TIUSRVPL](http://code.osehra.org/dox/Routine_TIUSRVPL_source.html)
 return value type | SINGLE VALUE
 description | This RPC will remove a link between a document and an image. Only valid links may be removed.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUDA | LITERAL |  | true | This is the record number (IEN) of the document in the TIU DOCUMENT FILE(#8925). | 
| IMGDA | LITERAL |  | true | This is the record number (IEN) of the document in the IMAGE FILE (#2005). | 