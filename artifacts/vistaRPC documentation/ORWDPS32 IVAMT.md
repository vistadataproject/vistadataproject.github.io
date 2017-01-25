---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS32 IVAMT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 IVAMT{:/}
 tag | {::nomarkdown}IVAMT{:/}
 routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns return UNITS^AMOUNT ^AMOUNT^AMOUNT... for IV solutions.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | IVAMT^[ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 Method comment | return UNITS^AMOUNT |^AMOUNT^AMOUNT...| for IV soln
 Input parameters | {::nomarkdown}OI, ORWTYP{:/}
 Code | {::nomarkdown}  N I,PSOI,ORWY,AMT<br> S PSOI=+$P($G(^ORD(101.43,OI,0)),U,2)_ORWTYP,VAL=""<br> D ENVOL^PSJORUT2(PSOI,.ORWY)<br> I ORWTYP="B" D<br> . S I=0 F  S I=$O(ORWY(I)) Q:I'>0  S AMT(+ORWY(I))="" D<br> . . I ORWY(I)<1 D  ;SBR<br> . . . K AMT(+ORWY(I))<br> . . . S AMT(0_+ORWY(I))=""<br> . S AMT=0,VAL="ML" F  S AMT=$O(AMT(AMT)) Q:AMT'>0  S VAL=VAL_U_AMT<br> I ORWTYP="A" D<br> . S I=+$O(ORWY(0)) S VAL=$P($G(ORWY(I)),U,2)<br> . I '$L(VAL) S VAL="ML^LITER^MCG^MG^GM^UNITS^IU^MEQ^MM^MU^THOUU^MG-PE^NANOGRAM^MMOL"{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}