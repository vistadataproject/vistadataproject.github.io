---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG4 STATUS CALLBACK 

 property | value 
--- | --- 
 label | {::nomarkdown}MAG4 STATUS CALLBACK{:/}
 tag | {::nomarkdown}STATUSCB{:/}
 routine | [MAGGSIUI](http://code.osehra.org/dox/Routine_MAGGSIUI_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC is called from the Imaging Delphi component whenan image/images have been imported via the Imaging Import APIbeing developed for use by Clinical Procedures.This call is used in the test version of Import API, it will be replaced in the released version.  In the released version the Imaging BackGround Processor will be calling the Status Callbackroutine of CP.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}STATARR{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This array has the following structure:STATARR(0)=\0^Error message\  or \1^Success\STATARR(1)=TrackingID      TrackingID was sent as a parameter by CP in the IMPORT() call.STATARR(2)=Queue Number     The Queue Number was returned to CP from the IMPORT() callSTATARR(3..n) If status is '0^ERROR message\ these remaining nodeswill contain further error information.  Intended for User Interventionand debugging purposes.{:/} | 




 Generated on January 13th 2017, 6:24:32 am