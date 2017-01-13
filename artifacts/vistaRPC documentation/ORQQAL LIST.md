---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQAL LIST 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQAL LIST{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORQQAL](http://code.osehra.org/dox/Routine_ORQQAL_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of allergies for a patient.{:/}


### Method description

 property | value 
--- | --- 
 Method comment | RETURN PATIENT'S ALLERGY/ADVERSE REACTION INFO:
 Leading comment lines | null:no allergy assessment, 0:no known allergies, 1:pt has allergies
if 1 also get: allergen/reactant^reaction/symptom^severity^allergy ien

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The record number of the patient (DFN) from the Patient file (#2).{:/} | 




 Generated on January 13th 2017, 5:52:13 am