---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRC TASK ADD 

 property | value 
--- | --- 
 label | ORRC TASK ADD
 tag | NEW
 routine | [ORRCTSK](http://code.osehra.org/dox/Routine_ORRCTSK_source.html)
 return value type | SINGLE VALUE
 description | This call will accept data to create a new entry in the Patient Taskfile #102.3 and return the new identifier.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LITERAL |  | true | This is a string of ^-delimited attributes of a new task, in the form  Subject^Created^ByWhom^Patient^Priority^Due^Completed^ByWhom^Itemswhere Subject   = Text subject of task      Created   = date task was created, as YYYYMMDDHHMMSS      ByWhom    = user who created task, as pointer to #200      Patient   = patient that task is for, as pointer to #2      Priority  = H, M, or L      Due       = date task is due to be completed, as YYYMMDD[HHMM]      Completed = date task was completed as, YYYYMMDDHHMM      ByWhom    = user who completed task, as pointer to #200      Items     = linked items as ID,ID,...,ID where ID is XXX:### as                  DOC:### = documents in #8925                  ORR:### = order results in #100 | 




 ###### Generated on January 11th 2017, 6:39:43 am