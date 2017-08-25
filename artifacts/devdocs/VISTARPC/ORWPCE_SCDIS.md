---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPCE SCDIS<br/>
# ORWPCE SCDIS

Returns service connected percentage and rated disabilities for a patient.

## Properties

Property | Value
--- | ---
Label | SCDIS
MUMPS Implementation | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [SCDIS^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Method Comment | Return service connected % and rated disabilities
Input Parameters | DFN
Code | {::nomarkdown}<pre><code> N VAEL,VAERR,I,ILST,DIS,SC,X<br/> D ELIG^VADPT<br/> S LST(1)="Service Connected: "_$S(+VAEL(3):$P(VAEL(3),U,2)_"%",1:"NO")<br/> I 'VAEL(4),'$P($G(^DG(391,+VAEL(6),0)),U,2) S LST(2)="NOT A VETERAN." Q<br/> S I=0,ILST=1 F  S I=$O(^DPT(DFN,.372,I)) Q:'I  S X=^(I,0) D<br/> . S DIS=$P($G(^DIC(31,+X,0)),U) Q:DIS=""<br/> . S SC=$S($P(X,U,3):"SC",$P(X,U,3)']"":"not specified",1:"NSC")<br/> . S ILST=ILST+1,LST(ILST)=DIS_" ("_$P(X,U,2)_"% "_SC_")"<br/> I ILST=1 S LST(2)="Rated Disabilities: NONE STATED"</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}