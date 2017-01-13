---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQAL LIST 

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
 Input Parameters | {::nomarkdown}ORPT{:/}
 Lines | ```
 N I,J,K,GMRARXN,GMRA
 S I=1,J=0,K=0
 D EN1^GMRAOR1(ORPT,"GMRARXN")
 I $G(GMRARXN)="" S ORAY(I)="^No Allergy Assessment"
 I $G(GMRARXN)=0 S ORAY(I)="^No Known Allergies"
 I $G(GMRARXN)=1 F  S J=$O(GMRARXN(J)) Q:J=""  S ORAY(I)=$P(GMRARXN(J),"^",3)_"^"_$P(GMRARXN(J),"^")_"^"_$P(GMRARXN(J),"^",2) D SIGNS S I=I+1
 S:'$D(ORAY(1)) ORAY(1)="^No allergies found."```
 Leading comment lines | {::nomarkdown}null:no allergy assessment, 0:no known allergies, 1:pt has allergies<br/>if 1 also get: allergen/reactant^reaction/symptom^severity^allergy ien{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The record number of the patient (DFN) from the Patient file (#2).{:/} | 




 Generated on January 13th 2017, 6:55:28 am