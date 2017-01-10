---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG3 TIU SIGN RECORD 

 property | value 
--- | --- 
 label | MAG3 TIU SIGN RECORD
 tag | SIGN
 routine | [MAGGNTI1](http://code.osehra.org/dox/Routine_MAGGNTI1_source.html)
 return value type | SINGLE VALUE
 description | Calls TIU API : SIGN^TIUSRVPIf the call succeeds the Note will be changed to 'completed'If the call fails, the Note status will not be changed.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | MAGDFN | LITERAL | 60 | true | Patient DFN | 
| vs:Input_Parameter-8994_02 | MAGTIUDA | LITERAL | 60 | true | The TIU Document IEN from File ^TIU(8925 | 
| vs:Input_Parameter-8994_02 | MAGES | LITERAL | 60 | true | The users encrypted Electronic Signature. | 
| vs:Input_Parameter-8994_02 | MAGESBY | LITERAL | 30 | true | The DUZ of the Signer (defaults to Partition Variable: DUZ) | 