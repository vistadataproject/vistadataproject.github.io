---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQAL LIST REPORT<br/>
# ORQQAL LIST REPORT

Returns a list of allergens, severity and signs/symptoms in a reportformat which can be used in a "detailed" display.  This RPC was set upto support the listing of allergies when selected from the Patient Postingslist.

## Properties

Property | Value
--- | ---
Label | LRPT
MUMPS Implementation | [ORQQAL](http://code.osehra.org/dox/Routine_ORQQAL_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT ID | LITERAL | 16 | true | The record number of the patient from the Patient File [#2].



## MUMPS Method Description

Property | Value
--- | ---
Method | [LRPT^ORQQAL](http://code.osehra.org/dox/Routine_ORQQAL_source.html)
Method Comment | RETURN PT&#x27;S ALLERGY/ADVERSE REACTION INFO IN REPORT FORMAT:
Input Parameters | ORPT
First Comment | {::nomarkdown}<pre><code> null:no allergy assessment, 0:no known allergies, 1:pt has allergies<br/> if 1 also get: allergen/reactant^reaction/symptom^severity^allergy ien</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N I,J,K,SEVER,CR,GMRAIDT ;216<br/> S CR=$CHAR(13)<br/> S I=1,J=0,K=0,SEVER="",GMRAIDT=1 ;216<br/> D EN1^GMRAOR1(ORPT,"GMRARXN")<br/> I $G(GMRARXN)="" S ORAY(I)="No Allergy Assessment"<br/> I $G(GMRARXN)=0 S ORAY(I)="No Known Allergies"<br/> I $G(GMRARXN)=1 F  S J=$O(GMRARXN(J)) Q:J=""  D<br/> .S SEVER=$P(GMRARXN(J),U,2)<br/> .S ORAY(I)=$P(GMRARXN(J),U)_"     "_$S($L($G(SEVER)):"[Severity: "_SEVER_"]",1:""),I=I+1<br/> .S K=0,N=0 F  S K=$O(GMRARXN(J,"S",K)) Q:K'>0  D<br/> ..I N=0 S ORAY(I)="    Signs/symptoms: "_$P(GMRARXN(J,"S",K),";")<br/> ..E     S ORAY(I)="                    "_$P(GMRARXN(J,"S",K),";")<br/> ..I $P(GMRARXN(J,"S",K),";",2) S ORAY(I)=ORAY(I)_" ("_$$FMTE^XLFDT($P(GMRARXN(J,"S",K),";",2),2)_")" ;216<br/> ..S N=N+1,I=I+1<br/> .S ORAY(I)=" ",I=I+1<br/> S:'$D(ORAY(1)) ORAY(1)="No allergies found."<br/> K GMRARXN</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCover.pas">rCover.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}