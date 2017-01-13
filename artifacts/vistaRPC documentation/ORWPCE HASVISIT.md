---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE HASVISIT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE HASVISIT{:/}
 tag | {::nomarkdown}HASVISIT{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the visit status of the visit associated with a note:1 if the visit is being pointed to by an appointment0 if the visit is NOT being pointed to by an appointment-1 if the visit is invalid or could not be determined{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Has visit or is stand alone
 Input Parameters | {::nomarkdown}IEN<br/>DFN<br/>ORLOC<br/>ORDTE{:/}
 Lines | ```{::nomarkdown} N ORVISIT<br/> S ORY=-1<br/> I +$G(IEN)>0 S ORVISIT=+$P($G(^TIU(8925,+IEN,0)),U,3)<br/> I +$G(ORVISIT)'>0 S ORVISIT=$$GETENC^PXAPI(DFN,ORDTE,ORLOC)<br/> I +$G(ORVISIT)>0 S ORY=$$VST2APPT^PXAPI(ORVISIT)```{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}IEN of the Note.{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Patient DFN.{:/} | 
| {::nomarkdown}ORLOC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Hospital Location.{:/} | 
| {::nomarkdown}ORDTE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Visit Date{:/} | 




 Generated on January 13th 2017, 7:11:27 am