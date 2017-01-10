---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PXRM REMINDER DIALOG PROMPTS 

 property | value 
--- | --- 
 label | PXRM REMINDER DIALOG PROMPTS
 tag | PROMPT
 routine | [PXRMRPCC](http://code.osehra.org/dox/Routine_PXRMRPCC_source.html)
 return value type | ARRAY
 description | Additional prompts for a given dialog element

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DIALOG ELEMENT IEN | LITERAL | 16 | true | Reminder dialog element identifier (ien) from REMINDER DIALOG file [#801.41] | 
| vs:Input_Parameter-8994_02 | CURRENT/HISTORICAL | LITERAL | 16 | true | Used only for taxonomy dialogs.   0 - Current Diagnosis/Procedure 1 - Historical Diagnosis/Procedure | 
| vs:Input_Parameter-8994_02 | DIALOG LINE CPT/POV | LITERAL | 3 | true | For taxonomy dialog the type of finding (POV/CPT) for this dialog line | 