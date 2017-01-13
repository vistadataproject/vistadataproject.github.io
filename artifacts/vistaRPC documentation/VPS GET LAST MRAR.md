---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VPS GET LAST MRAR 

 property | value 
--- | --- 
 label | {::nomarkdown}VPS GET LAST MRAR{:/}
 tag | {::nomarkdown}GET{:/}
 routine | [VPSMRAR9](http://code.osehra.org/dox/Routine_VPSMRAR9_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Given Patient ID (in ID/Type pair), this RPC return the last Medication and Allergy Review data for the patient.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VPSNUM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the Patient ID based on Patient ID Type. The value could be the SSN, ICN or VIC/CAC number. ICN, DFN, or VIC/CAC{:/} | 
| {::nomarkdown}VPSTYP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the Patient ID Type. Valid type is DFN, SSN, ICN, or VIC/CAC.{:/} | 




 Generated on January 13th 2017, 5:52:13 am