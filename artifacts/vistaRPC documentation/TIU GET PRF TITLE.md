---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; TIU GET PRF TITLE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET PRF TITLE{:/}
 tag | {::nomarkdown}GETTITLE{:/}
 routine | [TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns IEN of the TIU Note Title in file 8925.1 which is associatedwith given flag for given patient.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PTDFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Patient IEN in Patient file{:/} | 
| {::nomarkdown}FLAGID{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The unique number for a particular Active Record Flag returned by $$GETACT^DGPFAPI.  See IA #3860.  See also GETFLAG^ORPRF.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETTITLE^[TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
 Method comment | RPC Gets Note Title associated with FLAGID for PTDFN
 First comment | {::nomarkdown}Receives TIUY by ref; passes back<br/>TIUY = TitleIEN^Title<br/>0 if no title is associated or flg assignmt is not active<br/>Requires PTDFN<br/>Requires FLAGID - identifier for particular flag assignment<br/>for patient PTDFN. Set as subscript in GETACT^DGPFAPI.<br/>See GETFLG^ORPRF.{:/}
 Input parameters | {::nomarkdown}PTDFN<br/>FLAGID{:/}
 Code | ```  N PRFARR K TIUY S TIUY=0
 Q:'$G(PTDFN)  Q:'$G(FLAGID)
 S TIUY=$$GETACT^DGPFAPI(PTDFN,"PRFARR") ;Get ACTive flag info
 Q:'TIUY
 S TIUY=$G(PRFARR(FLAGID,"TIUTITLE"))
 I TIUY'>0 S TIUY=0```




 Generated on January 14th 2017, 7:26:36 am