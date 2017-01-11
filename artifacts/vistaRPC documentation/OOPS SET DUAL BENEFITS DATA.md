---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS SET DUAL BENEFITS DATA 

 property | value 
--- | --- 
 label | OOPS SET DUAL BENEFITS DATA
 tag | DUAL
 routine | [OOPSGUID](http://code.osehra.org/dox/Routine_OOPSGUID_source.html)
 return value type | SINGLE VALUE
 description | This broker call files data in the DUAL Node of the ASISTS Accident ReportingFile (#2260).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| INPUT | LITERAL | 20 | true | This field contains the IEN and the form of the record the data willbe filed into.  The format is IEN^FORM.  An example is 373^DUAL. | 
| DATA | LITERAL | 245 | true | This string contains the DUAL Benefits data.  It is in the format of:P1 data^P2 data^P3 data^P4 data^P5 data^P6 data. | 




 Generated on January 11th 2017, 7:15:04 am