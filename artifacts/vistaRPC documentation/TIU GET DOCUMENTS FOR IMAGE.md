---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU GET DOCUMENTS FOR IMAGE 

 property | value 
--- | --- 
 label | TIU GET DOCUMENTS FOR IMAGE
 tag | GETDLST
 routine | [TIUSRVPL](http://code.osehra.org/dox/Routine_TIUSRVPL_source.html)
 return value type | ARRAY
 description | Given an image, get the list of associated documents.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IMGDA | LITERAL |  | true | This is the record number (IEN) of the image in the IMAGE FILE (#2005).  | 