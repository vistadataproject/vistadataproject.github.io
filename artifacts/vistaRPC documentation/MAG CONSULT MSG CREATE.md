---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG CONSULT MSG CREATE 

 property | value 
--- | --- 
 label | MAG CONSULT MSG CREATE
 tag | MSG
 routine | [MAGMAPI](http://code.osehra.org/dox/Routine_MAGMAPI_source.html)
 return value type | SINGLE VALUE
 description | Piece1=0 if failurePiece1=1 if successful  Note: you must create the mail group IMAGE TELECONSULT (RADIOLOGY) and      add members to recieve the consult notification mail message.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | MAGDUZ | LITERAL | 255 | true | DUZ number for sender of message | 
| vs:Input_Parameter-8994_02 | TXT | LIST | 32000 | true | Message to be sent; $END$; Recipient list | 