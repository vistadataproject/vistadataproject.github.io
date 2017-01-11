---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQCN2 SCHEDULE CONSULT 

 property | value 
--- | --- 
 label | ORQQCN2 SCHEDULE CONSULT
 tag | SCH
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | SINGLE VALUE
 description | Changes status of consult to \Scheduled\, optionally adding a comment andsending alerts.


### Method description

 property | value 
--- | --- 
 Method comment | Schedule consult and change status
 Leading comment lines | ORERR - return array for results/errors,ORIEN - IEN of consult from File 123,ORNP - Provider who Scheduled consult,ORDATE - Date/Time Consult was scheduled.,ORALRT - should alerts be sent to anyone?,ORALTO - array of alert recipient IENs,ORCOM is the comments array to be added,passed in as ORCOM(1)="Xxxx Xxxxx...",ORCOM(2)="Xxxx Xx Xxx...", ORCOM(3)="Xxxxx Xxx Xx...", etc.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| Consult IEN | LITERAL | 16 | true | Consult IEN in file 123. | 
| Responsible provider | LITERAL | 32 | true |  | 
| Date of action | LITERAL | 16 |  |  | 
| Send alerts? | LITERAL | 2 | true |  | 
| Send alerts to | LITERAL | 100 | true | \;\ separated list of alert recipients - pointers to file 200. | 
| Comments | LIST |  |  | Array of comments to be added with this action. | 




 Generated on January 11th 2017, 7:15:04 am