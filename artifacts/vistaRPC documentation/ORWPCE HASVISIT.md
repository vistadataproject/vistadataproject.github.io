---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE HASVISIT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE HASVISIT{:/}
 tag | {::nomarkdown}HASVISIT{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the visit status of the visit associated with a note:1 if the visit is being pointed to by an appointment0 if the visit is NOT being pointed to by an appointment-1 if the visit is invalid or could not be determined{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}IEN of the Note.{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Patient DFN.{:/} | 
| {::nomarkdown}ORLOC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Hospital Location.{:/} | 
| {::nomarkdown}ORDTE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Visit Date{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | HASVISIT^[ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 Method comment | Has visit or is stand alone
 Input parameters | {::nomarkdown}IEN, DFN, ORLOC, ORDTE{:/}
 Code | {::nomarkdown}  N ORVISIT<br> S ORY=-1<br> I +$G(IEN)>0 S ORVISIT=+$P($G(^TIU(8925,+IEN,0)),U,3)<br> I +$G(ORVISIT)'>0 S ORVISIT=$$GETENC^PXAPI(DFN,ORDTE,ORLOC)<br> I +$G(ORVISIT)>0 S ORY=$$VST2APPT^PXAPI(ORVISIT){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}