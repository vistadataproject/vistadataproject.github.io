---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU GET PRF TITLE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET PRF TITLE{:/}
 tag | {::nomarkdown}GETTITLE{:/}
 routine | [TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns IEN of the TIU Note Title in file 8925.1 which is associatedwith given flag for given patient.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PTDFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Patient IEN in Patient file{:/} | 
| {::nomarkdown}FLAGID{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The unique number for a particular Active Record Flag returned by $$GETACT^DGPFAPI.  See IA #3860.  See also GETFLAG^ORPRF.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETTITLE^[TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
 Method comment | RPC Gets Note Title associated with FLAGID for PTDFN
 Input parameters | {::nomarkdown}PTDFN, FLAGID{:/}
 First comment | {::nomarkdown}<pre>Receives TIUY by ref; passes back<br/> TIUY = TitleIEN^Title<br/>        0 if no title is associated or flg assignmt is not active<br/>Requires PTDFN<br/>Requires FLAGID - identifier for particular flag assignment<br/>   for patient PTDFN. Set as subscript in GETACT^DGPFAPI.<br/> See GETFLG^ORPRF.</pre>{:/}
 Code | {::nomarkdown}  N PRFARR K TIUY S TIUY=0<br> Q:'$G(PTDFN)  Q:'$G(FLAGID)<br> S TIUY=$$GETACT^DGPFAPI(PTDFN,"PRFARR") ;Get ACTive flag info<br> Q:'TIUY<br> S TIUY=$G(PRFARR(FLAGID,"TIUTITLE"))<br> I TIUY'>0 S TIUY=0{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fPatientFlagMulti.pas">fPatientFlagMulti.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:45 pm</p>{:/}