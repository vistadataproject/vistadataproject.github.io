---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG3 TIU NEW 

 property | value 
--- | --- 
 label | MAG3 TIU NEW
 tag | NEW
 routine | [MAGGNTI1](http://code.osehra.org/dox/Routine_MAGGNTI1_source.html)
 return value type | SINGLE VALUE
 description | RPC Call to create a New Note   and Optionally :             Electronically Sign the Note.           Administratively Close the Note.           Add Text to the Note.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | MAGDFN | LITERAL | 60 | true | DFN of the Patient. | 
| vs:Input_Parameter-8994_02 | MAGTITLE | LITERAL | 60 | true | IEN of TIU DOCUMENT DEFINITION entry in file ^TIU(8925.1 | 
| vs:Input_Parameter-8994_02 | MAGADCL | LITERAL | 10 | true |   1 = Mark this Note as Administratively Closed  otherwise it will be Un-Signed | 
| vs:Input_Parameter-8994_02 | MAGMODE | LITERAL | 30 | true | Mode of Admin Closure: \S\ = Scanned Document \M\ = Manual closure | 
| vs:Input_Parameter-8994_02 | MAGES | LITERAL | 60 | true |  The encrypted Electronic Signature | 
| vs:Input_Parameter-8994_02 | MAGESBY | LITERAL | 90 | true |  The DUZ of the Signer (Defaults to DUZ) | 
| vs:Input_Parameter-8994_02 | MAGLOC | LITERAL | 60 | true | IEN in Hospital Location File #44, Global ^SC( | 
| vs:Input_Parameter-8994_02 | MAGTEXT | LIST | 3200 | true | Array of Text to add to the New Note. | 
| vs:Input_Parameter-8994_02 | MAGDATE | LITERAL | 40 | true | Date of the Note. For New Notes. | 
| vs:Input_Parameter-8994_02 | MAGCNSLT | LITERAL | 30 | true | DA of Consult to Link this note to. | 