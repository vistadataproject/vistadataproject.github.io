---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF CNSLTS SCHEDULE 

 property | value 
--- | --- 
 label | DSIF CNSLTS SCHEDULE
 tag | SCH
 routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
 return value type | SINGLE VALUE
 description | This RPC updates a Consult with the action of Scheduled. Cloned from ORQQCN SCH

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DSIFIEN | LITERAL |  | true | This is the IEN for the Consult you wish to update. | 
| DSIFNP | LITERAL |  |  | This is the IEN/DUZ for the provider making the requested change. | 
| DSIFORDT | LITERAL |  | true | This is the Date/Time the Consult was scheduled. | 
| DSIFALRT | LITERAL |  | true | This determines whether or not Alerts should be sent with this update. 1 = Yes. | 
| DSIFALTO | LITERAL |  |  | This is the array of alert recipient IENs. | 
| DSIFCOM | LIST |  |  | This is the array of comments to be added to this action.  | 




 ###### Generated on January 11th 2017, 6:39:43 am