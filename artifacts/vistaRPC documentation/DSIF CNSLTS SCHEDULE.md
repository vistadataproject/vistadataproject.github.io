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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DSIFIEN | LITERAL |  | true | This is the IEN for the Consult you wish to update. | 
| vs:Input_Parameter-8994_02 | DSIFNP | LITERAL |  |  | This is the IEN/DUZ for the provider making the requested change. | 
| vs:Input_Parameter-8994_02 | DSIFORDT | LITERAL |  | true | This is the Date/Time the Consult was scheduled. | 
| vs:Input_Parameter-8994_02 | DSIFALRT | LITERAL |  | true | This determines whether or not Alerts should be sent with this update. 1 = Yes. | 
| vs:Input_Parameter-8994_02 | DSIFALTO | LITERAL |  |  | This is the array of alert recipient IENs. | 
| vs:Input_Parameter-8994_02 | DSIFCOM | LIST |  |  | This is the array of comments to be added to this action.  | 