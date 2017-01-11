---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU GET LINKED PRF NOTES 

 property | value 
--- | --- 
 label | TIU GET LINKED PRF NOTES
 tag | GETNOTES
 routine | [TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
 return value type | ARRAY
 description | Returns list of SIGNED, LINKED PRF notes for given patient, for givenPRF Title


### Method description

 property | value 
--- | --- 
 Method comment | RPC gets SIGNED, LINKED PRF
 Leading comment lines | notes titled TIUTTL for patient PTDFN,Excludes Notes linked to Entered in Error (EIE) actions and,notes linked to Erroneous actions (actions taken prior to,EIE actions).,Receives TIUY by ref; passes back,TIUY = # of notes,TIUY([Reverse][Incremented]InternalNoteDate) =,NoteIEN^ActionName^ExternalNoteDate^AuthorName,Requires PTDFN,TIUTTL,Includes status Uncosigned, Completed, & Amended only.,Optional REVERSE - Boolean Flag:,1 - Sort notes by reverse chronological order,0 (default) - Sort notes by chronological order

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PTDFN | LITERAL |  | true | Patient IEN in Patient file | 
| TIUTTL | LITERAL |  | true | PRF Title IEN in file 8925.1 | 
| REVORDER | LITERAL | 1 | true | Optional.  Boolean flag, with 1 indicating to subscript the list of notesin reverse chronological order.  Default is chronological order. | 




 ###### Generated on January 11th 2017, 6:39:43 am