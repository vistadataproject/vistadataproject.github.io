---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRC TASK COMPLETE 

 property | value 
--- | --- 
 label | ORRC TASK COMPLETE
 tag | COMP
 routine | [ORRCTSK](http://code.osehra.org/dox/Routine_ORRCTSK_source.html)
 return value type | ARRAY
 description | This call accepts a list of patient task ID's to be marked as completed.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | USER | LITERAL |  | true | This is the pointer to the user in the New Person file #200. | 
| vs:Input_Parameter-8994_02 | TASKS | LIST |  | true | This is a list of task identifiers in the form TSK:##, where ## is thepointer to the Patient Task file #102.3. | 