---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; RMPR ENCRYPT PCARD 

 property | value 
--- | --- 
 label | RMPR ENCRYPT PCARD
 tag | EN
 routine | [RMPR9ENC](http://code.osehra.org/dox/Routine_RMPR9ENC_source.html)
 return value type | ARRAY
 description | Remote Procedure to update the PROSTHETICS 1358 file #664 with the encrypted PCARD.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | RMPRPCD | LITERAL | 255 |  |  | 
| vs:Input_Parameter-8994_02 | DUZ | LITERAL | 6 |  |  | 
| vs:Input_Parameter-8994_02 | RMPRA | LITERAL | 30 |  |  | 