---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF OP CHECK NUMBER LOOKUP 

 property | value 
--- | --- 
 label | DSIF OP CHECK NUMBER LOOKUP
 tag | OPCKN
 routine | [DSIFPAY8](http://code.osehra.org/dox/Routine_DSIFPAY8_source.html)
 return value type | SINGLE VALUE
 description | Pass in one parameter - delimited BY \;\ (Semicolon) Invoice IEN(Required);;  (Inpatient claims)Invoice IEN(Required);Invoice date (FM format,Required);external CPT code           (Required) - (Outpatient claims)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| INPUT | LITERAL | 20 | true | Pass in one parameter, \;\ delimited Invoice IEN;;  (Inpatient claims)Invoice IEN;Invoice date (FM format);CPT code (Outpatient claims) | 
| INVOICE DATE | LITERAL | 10 | true |  | 
| SERVICE (CPT CODE) | LITERAL | 5 | true |  | 




 Generated on January 11th 2017, 7:15:04 am