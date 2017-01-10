---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU GET ASSOCIATED IMAGES 

 property | value 
--- | --- 
 label | TIU GET ASSOCIATED IMAGES
 tag | GETILST
 routine | [TIUSRVPL](http://code.osehra.org/dox/Routine_TIUSRVPL_source.html)
 return value type | ARRAY
 description | Given a Document, get the list of associated images.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | TIUDA | LITERAL |  | true | This is the record number (IEN) of the document in the TIU DOCUMENT FILE(#8925). | 