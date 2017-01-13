---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU GET LINKED PRF NOTES 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET LINKED PRF NOTES{:/}
 tag | {::nomarkdown}GETNOTES{:/}
 routine | [TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns list of SIGNED, LINKED PRF notes for given patient, for givenPRF Title{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | RPC gets SIGNED, LINKED PRF
 Leading comment lines | {::nomarkdown}notes titled TIUTTL for patient PTDFN<br/>Excludes Notes linked to Entered in Error (EIE) actions and<br/>notes linked to Erroneous actions (actions taken prior to<br/>EIE actions).<br/>Receives TIUY by ref; passes back<br/>TIUY = # of notes<br/>TIUY([Reverse][Incremented]InternalNoteDate) =<br/>NoteIEN^ActionName^ExternalNoteDate^AuthorName<br/>Requires PTDFN,TIUTTL<br/>Includes status Uncosigned, Completed, & Amended only.<br/>Optional REVERSE - Boolean Flag:<br/>1 - Sort notes by reverse chronological order<br/>0 (default) - Sort notes by chronological order{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PTDFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Patient IEN in Patient file{:/} | 
| {::nomarkdown}TIUTTL{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}PRF Title IEN in file 8925.1{:/} | 
| {::nomarkdown}REVORDER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Optional.  Boolean flag, with 1 indicating to subscript the list of notesin reverse chronological order.  Default is chronological order.{:/} | 




 Generated on January 13th 2017, 6:24:32 am