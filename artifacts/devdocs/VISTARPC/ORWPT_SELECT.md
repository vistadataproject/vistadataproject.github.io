---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPT SELECT
# ORWPT SELECT

RPC to return key information on a patient as follows: 1    2   3   4    5      6    7    8       9       10      11   12 13NAME^SEX^DOB^SSN^LOCIEN^LOCNM^RMBD^CWAD^SENSITIVE^ADMITTED^CONV^SC^SC%^ 14  15  16  17ICN^AGE^TS^TSSVC

Property | Value
--- | ---
Label | SELECT
Routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [SELECT^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Method Comment | Selects patient &amp; returns key information
Input Parameters | DFN
First Comment | {::nomarkdown}<pre><code>  1    2   3   4    5      6    7    8       9       10      11  12<br/> NAME^SEX^DOB^SSN^LOCIEN^LOCNM^RMBD^CWAD^SENSITIVE^ADMITTED^CONV^SC^<br/> 13  14  15  16  17<br/> SC%^ICN^AGE^TS^TSSVC<br/><br/> for CCOW (RV - 2/27/03)  name="-1", location=error message</code></pre>{:/}
Code | {::nomarkdown}<pre><code> I '$D(^DPT(+DFN,0)) S REC="-1^^^^^Patient is unknown to CPRS." Q<br/> N X<br/> I $G(XWB("2","RPC"))="ORWPT SELECT" K ^TMP($J,"OC-OPOS") ; delete once per order session order checks<br/> K ^TMP("ORWPCE",$J) ; delete PCE 'cache' when switching patients<br/> S X=^DPT(DFN,0),REC=$P(X,U,1,3)_U_$P(X,U,9)_U_U_$G(^(.1))_U_$G(^(.101))<br/> S X=$P(REC,U,6) I $L(X) S $P(REC,U,5)=+$G(^DIC(42,+$O(^DIC(42,"B",X,0)),44))<br/> S $P(REC,U,8)=$$CWAD^ORQPT2(DFN)_U_$$EN1^ORQPT2(DFN)<br/> S X=$G(^DPT(DFN,.105)) I X S $P(REC,U,10)=$P($G(^DGPM(X,0)),U)<br/> S:'$D(IOST) IOST="P-OTHER"<br/> S $P(REC,U,11)=0<br/> D ELIG^VADPT S $P(REC,U,12)=$G(VAEL(3)) ;two pieces: SC^SC%<br/> I $L($T(GETICN^MPIF001)) S X=+$$GETICN^MPIF001(DFN) S:X>0 $P(REC,U,14)=X<br/> S $P(REC,U,15)=$$AGE(DFN,$P(REC,U,3))<br/> S $P(REC,U,16)=+$G(^DPT(DFN,.103)) ; treating specialty<br/> I +$P(REC,U,16)>0 D<br/> . N X,Y,Z<br/> . S (X,Y)=""<br/> . S X=$$TSDATA^DGACT(45.7,+$P(REC,U,16),.Y,"")<br/> . I +X,+$P($G(Y(2)),U,1)>0 S (X,Z)="" S X=$$TSDATA^DGACT(42.4,+$P($G(Y(2)),U,1),.Z,"")<br/> . I +X S $P(REC,U,17)=$P($G(Z(3)),U,1) ; treating  specialty service<br/> K VAEL,VAERR ;VADPT call to kill?<br/> S ^DISV(DUZ,"^DPT(")=DFN</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}