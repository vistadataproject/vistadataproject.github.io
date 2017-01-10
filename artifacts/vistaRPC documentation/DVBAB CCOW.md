---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBAB CCOW 

 property | value 
--- | --- 
 label | DVBAB CCOW
 tag | CCOW
 routine | [DVBABFRM](http://code.osehra.org/dox/Routine_DVBABFRM_source.html)
 return value type | SINGLE VALUE
 description | This remote procedure encapsulates the supported calls $$SITE^VASITEand $$PROD^XUPROD. Paramater TYPE     1 = Pass back local station number ($$SITE^VASITE)     2 = Pass back whether production account or not ($$PROD^XUPROD)

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | INFOTYPE | LITERAL |  | true |  | 
| vs:Input_Parameter-8994_02 | TYPE |  |  |  |  | 