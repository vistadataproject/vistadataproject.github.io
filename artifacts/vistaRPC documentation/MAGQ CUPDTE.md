---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGQ CUPDTE 

 property | value 
--- | --- 
 label | MAGQ CUPDTE
 tag | CUPD
 routine | [MAGQBPRG](http://code.osehra.org/dox/Routine_MAGQBPRG_source.html)
 return value type | SINGLE VALUE
 description | This RPC is used by the purge routine to update the magnetic references inthe image file(#2005) for images have migrated to heretofore unmappednetwork locations.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FILEPATH | LITERAL |  | true | This is the network path on which the image file was found. | 
| FNAME | LITERAL |  | true | This is the filename, including extension, which requires its locationupdated.  | 
| IEN | LITERAL |  | true | This is the internal entry number of the image file (#2005) which requiresupdating. | 