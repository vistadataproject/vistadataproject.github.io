---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; TIU ONE VISIT NOTE? 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}TIU ONE VISIT NOTE?{:/}
 tag | {::nomarkdown}TIUVISIT{:/}
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Boolean RPC to evaulate if note has a corresponding visit.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDOC{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the TIU document type.{:/} | 
| {::nomarkdown}TIUDFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the patient's internal entry number (DFN).{:/} | 
| {::nomarkdown}TIUVISIT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the patient's visit internal entry number.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | TIUVISIT^[TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 Method comment | Check for a 1 time only doc
 First comment | {::nomarkdown}TIUY    =    return value<br/>= 0 if can add more than one or none already exist<br/>= 1 if cannot add more than one and one already exists<br/>DOCTYP  =    Pointer to ^TUI(8925.1,   TIU DOCUMENT DEFINITION<br/>DFN     =    Patient IEN<br/>VISIT   =    Visit String "LOC;VDATE;VTYP"{:/}
 Input parameters | {::nomarkdown}DOCTYP<br/>DFN<br/>VISIT{:/}
 Code | ```  I $$PATCH^XPDUTL("OR*3.0*195") D
 . Q:($G(DOCTYP)="")!($G(DFN)="")!($G(VISIT)="")
 . N TIUDPRM,TIUTEST
 . D DOCPRM^TIULC1(DOCTYP,.TIUDPRM)
 . S TIUY=$S($P(TIUDPRM(0),U,10)="":1,1:$P(TIUDPRM(0),U,10))
 . I TIUY=1 S TIUY=0 Q
 . I $L(VISIT,";")=3 D
 . . S TIUTEST=$$EXIST^TIUEDI3(DFN,DOCTYP,VISIT)
 . . I TIUTEST S TIUY=1
 . . I 'TIUTEST S TIUY=0
 I '$$PATCH^XPDUTL("OR*3.0*195") D
 . Q:($G(DOCTYP)="")!($G(DFN)="")!($G(VISIT)="")
 . N TIUX3
 . S TIUX3=+$O(^TIU(8925.95,"B",DOCTYP,""))
 . S TIUY=$P($G(^TIU(8925.95,TIUX3,0)),U,10) S TIUY=$S(TIUY=0:1,1:0)
 . Q:'TIUY
 . S VISIT=((9999999-$P(VISIT,"."))_"."_$P(VISIT,".",2))
 . S VISIT=+$O(^AUPNVSIT("AA",DFN,VISIT,""))
 . S TIUY=$S($D(^TIU(8925,"AV",DFN,DOCTYP,VISIT)):0,1:1)
 . S TIUY=$S(TIUY=0:1,1:0)```




 Generated on January 14th 2017, 7:26:35 am