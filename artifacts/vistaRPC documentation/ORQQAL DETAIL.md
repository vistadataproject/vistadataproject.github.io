---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQAL DETAIL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQAL DETAIL{:/}
 tag | {::nomarkdown}DETAIL{:/}
 routine | [ORQQAL](http://code.osehra.org/dox/Routine_ORQQAL_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This function returns a string of information for a specific allergy/adverse reaction.  Returned data is delimited by \^\ and includes:allergen/reactant, originator, originator title, verified/not verified, observed/historical,<blank>,type, observation date, severity, drug class, symptoms/reactions (mulitple symptoms possible - delimited by \;\), comments.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ALLERGY ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The record number of the allergy/adverse reaction from the PatientAllergies file (#120.8).{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DETAIL^[ORQQAL](http://code.osehra.org/dox/Routine_ORQQAL_source.html)
 Method comment | RETURN DETAILED ALLERGY INFO FOR SPECIFIED ALLERGIC REACTION:
 Input parameters | {::nomarkdown}DFN, ALLR, ID{:/}
 Code | {::nomarkdown}  D EN2^GMRAOR2(ALLR,"GMRACT")<br> N CR,OX,OH S CR=$CHAR(13),I=1<br> S ORAY(I)="    Causative agent: "_$P(GMRACT,U),I=I+1<br> S ORAY(I)=" Nature of Reaction: "_$S($P(GMRACT,U,6)="ALLERGY":"Allergy",$P(GMRACT,U,6)="PHARMACOLOGIC":"Adverse Reaction",$P(GMRACT,U,6)="UNKNOWN":"Unknown",1:""),I=I+1 ;216<br> S ORAY(I)=" ",I=I+1<br> I $D(GMRACT("S",1)) D SYMP<br> I $D(GMRACT("V",1)) D CLAS<br> S ORAY(I)="         Originator: "_$P(GMRACT,U,2)_$S($L($P(GMRACT,U,3)):" ("_$P(GMRACT,U,3)_")",1:""),I=I+1 ;216<br> S ORAY(I)="         Originated: "_$P(GMRACT,U,10),I=I+1 ;216<br> I $D(GMRACT("O",1)) D OBS<br> S ORAY(I)="           Verified: "_$S($P(GMRACT,U,4)="VERIFIED":$P(GMRACT,U,8),1:"No"),I=I+1 ;216<br> S ORAY(I)="Observed/Historical: "_$S($P(GMRACT,U,5)="OBSERVED":"Observed",$P(GMRACT,U,5)="HISTORICAL":"Historical",1:""),I=I+1<br> I $D(GMRACT("C",1)) D COM<br> K GMRACT{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCover.pas">rCover.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}