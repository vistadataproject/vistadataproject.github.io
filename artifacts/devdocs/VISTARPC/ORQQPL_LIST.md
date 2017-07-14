---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPL LIST<br/>
# ORQQPL LIST

Function returns a list of problems for a patient.

## Properties

Property | Value
--- | ---
Label | LIST
Routine | [ORQQPL](http://code.osehra.org/dox/Routine_ORQQPL_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT ID | LITERAL | 16 | true | The record number of the patient from the Patient FIle (#2).
STATUS | LITERAL | 2 |  | The status of the problems to retrieve. A &#x3D; Active problems only, I &#x3D; Inactive problems only, &quot;&quot; or undefined &#x3D; all problems regardless ofstatus.



## MUMPS Method Description

Property | Value
--- | ---
Method | [LIST^ORQQPL](http://code.osehra.org/dox/Routine_ORQQPL_source.html)
Method Comment | return pt&#x27;s problem list in format: ien^description^
Input Parameters | DFN, STATUS
First Comment | {::nomarkdown}<pre><code> ICD^onset^last modified^SC^SpExp<br/> STATUS = status of problems to return: (A)CTIVE, (I)NACTIVE, ("")ALL</code></pre>{:/}
Code | {::nomarkdown}<pre><code> Q:'+DFN<br/> N ORGMPL,I,DETAIL,ORIDT,IMPLDT<br/> S IMPLDT=$$IMPDATE^LEXU("10D")<br/> S ORIDT=$S($P(DFN,U,2)]"":$P(DFN,U,2),1:DT)<br/> S:ORIDT'>0 ORIDT=DT<br/> S DFN=+DFN<br/> I $L($T(LIST^GMPLUTL2))>0 D<br/> .D LIST^GMPLUTL2(.ORGMPL,DFN,STATUS)<br/> .Q:'$D(ORGMPL(0))<br/> .S DETAIL=$$DETAIL^ORWCV1(10)<br/> .F I=1:1:ORGMPL(0) D<br/> ..N LEX,X<br/> ..S X=ORGMPL(I)<br/> ..S ORPY(I)=$P(X,U)_U_$P(X,U,3)_U_$P(X,U,2)_U_$P(X,U,4)_U_$P(X,U,5)_U_$P(X,U,6)_U_$P(X,U,7)_U_$P(X,U,8)_U_$P(X,U,10)_U_$P(X,U,9)_U_U_DETAIL_U_U_$P(X,U,11)_U_$P(X,U,12)_U_$P(X,U,13)<br/> ..S ORPY(I)=ORPY(I)_U_$S($P(ORPY(I),U,2)?.U1" "1"-"1" ".E:1,1:"")<br/> ..I (ORIDT<IMPLDT),(+$$STATCHK^ICDXCODE($P(ORPY(I),U,16),$P(ORPY(I),U,4),ORIDT)'=1) D  I 1<br/> ...S $P(ORPY(I),U,13)="#",$P(ORPY(I),U,9)="#"<br/> ..E  I $L($P(ORPY(I),U,14)),(+$$STATCHK^LEXSRC2($P(ORPY(I),U,14),ORIDT,.LEX)'=1) S $P(ORPY(I),U,13)="$",$P(ORPY(I),U,9)="#"<br/> .S:+$G(ORPY(1))<1 ORPY(1)="^No problems found."<br/> I $L($T(LIST^GMPLUTL2))<1 S ORPY(1)="^Problem list not available.^"<br/> K X</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCover.pas">rCover.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}