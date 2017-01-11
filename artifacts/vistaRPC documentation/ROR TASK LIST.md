---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR TASK LIST 

 property | value 
--- | --- 
 label | ROR TASK LIST
 tag | TASKLIST
 routine | [RORRP010](http://code.osehra.org/dox/Routine_RORRP010_source.html)
 return value type | GLOBAL ARRAY
 description | The ROR TASK LIST remote procedure returns a list of user's tasks scheduled from the GUI.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| REGIEN | LITERAL |  |  | The REGIEN parameter should contain a valid registry IEN (IEN of the registry parameters record in the ROR REGISTRY PARAMETERS file #798.1).  The tasks associated with the provided registry will be returned by the procere. By default ($G(REGIEN)'>0), all tasks are returned. | 
| TYPE | LITERAL |  |  | The TYPE parameter defines which tasks (1-Generic, 2-Report) are returnedby the procedure. See the description of the TYPE field (.02) of the RORTASK file (#798.8) for more details.  By default ($G(TYPE)'>0), all tasks are retrieved. | 
| USER | LITERAL |  |  | A user IEN (DUZ) can be assigned to the USER parameter. Only tasksscheduled by this user are retrieved by the procedure. By default ($G(USER)'>0), it utilizes the current user's DUZ. | 




Generated on January 11th 2017, 6:34:23 am