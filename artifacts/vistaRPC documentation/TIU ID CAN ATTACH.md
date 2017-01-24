---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU ID CAN ATTACH 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU ID CAN ATTACH{:/}
 tag | {::nomarkdown}CANATTCH{:/}
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This BOOLEAN RPC evaluates the question of whether a particular documentmay be attached as an entry to an Interdisciplinary Note (i.e., can thisdocument be an ID Child?).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN of the prospective ID Child document in the TIU Documentfile.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CANATTCH^[TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 Method comment | Can this document be attached as an ID Child
 Input parameters | {::nomarkdown}TIUDA{:/}
 Code | {::nomarkdown}  N TITLEDA,PARENTDA<br> S TITLEDA=+$G(^TIU(8925,TIUDA,0))<br> I TITLEDA'>0 S TIUY="0^Document #"_TIUDA_" does not exist." Q<br> S PARENTDA=+$G(^TIU(8925,TIUDA,21))<br> S TIUY=$$POSSPRNT^TIULP(TITLEDA)<br> I +TIUY S TIUY="-1"_U_$P(TIUY,U,2) Q<br> I +$$ISCWAD^TIULX(TITLEDA) D  Q<br> . S TIUY="0^ CWAD Documents may not be Attached as Interdisciplinary Entries."<br> I +$$ISA^TIULX(TITLEDA,+$$CLASS^TIUCNSLT) D  Q<br> . S TIUY="0^ Consult Results may not be Attached as Interdisciplinary Entries."<br> S TIUY=$$CANDO^TIULP(TIUDA,"ATTACH TO ID NOTE")<br> I PARENTDA D  ; action must be "detach"<br> . I 'TIUY S TIUY="0^ You may not detach this note from an interdisciplinary note." Q<br> . S TIUY=$$CANDO^TIULP(PARENTDA,"ATTACH ID ENTRY")<br> . I 'TIUY S TIUY="0^ You may not detach this note from its interdisciplinary note."{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:11 am</p>{:/}