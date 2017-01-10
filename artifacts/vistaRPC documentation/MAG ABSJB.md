---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG ABSJB 

 property | value 
--- | --- 
 label | MAG ABSJB
 tag | ABSJB
 routine | [MAGGTU71](http://code.osehra.org/dox/Routine_MAGGTU71_source.html)
 return value type | SINGLE VALUE
 description | Sets queue entry to create abstract and/or copy to jukebox.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | MAGIEN | LITERAL | 255 | true | Pointer to image file | 
| vs:Input_Parameter-8994_02 | DATA | LITERAL | 200 | true | $P(1) IEN.  Set an Abstract Queue for the IEN.           - Abstract will be created.$p(2) IEN. Set a JukeBox Queue for the IEN.           - Image will be copied from Jukebox. | 