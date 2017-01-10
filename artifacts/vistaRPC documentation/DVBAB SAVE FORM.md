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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DVBIEN | LITERAL |  | true |  | 
| vs:Input_Parameter-8994_02 | DVBLINES | LIST |  | true |  | 
| vs:Input_Parameter-8994_02 | DVBLINECOUNT | LITERAL |  | true |  | 
| vs:Input_Parameter-8994_02 | DVBLINEN | LITERAL |  | true |  | 