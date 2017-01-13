---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQAL LIST REPORT 

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
 Input Parameters | {::nomarkdown}ORPT{:/}
 Lines | ```
 N I,J,K,SEVER,CR,GMRAIDT ;216
 S CR=$CHAR(13)
 S I=1,J=0,K=0,SEVER="",GMRAIDT=1 ;216
 D EN1^GMRAOR1(ORPT,"GMRARXN")
 I $G(GMRARXN)="" S ORAY(I)="No Allergy Assessment"
 I $G(GMRARXN)=0 S ORAY(I)="No Known Allergies"
 I $G(GMRARXN)=1 F  S J=$O(GMRARXN(J)) Q:J=""  D
 .S SEVER=$P(GMRARXN(J),U,2)
 .S ORAY(I)=$P(GMRARXN(J),U)_"     "_$S($L($G(SEVER)):"[Severity: "_SEVER_"]",1:""),I=I+1
 .S K=0,N=0 F  S K=$O(GMRARXN(J,"S",K)) Q:K'>0  D
 ..I N=0 S ORAY(I)="    Signs/symptoms: "_$P(GMRARXN(J,"S",K),";")
 ..E     S ORAY(I)="                    "_$P(GMRARXN(J,"S",K),";")
 ..I $P(GMRARXN(J,"S",K),";",2) S ORAY(I)=ORAY(I)_" ("_$$FMTE^XLFDT($P(GMRARXN(J,"S",K),";",2),2)_")" ;216
 ..S N=N+1,I=I+1
 .S ORAY(I)=" ",I=I+1
 S:'$D(ORAY(1)) ORAY(1)="No allergies found."
 K GMRARXN```
 Leading comment lines | {::nomarkdown}null:no allergy assessment, 0:no known allergies, 1:pt has allergies<br/>if 1 also get: allergen/reactant^reaction/symptom^severity^allergy ien{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The record number of the patient from the Patient File [#2].{:/} | 




 Generated on January 13th 2017, 6:55:28 am