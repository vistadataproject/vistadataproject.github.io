---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQAL LIST 

 property | value 
--- | --- 
 label | ORQQAL LIST
 tag | LIST
 routine | [ORQQAL](http://code.osehra.org/dox/Routine_ORQQAL_source.html)
 return value type | ARRAY
 description | Returns a list of allergies for a patient.


### Method description

 property | value 
--- | --- 
 Method comment | RETURN PATIENT'S ALLERGY/ADVERSE REACTION INFO:
 Leading comment lines | null:no allergy assessment, 0:no known allergies, 1:pt has allergies,if 1 also get: allergen/reactant^reaction/symptom^severity^allergy ien

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIENT ID | LITERAL | 16 | true | The record number of the patient (DFN) from the Patient file (#2). | 




 Generated on January 11th 2017, 7:15:03 am