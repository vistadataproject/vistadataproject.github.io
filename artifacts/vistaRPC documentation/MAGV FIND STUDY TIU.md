---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV FIND STUDY TIU 

 property | value 
--- | --- 
 label | MAGV FIND STUDY TIU
 tag | TIUCHK
 routine | [MAGVRS43](http://code.osehra.org/dox/Routine_MAGVRS43_source.html)
 return value type | ARRAY
 description | This RPC returns the TIU note with which an image study is associatedif the study is associated with a consult procedure and a TIU noteexists for the consult.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| STYIEN | LITERAL | 15 | true | This is an internal entry number on the IMAGE STUDY File (#2005.63). | 




 Generated on January 11th 2017, 7:15:04 am