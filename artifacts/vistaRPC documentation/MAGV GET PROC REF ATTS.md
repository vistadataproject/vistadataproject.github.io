---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV GET PROC REF ATTS 

 property | value 
--- | --- 
 label | MAGV GET PROC REF ATTS
 tag | GETPROCA
 routine | [MAGVRS08](http://code.osehra.org/dox/Routine_MAGVRS08_source.html)
 return value type | ARRAY
 description | This RPC, given the internal entry number of an entry on the IMAGING PROCEDURE REFERENCE File (#2005.61), returns an array containing the field names and values that are defined for that entry.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATREFIEN | LITERAL | 10 |  | This is the internal entry number on the IMAGING PATIENT REFERENCE File (#2005.6) of the patient with whom this procedure reference is associated. | 
| PROCREFIEN | LITERAL | 10 | true | This is the internal entry number of the entry on the IMAGING PROCEDURE REFERENCE File (#2005.61) for which attribute values are to be returned. | 
| OVERRIDE | LITERAL | 3 |  | This parameter should be used with EXTREME CAUTION.  It suppresses the check of the patient reference IEN against the value of the PARENT IEN Field (#.99) on the IMAGING PROCEDURE REFERENCE File (#2005.61). | 




Generated on January 11th 2017, 6:34:23 am