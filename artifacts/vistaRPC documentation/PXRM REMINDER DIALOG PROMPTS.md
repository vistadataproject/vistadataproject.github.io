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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DIALOG ELEMENT IEN | LITERAL | 16 | true | Reminder dialog element identifier (ien) from REMINDER DIALOG file [#801.41] | 
| CURRENT/HISTORICAL | LITERAL | 16 | true | Used only for taxonomy dialogs.   0 - Current Diagnosis/Procedure 1 - Historical Diagnosis/Procedure | 
| DIALOG LINE CPT/POV | LITERAL | 3 | true | For taxonomy dialog the type of finding (POV/CPT) for this dialog line | 