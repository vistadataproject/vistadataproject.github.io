---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQCN ATTACH MED RESULTS 

 property | value 
--- | --- 
 label | ORQQCN ATTACH MED RESULTS
 tag | MEDCOMP
 routine | [ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html)
 return value type | SINGLE VALUE
 description | Allows a med result to be attached to a procedure request.


### Method description

 property | value 
--- | --- 
 Method comment | Attach a medicine result to a consult
 Leading comment lines | GMRCO - Internal file number of consult from File 123,GMRCRSLT - pointer to medicine result,GMRCAD - Date/Time Consult was resulted.,GMRCORNP - Provider who attached the result to the consult,ORALTO - array of alert recipient IENs

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| Consult IEN | LITERAL | 16 | true | Consult (procedure) IEN in file 123. | 
| Result pointer | LITERAL | 24 | true | Variable pointer to medicine result. | 
| Date | LITERAL | 16 | true | Date the result was attached. | 
| date |  |  |  |  | 
| Resp Person | LITERAL | 16 |  | Pointer to file 200, for the person attaching the result. | 
| Alerts to | LITERAL | 254 |  | Semicolon-delimited list of user DUZs to send alerts to for this action. | 




Generated on January 11th 2017, 6:34:23 am