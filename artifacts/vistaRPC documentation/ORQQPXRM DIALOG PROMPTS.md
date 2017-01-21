---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPXRM DIALOG PROMPTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPXRM DIALOG PROMPTS{:/}
 tag | {::nomarkdown}PROMPT{:/}
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Additional prompts for a given dialog element{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DIALOG ELEMENT IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Reminder dialog element identifier (ien) from REMINDER DIALOG file[#801.41]{:/} | 
| {::nomarkdown}CURRENT/HISTORICAL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Used only for taxonomy dialogs.     0 - Current Diagnosis/Procedure  1 - Historical Diagnosis/Procedure{:/} | 
| {::nomarkdown}DIALOG LINE CPT/POV{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} |  | {::nomarkdown}For taxonomy dialog the type of finding (POV/CPT) for this dialog line{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | PROMPT^[ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 Input parameters | {::nomarkdown}ORDLG, ORDCUR, ORFTYP{:/}
 Code | {::nomarkdown}  D PROMPT^PXRMRPCC(.ORY,ORDLG,ORDCUR,ORFTYP) Q  ; DBIA 3080{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:13 am</p>{:/}