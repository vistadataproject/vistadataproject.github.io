---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDPS32 IVAMT<br/>
# ORWDPS32 IVAMT

Returns return UNITS^AMOUNT |^AMOUNT^AMOUNT...| for IV solutions.

## Properties

Property | Value
--- | ---
Label | IVAMT
Routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [IVAMT^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
Method Comment | return UNITS^AMOUNT |^AMOUNT^AMOUNT...| for IV soln
Input Parameters | OI, ORWTYP
Code | {::nomarkdown}<pre><code> N I,PSOI,ORWY,AMT<br/> S PSOI=+$P($G(^ORD(101.43,OI,0)),U,2)_ORWTYP,VAL=""<br/> D ENVOL^PSJORUT2(PSOI,.ORWY)<br/> I ORWTYP="B" D<br/> . S I=0 F  S I=$O(ORWY(I)) Q:I'>0  S AMT(+ORWY(I))="" D<br/> . . I ORWY(I)<1 D  ;SBR<br/> . . . K AMT(+ORWY(I))<br/> . . . S AMT(0_+ORWY(I))=""<br/> . S AMT=0,VAL="ML" F  S AMT=$O(AMT(AMT)) Q:AMT'>0  S VAL=VAL_U_AMT<br/> I ORWTYP="A" D<br/> . S I=+$O(ORWY(0)) S VAL=$P($G(ORWY(I)),U,2)<br/> . I '$L(VAL) S VAL="ML^LITER^MCG^MG^GM^UNITS^IU^MEQ^MM^MU^THOUU^MG-PE^NANOGRAM^MMOL"</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}