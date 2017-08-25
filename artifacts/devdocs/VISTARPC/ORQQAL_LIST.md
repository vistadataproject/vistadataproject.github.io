---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQAL LIST<br/>
# ORQQAL LIST

Returns a list of allergies for a patient.

## Properties

Property | Value
--- | ---
Label | LIST
MUMPS Implementation | [ORQQAL](http://code.osehra.org/dox/Routine_ORQQAL_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT ID | LITERAL | 16 | true | The record number of the patient (DFN) from the Patient file (#2).



## MUMPS Method Description

Property | Value
--- | ---
Method | [LIST^ORQQAL](http://code.osehra.org/dox/Routine_ORQQAL_source.html)
Method Comment | RETURN PATIENT&#x27;S ALLERGY/ADVERSE REACTION INFO:
Input Parameters | ORPT
First Comment | {::nomarkdown}<pre><code> null:no allergy assessment, 0:no known allergies, 1:pt has allergies<br/> if 1 also get: allergen/reactant^reaction/symptom^severity^allergy ien</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N I,J,K,GMRARXN,GMRA<br/> S I=1,J=0,K=0<br/> D EN1^GMRAOR1(ORPT,"GMRARXN")<br/> I $G(GMRARXN)="" S ORAY(I)="^No Allergy Assessment"<br/> I $G(GMRARXN)=0 S ORAY(I)="^No Known Allergies"<br/> I $G(GMRARXN)=1 F  S J=$O(GMRARXN(J)) Q:J=""  S ORAY(I)=$P(GMRARXN(J),"^",3)_"^"_$P(GMRARXN(J),"^")_"^"_$P(GMRARXN(J),"^",2) D SIGNS S I=I+1<br/> S:'$D(ORAY(1)) ORAY(1)="^No allergies found."</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCover.pas">rCover.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}