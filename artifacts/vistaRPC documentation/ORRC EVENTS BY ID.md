---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORRC EVENTS BY ID 

 property | value 
--- | --- 
 label | {::nomarkdown}ORRC EVENTS BY ID{:/}
 tag | {::nomarkdown}TEXT{:/}
 routine | [ORRCEVT](http://code.osehra.org/dox/Routine_ORRCEVT_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This call returns the text of the documents associated with the eventsin the ID list passed in.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}EVENTS{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the list of alert IDs in the format \VST:\_ID where ID is thealert identifier as defined by Kernel (\OR,<patient>,<Notification ien>;<creator>;<date created>\) or the appointment time/location (\<date.time>;<location>\).{:/} | 




 Generated on January 13th 2017, 6:55:29 am