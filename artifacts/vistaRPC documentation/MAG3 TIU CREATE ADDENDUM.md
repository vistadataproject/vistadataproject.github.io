---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG3 TIU CREATE ADDENDUM 

 property | value 
--- | --- 
 label | MAG3 TIU CREATE ADDENDUM
 tag | NEWADD
 routine | [MAGGNTI1](http://code.osehra.org/dox/Routine_MAGGNTI1_source.html)
 return value type | SINGLE VALUE
 description | Creates a TIU Addendum to a document.  RPC call to create an Addendum to a Note  and Optionally :             Electronically Sign the Addendum           Administratively Close the Addendum           Add Text to the Addendum

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGDFN | LITERAL | 30 | true | DFN of the Patient. | 
| MAGTIUDA | LITERAL | 60 | true | This is the IEN of the Note in file ^TIU(8925 | 
| MAGADCL | LITERAL | 60 | true |  1 = Mark this Note as Administratively Closed otherwise it will be Un-Signed | 
| MAGMODE | LITERAL | 30 | true | Mode of Admin Closure:\S\ = Scanned Document\M\ = Manual closure | 
| MAGES | LITERAL | 60 | true | The encrypted Electronic Signature | 
| MAGESBY | LITERAL | 90 | true |  The DUZ of the Signer (Defaults to DUZ) | 
| MAGTEXT | LIST | 3200 | true | Array of Text to add to the New Note. | 
| MAGDATE | LITERAL | 40 | true | The Date of the New TIU Note/Addendum | 




Generated on January 11th 2017, 6:34:23 am