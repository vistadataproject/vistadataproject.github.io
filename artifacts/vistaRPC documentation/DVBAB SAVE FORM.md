---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBAB SAVE FORM 

 property | value 
--- | --- 
 label | DVBAB SAVE FORM
 tag | SAVE
 routine | [DVBABFRM](http://code.osehra.org/dox/Routine_DVBABFRM_source.html)
 return value type | SINGLE VALUE
 description | Set DVBIEN to the internal entry number of the form Set DVBLINES to the lines to be saved Set DVBLINEN to the starting line # in the global.  This allows for formsto be sent in chunks.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DVBIEN | LITERAL |  | true |  | 
| DVBLINES | LIST |  | true |  | 
| DVBLINECOUNT | LITERAL |  | true |  | 
| DVBLINEN | LITERAL |  | true |  | 




Generated on January 11th 2017, 6:34:23 am