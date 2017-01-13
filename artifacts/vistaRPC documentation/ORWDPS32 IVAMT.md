---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS32 IVAMT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 IVAMT{:/}
 tag | {::nomarkdown}IVAMT{:/}
 routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns return UNITS^AMOUNT ^AMOUNT^AMOUNT... for IV solutions.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return UNITS^AMOUNT |^AMOUNT^AMOUNT...| for IV soln
 Input Parameters | {::nomarkdown}OI<br/>ORWTYP{:/}
 Lines | ```
 N I,PSOI,ORWY,AMT
 S PSOI=+$P($G(^ORD(101.43,OI,0)),U,2)_ORWTYP,VAL=""
 D ENVOL^PSJORUT2(PSOI,.ORWY)
 I ORWTYP="B" D
 . S I=0 F  S I=$O(ORWY(I)) Q:I'>0  S AMT(+ORWY(I))="" D
 . . I ORWY(I)<1 D  ;SBR
 . . . K AMT(+ORWY(I))
 . . . S AMT(0_+ORWY(I))=""
 . S AMT=0,VAL="ML" F  S AMT=$O(AMT(AMT)) Q:AMT'>0  S VAL=VAL_U_AMT
 I ORWTYP="A" D
 . S I=+$O(ORWY(0)) S VAL=$P($G(ORWY(I)),U,2)
 . I '$L(VAL) S VAL="ML^LITER^MCG^MG^GM^UNITS^IU^MEQ^MM^MU^THOUU^MG-PE^NANOGRAM^MMOL"```




 Generated on January 13th 2017, 6:55:29 am