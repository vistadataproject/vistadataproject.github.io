---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU ONE VISIT NOTE? 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU ONE VISIT NOTE?{:/}
 tag | {::nomarkdown}TIUVISIT{:/}
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Boolean RPC to evaulate if note has a corresponding visit.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDOC{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the TIU document type.{:/} | 
| {::nomarkdown}TIUDFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the patient's internal entry number (DFN).{:/} | 
| {::nomarkdown}TIUVISIT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the patient's visit internal entry number.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | TIUVISIT^[TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 Method comment | Check for a 1 time only doc
 Input parameters | {::nomarkdown}DOCTYP, DFN, VISIT{:/}
 First comment | {::nomarkdown}<pre>  TIUY    =    return value<br/>          = 0 if can add more than one or none already exist<br/>          = 1 if cannot add more than one and one already exists<br/>  DOCTYP  =    Pointer to ^TUI(8925.1,   TIU DOCUMENT DEFINITION<br/>  DFN     =    Patient IEN<br/>  VISIT   =    Visit String "LOC;VDATE;VTYP"</pre>{:/}
 Code | {::nomarkdown}  I $$PATCH^XPDUTL("OR*3.0*195") D<br> . Q:($G(DOCTYP)="")!($G(DFN)="")!($G(VISIT)="")<br> . N TIUDPRM,TIUTEST<br> . D DOCPRM^TIULC1(DOCTYP,.TIUDPRM)<br> . S TIUY=$S($P(TIUDPRM(0),U,10)="":1,1:$P(TIUDPRM(0),U,10))<br> . I TIUY=1 S TIUY=0 Q<br> . I $L(VISIT,";")=3 D<br> . . S TIUTEST=$$EXIST^TIUEDI3(DFN,DOCTYP,VISIT)<br> . . I TIUTEST S TIUY=1<br> . . I 'TIUTEST S TIUY=0<br> I '$$PATCH^XPDUTL("OR*3.0*195") D<br> . Q:($G(DOCTYP)="")!($G(DFN)="")!($G(VISIT)="")<br> . N TIUX3<br> . S TIUX3=+$O(^TIU(8925.95,"B",DOCTYP,""))<br> . S TIUY=$P($G(^TIU(8925.95,TIUX3,0)),U,10) S TIUY=$S(TIUY=0:1,1:0)<br> . Q:'TIUY<br> . S VISIT=((9999999-$P(VISIT,"."))_"."_$P(VISIT,".",2))<br> . S VISIT=+$O(^AUPNVSIT("AA",DFN,VISIT,""))<br> . S TIUY=$S($D(^TIU(8925,"AV",DFN,DOCTYP,VISIT)):0,1:1)<br> . S TIUY=$S(TIUY=0:1,1:0){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}