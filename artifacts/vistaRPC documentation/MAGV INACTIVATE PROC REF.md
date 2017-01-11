---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV INACTIVATE PROC REF 

 property | value 
--- | --- 
 label | MAGV INACTIVATE PROC REF
 tag | INPROC
 routine | [MAGVRS07](http://code.osehra.org/dox/Routine_MAGVRS07_source.html)
 return value type | ARRAY
 description | This RPC inactivates an entry on the IMAGING PROCEDURE REFERENCE File(#2005.61).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PROCIEN | LITERAL | 10 | true | This is the internal entry number of the requested procedure on the IMAGING PROCEDURE REFERENCE File (#2005.61). | 
| PATIEN | LITERAL | 10 | true | This is the internal entry number on the IMAGING PATIENT REFERENCE File (#2005.6) of the patient reference with which this procedure reference is associated. | 
| OVERRIDE | LITERAL | 3 |  | This parameter should be used with EXTREME CAUTION.  It suppresses the validation of the patient reference against the procedure reference with which it is associated. | 




 Generated on January 11th 2017, 7:15:04 am