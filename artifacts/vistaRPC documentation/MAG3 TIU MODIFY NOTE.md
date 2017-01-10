---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG3 TIU MODIFY NOTE 

 property | value 
--- | --- 
 label | MAG3 TIU MODIFY NOTE
 tag | MOD
 routine | [MAGGNTI1](http://code.osehra.org/dox/Routine_MAGGNTI1_source.html)
 return value type | SINGLE VALUE
 description | Modify an Existing Note. Change it's status from unsigned to administrative closureor to signed.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | MAGDFN | LITERAL | 60 | true | DFN of the Patient. | 
| vs:Input_Parameter-8994_02 | MAGTIUDA | LITERAL | 60 | true | This is the IEN of the Note in file ^TIU(8925 | 
| vs:Input_Parameter-8994_02 | MAGADCL | LITERAL | 10 | true |  1 = Mark this Note as Administratively Closed otherwise it will be Un-Signed | 
| vs:Input_Parameter-8994_02 | MAGMODE | LITERAL | 20 | true | Mode of Admin Closure:\S\ = Scanned Document\M\ = Manual closure | 
| vs:Input_Parameter-8994_02 | MAGES | LITERAL | 90 | true | The encrypted Electronic Signature | 
| vs:Input_Parameter-8994_02 | MAGESBY | LITERAL | 90 | true |  The DUZ of the Signer (Defaults to DUZ) | 
| vs:Input_Parameter-8994_02 | MAGTEXT | LIST | 3200 | true | Array of Text to add to the Note. | 