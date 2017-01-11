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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGDFN | LITERAL | 60 | true | DFN of the Patient. | 
| MAGTIUDA | LITERAL | 60 | true | This is the IEN of the Note in file ^TIU(8925 | 
| MAGADCL | LITERAL | 10 | true |  1 = Mark this Note as Administratively Closed otherwise it will be Un-Signed | 
| MAGMODE | LITERAL | 20 | true | Mode of Admin Closure:\S\ = Scanned Document\M\ = Manual closure | 
| MAGES | LITERAL | 90 | true | The encrypted Electronic Signature | 
| MAGESBY | LITERAL | 90 | true |  The DUZ of the Signer (Defaults to DUZ) | 
| MAGTEXT | LIST | 3200 | true | Array of Text to add to the Note. | 




 Generated on January 11th 2017, 7:15:04 am