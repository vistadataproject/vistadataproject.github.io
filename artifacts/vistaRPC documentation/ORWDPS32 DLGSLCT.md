---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDPS32 DLGSLCT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 DLGSLCT{:/}
 tag | {::nomarkdown}DLGSLCT{:/}
 routine | [ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns default lists for order dialogs in CPRS GUI.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return def lists for dialog

 Leading comment lines | {::nomarkdown}PSTYPE: pharmacy type (U=unit dose, F=IV fluids, O=outpt){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PSTYPE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Code to determine the Dialog Type{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}LOCIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This will be set to the patient inpatient location IEN from file 44.{:/} | 




 Generated on January 13th 2017, 6:15:57 am