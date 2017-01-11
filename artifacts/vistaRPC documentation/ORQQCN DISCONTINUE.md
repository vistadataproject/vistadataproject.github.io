---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQCN DISCONTINUE 

 property | value 
--- | --- 
 label | ORQQCN DISCONTINUE
 tag | DC
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | SINGLE VALUE
 description | Discontinue a consult or deny a consult request.


### Method description

 property | value 
--- | --- 
 Method comment | Discontinue or Deny a consult
 Leading comment lines | GMRCO - Internal file number of consult from File 123,GMRCORNP - Provider who Discontinued or Denied consult,GMRCAD - Date/Time Consult was discontinued or denied.,GMRCACTM - If consult is 'DENIED' passed in as 'DY'; if consult is Discontinued passed in as 'DC'.,ORCOM - Array containing explanation of why consult was denied. Passed as the following form :,ARRAY(1)="xxx xxx xxx",ARRAY(2)="XXX XXX",ARRAY(3)="XXX XXX xx", etc.,Comment is a required field when consult is denied or discontinued.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CONSULT ID | LITERAL | 16 | true | Internal file number of the consult/request. | 
| PROVIDER ID | LITERAL | 16 | true | Internal file number of the person discontinuing/denying the consult.Points to NEW PERSON file (#200) | 
| DATE OF ACTION | LITERAL | 16 | true | Date of the discontinuance/denial of the consult. | 
| ACTION TYPE | LITERAL | 16 | true | 'DC' for discontinue, 'DY' for deny | 
| COMMENTS | WORD PROCESSING |  | true | Array of comments related to the discontinuance/denial of the consult. | 