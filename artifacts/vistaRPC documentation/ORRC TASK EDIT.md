---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORRC TASK EDIT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORRC TASK EDIT{:/}
 tag | {::nomarkdown}EDIT{:/}
 routine | [ORRCTSK](http://code.osehra.org/dox/Routine_ORRCTSK_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This call will update patient tasks using the data strings passed in, andreturn a true or false flag with each ID indicating if the update wassuccessful.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TASKS{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is a string of ^-delimited attributes of a new task, in the form  ID^Subject^Created^ByWhom^Patient^Priority^Due^Completed^ByWhom^Itemswhere ID        = Task identifier, as TSK:## [##=pointer to #102.3]      Subject   = Text subject of task            Created   = date task was created, as YYYYMMDDHHMMSS            ByWhom    = user who created task, as pointer to #200            Patient   = patient that task is for, as pointer to #2            Priority  = H, M, or L            Due       = date task is due to be completed, as YYYMMDD[HHMM]            Completed = date task was completed as, YYYYMMDDHHMM            ByWhom    = user who completed task, as pointer to #200            Items     = linked items as ID,ID,...,ID where ID is XXX:### as                  DOC:### = documents in #8925                  ORR:### = order results in #100{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:04 am</p>{:/}