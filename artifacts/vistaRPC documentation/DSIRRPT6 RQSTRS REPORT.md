---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRRPT6 RQSTRS REPORT 

 property | value 
--- | --- 
 label | DSIRRPT6 RQSTRS REPORT
 tag | RQSTRS
 routine | [DSIRRPT6](http://code.osehra.org/dox/Routine_DSIRRPT6_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC will return entries from the DSIR NEW REQUESTORS file (#19620.12) in alphabetical order.  The report can be pulled for all requestors or in an alphabetic range, and further sorted by those flagged as Active, Inactive or Both.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | INACT | LITERAL | 1 | true | Inactive/Active Flag (Optional - A = Active Only, I = Inactive Only, B = Both) [Default - B] | 
| vs:Input_Parameter-8994_02 | FRNM | LITERAL | 30 | true | From Name (Optional - Starting name or partial name, if null all names pulled) | 
| vs:Input_Parameter-8994_02 | TONM | LITERAL | 30 | true | To Name (Optional - Ending name or partial name, only valid if starting name passed) | 
| vs:Input_Parameter-8994_02 | SCHED | LITERAL | 1 | true | This is a flag to indicate if the report should be scheduled in TaskMan or not.  1 = Yes, 0 = No, Default is 0. | 
| vs:Input_Parameter-8994_02 | ESTART | LITERAL | 14 | true | This is the FileMan format date/time to start the task. If blank the task will run immediately. | 