---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRC EVENTS BY ID 

 property | value 
--- | --- 
 label | ORRC EVENTS BY ID
 tag | TEXT
 routine | [ORRCEVT](http://code.osehra.org/dox/Routine_ORRCEVT_source.html)
 return value type | GLOBAL ARRAY
 description | This call returns the text of the documents associated with the eventsin the ID list passed in.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | EVENTS | LIST |  | true | This is the list of alert IDs in the format \VST:\_ID where ID is thealert identifier as defined by Kernel (\OR,<patient>,<Notification ien>;<creator>;<date created>\) or the appointment time/location (\<date.time>;<location>\). | 