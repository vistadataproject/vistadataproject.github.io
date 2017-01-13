---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU GET PRF TITLE 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET PRF TITLE{:/}
 tag | {::nomarkdown}GETTITLE{:/}
 routine | [TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns IEN of the TIU Note Title in file 8925.1 which is associatedwith given flag for given patient.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | RPC Gets Note Title associated with FLAGID for PTDFN

 Leading comment lines | {::nomarkdown}Receives TIUY by ref; passes back
TIUY = TitleIEN^Title
0 if no title is associated or flg assignmt is not active
Requires PTDFN
Requires FLAGID - identifier for particular flag assignment
for patient PTDFN. Set as subscript in GETACT^DGPFAPI.
See GETFLG^ORPRF.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PTDFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Patient IEN in Patient file{:/} | 
| {::nomarkdown}FLAGID{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The unique number for a particular Active Record Flag returned by $$GETACT^DGPFAPI.  See IA #3860.  See also GETFLAG^ORPRF.{:/} | 




 Generated on January 13th 2017, 6:15:57 am