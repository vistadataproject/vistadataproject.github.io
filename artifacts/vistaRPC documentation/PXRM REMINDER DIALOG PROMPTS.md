---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; PXRM REMINDER DIALOG PROMPTS 

 property | value 
--- | --- 
 label | {::nomarkdown}PXRM REMINDER DIALOG PROMPTS{:/}
 tag | {::nomarkdown}PROMPT{:/}
 routine | [PXRMRPCC](http://code.osehra.org/dox/Routine_PXRMRPCC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Additional prompts for a given dialog element{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DIALOG ELEMENT IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Reminder dialog element identifier (ien) from REMINDER DIALOG file [#801.41]{:/} | 
| {::nomarkdown}CURRENT/HISTORICAL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Used only for taxonomy dialogs.   0 - Current Diagnosis/Procedure 1 - Historical Diagnosis/Procedure{:/} | 
| {::nomarkdown}DIALOG LINE CPT/POV{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} | {::nomarkdown}true{:/} | {::nomarkdown}For taxonomy dialog the type of finding (POV/CPT) for this dialog line{:/} | 




 Generated on January 13th 2017, 7:15:28 am