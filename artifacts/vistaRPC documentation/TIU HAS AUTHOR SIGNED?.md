---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU HAS AUTHOR SIGNED? 

 property | value 
--- | --- 
 label | TIU HAS AUTHOR SIGNED?
 tag | AUTHSIGN
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | SINGLE VALUE
 description | Boolean RPC returns a value of 0 if the author has not signed and the user attempting to sign is the expected co-signer.  Returns a 1 if the author has signed or the user attempting to sign is NOT the expected co-signer.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | TIUDA | LITERAL |  | true | This is the TIU Document IEN. | 
| vs:Input_Parameter-8994_02 | TIUUSR | LITERAL |  | true | This is the DUZ of the user attempting to sign. | 