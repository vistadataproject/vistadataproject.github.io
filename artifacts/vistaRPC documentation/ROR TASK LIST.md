---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ROR TASK LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ROR TASK LIST{:/}
 tag | {::nomarkdown}TASKLIST{:/}
 routine | [RORRP010](http://code.osehra.org/dox/Routine_RORRP010_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}The ROR TASK LIST remote procedure returns a list of user's tasks scheduled from the GUI.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}REGIEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The REGIEN parameter should contain a valid registry IEN (IEN of the registry parameters record in the ROR REGISTRY PARAMETERS file #798.1).  The tasks associated with the provided registry will be returned by the procere. By default ($G(REGIEN)'>0), all tasks are returned.{:/} | 
| {::nomarkdown}TYPE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The TYPE parameter defines which tasks (1-Generic, 2-Report) are returnedby the procedure. See the description of the TYPE field (.02) of the RORTASK file (#798.8) for more details.  By default ($G(TYPE)'>0), all tasks are retrieved.{:/} | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}A user IEN (DUZ) can be assigned to the USER parameter. Only tasksscheduled by this user are retrieved by the procedure. By default ($G(USER)'>0), it utilizes the current user's DUZ.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}