---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS SIGN CA7 

 property | value 
--- | --- 
 label | OOPS SIGN CA7
 tag | SIGNCA7
 routine | [OOPSGUIS](http://code.osehra.org/dox/Routine_OOPSGUIS_source.html)
 return value type | SINGLE VALUE
 description | This broker call accepts an encrypted electronic signature, validates the entry and files the signature fields in the ASISTS COMPENSATION CLAIM (CA7) File (#2264).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| INPUT | LITERAL | 30 | true | This parameter contains the file number, field number and internal recordnumber for verifying and filing the electronic signature.  The expected formatis:  FILE^FIELD^IEN.  An Example being 2264^84^5. | 
| SIGN | LITERAL | 30 | true | This parameter contains the encrypted electronic signature code. | 




Generated on January 11th 2017, 6:34:23 am