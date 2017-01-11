---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPXRM DIALOG PROMPTS 

 property | value 
--- | --- 
 label | ORQQPXRM DIALOG PROMPTS
 tag | PROMPT
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | ARRAY
 description | Additional prompts for a given dialog element


### Method description

 property | value 
--- | --- 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DIALOG ELEMENT IEN | LITERAL | 16 | true | Reminder dialog element identifier (ien) from REMINDER DIALOG file[#801.41] | 
| CURRENT/HISTORICAL | LITERAL | 16 |  | Used only for taxonomy dialogs.     0 - Current Diagnosis/Procedure  1 - Historical Diagnosis/Procedure | 
| DIALOG LINE CPT/POV | LITERAL | 3 |  | For taxonomy dialog the type of finding (POV/CPT) for this dialog line | 