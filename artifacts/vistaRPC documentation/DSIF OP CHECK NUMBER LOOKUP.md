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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | INPUT | LITERAL | 20 | true | Pass in one parameter, \;\ delimited Invoice IEN;;  (Inpatient claims)Invoice IEN;Invoice date (FM format);CPT code (Outpatient claims) | 
| vs:Input_Parameter-8994_02 | INVOICE DATE | LITERAL | 10 | true |  | 
| vs:Input_Parameter-8994_02 | SERVICE (CPT CODE) | LITERAL | 5 | true |  | 