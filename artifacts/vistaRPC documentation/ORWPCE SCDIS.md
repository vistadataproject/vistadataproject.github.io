---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE SCDIS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE SCDIS{:/}
 tag | {::nomarkdown}SCDIS{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns service connected percentage and rated disabilities for a patient.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | SCDIS^[ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 Method comment | Return service connected % and rated disabilities
 Input parameters | {::nomarkdown}DFN{:/}
 Code | {::nomarkdown}  N VAEL,VAERR,I,ILST,DIS,SC,X<br> D ELIG^VADPT<br> S LST(1)="Service Connected: "_$S(+VAEL(3):$P(VAEL(3),U,2)_"%",1:"NO")<br> I 'VAEL(4),'$P($G(^DG(391,+VAEL(6),0)),U,2) S LST(2)="NOT A VETERAN." Q<br> S I=0,ILST=1 F  S I=$O(^DPT(DFN,.372,I)) Q:'I  S X=^(I,0) D<br> . S DIS=$P($G(^DIC(31,+X,0)),U) Q:DIS=""<br> . S SC=$S($P(X,U,3):"SC",$P(X,U,3)']"":"not specified",1:"NSC")<br> . S ILST=ILST+1,LST(ILST)=DIS_" ("_$P(X,U,2)_"% "_SC_")"<br> I ILST=1 S LST(2)="Rated Disabilities: NONE STATED"{:/}


### CPRS

[Encounter/rPCE.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas")
[Orders/rODBase.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}