---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQAL LIST REPORT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQAL LIST REPORT{:/}
 tag | {::nomarkdown}LRPT{:/}
 routine | [ORQQAL](http://code.osehra.org/dox/Routine_ORQQAL_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of allergens, severity and signs/symptoms in a reportformat which can be used in a \detailed\ display.  This RPC was set upto support the listing of allergies when selected from the Patient Postingslist.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | RETURN PT'S ALLERGY/ADVERSE REACTION INFO IN REPORT FORMAT:

 Leading comment lines | {::nomarkdown}null:no allergy assessment, 0:no known allergies, 1:pt has allergies
if 1 also get: allergen/reactant^reaction/symptom^severity^allergy ien{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The record number of the patient from the Patient File [#2].{:/} | 




 Generated on January 13th 2017, 6:15:57 am