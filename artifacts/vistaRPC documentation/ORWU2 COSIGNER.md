---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWU2 COSIGNER 

 property | value 
--- | --- 
 label | ORWU2 COSIGNER
 tag | COSIGNER
 routine | [ORWU2](http://code.osehra.org/dox/Routine_ORWU2_source.html)
 return value type | ARRAY
 description | Returns a set of New Person file entries for use in a long list box.The set is limited to USR PROVIDERS who do not require cosignature.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ORDATE | LITERAL |  |  | Fileman date that the user will be required to be active on. (optional) | 
| ORDIR | LITERAL |  | true | Direction to move through the #200 x-ref with $O. | 
| ORFROM | LITERAL |  |  | Starting name for this set. | 
| ORTIUTYP | LITERAL |  | true | is + of the 0 node of the 8925 docmt | 
| ORTIUDA | LITERAL |  | true | This is the record # of the TIU Document in file 8925. | 