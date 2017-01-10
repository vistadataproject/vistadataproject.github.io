---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPXRM DIALOG ACTIVE 

 property | value 
--- | --- 
 label | ORQQPXRM DIALOG ACTIVE
 tag | ACTIVE
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | ARRAY
 description | For a list of reminders [#811.9] returns same list with status to indicateif an active dialog exists for the reminder.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | CLINICAL REMINDER IEN | LITERAL | 16 | true | Array of clinical reminder iens [#811.9] to be checked. | 