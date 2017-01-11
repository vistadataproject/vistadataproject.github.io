---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU LINK DOCUMENT TO IMAGE 

 property | value 
--- | --- 
 label | TIU LINK DOCUMENT TO IMAGE
 tag | PUTIMAGE
 routine | [TIUSRVPL](http://code.osehra.org/dox/Routine_TIUSRVPL_source.html)
 return value type | SINGLE VALUE
 description | This RPC links a document with an image. It will support a many-to-manyassociation between documents and images.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUDA | LITERAL |  | true | This is the record number (IEN) of the document in the TIU DOCUMENT FILE(#8925). | 
| IMGDA | LITERAL |  | true | This is the record number (IEN) of the document in the IMAGE FILE (#2005). | 




Generated on January 11th 2017, 6:34:23 am