---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQAL LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQAL LIST{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORQQAL](http://code.osehra.org/dox/Routine_ORQQAL_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of allergies for a patient.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The record number of the patient (DFN) from the Patient file (#2).{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | LIST^[ORQQAL](http://code.osehra.org/dox/Routine_ORQQAL_source.html)
 Method comment | RETURN PATIENT'S ALLERGY/ADVERSE REACTION INFO:
 Input parameters | {::nomarkdown}ORPT{:/}
 First comment | {::nomarkdown}<pre> null:no allergy assessment, 0:no known allergies, 1:pt has allergies<br/> if 1 also get: allergen/reactant^reaction/symptom^severity^allergy ien</pre>{:/}
 Code | {::nomarkdown}  N I,J,K,GMRARXN,GMRA<br> S I=1,J=0,K=0<br> D EN1^GMRAOR1(ORPT,"GMRARXN")<br> I $G(GMRARXN)="" S ORAY(I)="^No Allergy Assessment"<br> I $G(GMRARXN)=0 S ORAY(I)="^No Known Allergies"<br> I $G(GMRARXN)=1 F  S J=$O(GMRARXN(J)) Q:J=""  S ORAY(I)=$P(GMRARXN(J),"^",3)_"^"_$P(GMRARXN(J),"^")_"^"_$P(GMRARXN(J),"^",2) D SIGNS S I=I+1<br> S:'$D(ORAY(1)) ORAY(1)="^No allergies found."{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCover.pas">rCover.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:11 am</p>{:/}