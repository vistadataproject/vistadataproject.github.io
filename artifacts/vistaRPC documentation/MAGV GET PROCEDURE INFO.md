---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV GET PROCEDURE INFO 

 property | value 
--- | --- 
 label | MAGV GET PROCEDURE INFO
 tag | GETPROCI
 routine | [MAGVRS08](http://code.osehra.org/dox/Routine_MAGVRS08_source.html)
 return value type | ARRAY
 description | This RPC, given the internal entry number of an entry on the IMAGING PROCEDURE REFERENCE File (#2005.61) that references a VA procedure,returns an array containing the attributes of that procedure. If the entry references a non-VA procedure, an appropriate exception message is returned.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATREFIEN | LITERAL | 10 |  | This is the internal entry number on the IMAGING PATIENT REFERENCE File(#2005.6) of the patient with whom this procedure reference is associated. | 
| PROCREFIEN | LITERAL | 10 | true | This is the internal entry number of the entry on the IMAGING PROCEDUREREFERENCE File (#2005.61) for which procedure information is to bereturned. | 
| OVERRIDE | LITERAL | 3 |  | This parameter should be used with EXTREME CAUTION.  If valued TRUE (nonzero), it suppresses the check of the patient reference IEN against the value of the PARENT IEN Field (#.99) on the IMAGING PROCEDURE REFERENCE File (#2005.61). | 




 Generated on January 11th 2017, 7:15:04 am