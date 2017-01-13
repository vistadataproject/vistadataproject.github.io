---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VPS UPDATE LAST MRAR TIU IEN 

 property | value 
--- | --- 
 label | {::nomarkdown}VPS UPDATE LAST MRAR TIU IEN{:/}
 tag | {::nomarkdown}UPDATE{:/}
 routine | [VPSMRARU](http://code.osehra.org/dox/Routine_VPSMRARU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC will update the last Allergy and Modication review (MRAR) fora patient with TIU Document IEN.The last MRAR is defined as the last transaction date for a patient infile 853.5 (VPS MRAR PDO){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VPSNUM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This input parameter is the patient ID of the last MRAR record to be updated. Patient ID could be value of DFN, ICN, SSN, or VIC/CAC.{:/} | 
| {::nomarkdown}VPSTIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This input parameter is the TIU Document IEN which is the value to store in the TIU NOTE IEN field of the last MRAR record for the patient in VPSMRAR PDO File (#853.5).{:/} | 
| {::nomarkdown}VPSTYP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This input parameter is the Patient Type. Valid Value is DFN, SSN, VIC/CAC, or ICN{:/} | 




 Generated on January 13th 2017, 7:15:28 am