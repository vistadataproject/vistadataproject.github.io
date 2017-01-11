---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPXRM GEC DIALOG 

 property | value 
--- | --- 
 label | ORQQPXRM GEC DIALOG
 tag | GEC
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | SINGLE VALUE
 description | This RPC will evaluate the Reminder Dialogs as the Finish button is clickfor the GEC Project. THis RPC will return an error messages if the fourGEC Reminder Dialogs are done out of order.


### Method description

 property | value 
--- | --- 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL |  | true | This is the Reminder Definition IEN or the Reminder Dialog IEN | 
| DFN | LITERAL |  | true | Patient DFN | 
| Visit | LITERAL |  | true | This is the Visit Encounter String | 
| NOTEIEN | LITERAL |  | true | NOTEIEN is the progress Note IEN in file 8925. | 




 ###### Generated on January 11th 2017, 6:39:43 am