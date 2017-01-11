---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU SIGN RECORD 

 property | value 
--- | --- 
 label | TIU SIGN RECORD
 tag | SIGN
 routine | [TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
 return value type | SINGLE VALUE
 description | This API Supports the application of the user's electronic signature to aTIU document while evaluating authorization, and validating the user'selectronic signature.


### Method description

 property | value 
--- | --- 
 Method comment | API for /es/
 Leading comment lines | For backward compatibility,Use SIGN^TIUSRVP2 now, please

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUDA | LITERAL |  | true | This it the record number (IEN) in the TIU DOCUMENT FILE (#8925) for therecord which has been electronically signed. | 
| TIUX | LITERAL | 245 | true | This is the network-encrypted string of what the user entered as his/herelectronic signature code.  The SIGN API will call Kernel to validate thesignature code, determine the user's role and privilege with respect tothe document in question, and apply the signature to the document, ifappropriate. | 