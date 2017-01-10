---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV TP CODE CHECKS 

 property | value 
--- | --- 
 label | DENTV TP CODE CHECKS
 tag | CK
 routine | [DENTVCK](http://code.osehra.org/dox/Routine_DENTVCK_source.html)
 return value type | SINGLE VALUE
 description | Processes coding compliance checks for ADA codes entered by the user.  

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 30 | true | Contains patient dfn. | 
| vs:Input_Parameter-8994_02 | ECODE | LITERAL | 6 | true | Contains the internal, or external ADA Code (e.g. 100268, or D0120) followed by a colon and the tooth# for the code entered by the user. | 
| vs:Input_Parameter-8994_02 | VISDT | LITERAL |  | true | Contains the visit date to be used to look back for codes.  A visit date=0 means to only check the current session data, not the historical records. | 
| vs:Input_Parameter-8994_02 | PROV | LITERAL | 30 | true | Contains the provider (DUZ) to be used to check compliance. | 
| vs:Input_Parameter-8994_02 | DATA | LIST | 10 | true | Contains an array of the current session's completed procedures as DATA(n)=ADA Code | 