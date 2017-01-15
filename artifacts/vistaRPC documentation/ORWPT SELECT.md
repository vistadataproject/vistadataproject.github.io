---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT SELECT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT SELECT{:/}
 tag | {::nomarkdown}SELECT{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}RPC to return key information on a patient as follows: 1    2   3   4    5      6    7    8       9       10      11   12 13NAME^SEX^DOB^SSN^LOCIEN^LOCNM^RMBD^CWAD^SENSITIVE^ADMITTED^CONV^SC^SC%^ 14  15  16  17ICN^AGE^TS^TSSVC{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | SELECT^[ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 Method comment | Selects patient & returns key information
 First comment | {::nomarkdown}1    2   3   4    5      6    7    8       9       10      11  12<br/>NAME^SEX^DOB^SSN^LOCIEN^LOCNM^RMBD^CWAD^SENSITIVE^ADMITTED^CONV^SC^<br/>13  14  15  16  17<br/>SC%^ICN^AGE^TS^TSSVC<br/>for CCOW (RV - 2/27/03)  name="-1", location=error message{:/}
 Input parameters | {::nomarkdown}DFN{:/}
 Code | {::nomarkdown}  I '$D(^DPT(+DFN,0)) S REC="-1^^^^^Patient is unknown to CPRS." Q<br> N X<br> I $G(XWB("2","RPC"))="ORWPT SELECT" K ^TMP($J,"OC-OPOS") ; delete once per order session order checks<br> K ^TMP("ORWPCE",$J) ; delete PCE 'cache' when switching patients<br> S X=^DPT(DFN,0),REC=$P(X,U,1,3)_U_$P(X,U,9)_U_U_$G(^(.1))_U_$G(^(.101))<br> S X=$P(REC,U,6) I $L(X) S $P(REC,U,5)=+$G(^DIC(42,+$O(^DIC(42,"B",X,0)),44))<br> S $P(REC,U,8)=$$CWAD^ORQPT2(DFN)_U_$$EN1^ORQPT2(DFN)<br> S X=$G(^DPT(DFN,.105)) I X S $P(REC,U,10)=$P($G(^DGPM(X,0)),U)<br> S:'$D(IOST) IOST="P-OTHER"<br> S $P(REC,U,11)=0<br> D ELIG^VADPT S $P(REC,U,12)=$G(VAEL(3)) ;two pieces: SC^SC%<br> I $L($T(GETICN^MPIF001)) S X=+$$GETICN^MPIF001(DFN) S:X>0 $P(REC,U,14)=X<br> S $P(REC,U,15)=$$AGE(DFN,$P(REC,U,3))<br> S $P(REC,U,16)=+$G(^DPT(DFN,.103)) ; treating specialty<br> I +$P(REC,U,16)>0 D<br> . N X,Y,Z<br> . S (X,Y)=""<br> . S X=$$TSDATA^DGACT(45.7,+$P(REC,U,16),.Y,"")<br> . I +X,+$P($G(Y(2)),U,1)>0 S (X,Z)="" S X=$$TSDATA^DGACT(42.4,+$P($G(Y(2)),U,1),.Z,"")<br> . I +X S $P(REC,U,17)=$P($G(Z(3)),U,1) ; treating  specialty service<br> K VAEL,VAERR ;VADPT call to kill?<br> S ^DISV(DUZ,"^DPT(")=DFN{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}