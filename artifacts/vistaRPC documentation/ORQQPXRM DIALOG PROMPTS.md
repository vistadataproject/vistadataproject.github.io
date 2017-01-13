---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPXRM DIALOG PROMPTS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPXRM DIALOG PROMPTS{:/}
 tag | {::nomarkdown}PROMPT{:/}
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Additional prompts for a given dialog element{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DIALOG ELEMENT IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Reminder dialog element identifier (ien) from REMINDER DIALOG file[#801.41]{:/} | 
| {::nomarkdown}CURRENT/HISTORICAL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Used only for taxonomy dialogs.     0 - Current Diagnosis/Procedure  1 - Historical Diagnosis/Procedure{:/} | 
| {::nomarkdown}DIALOG LINE CPT/POV{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} |  | {::nomarkdown}For taxonomy dialog the type of finding (POV/CPT) for this dialog line{:/} | 




 Generated on January 13th 2017, 5:52:13 am