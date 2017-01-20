---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU DELETE RECORD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU DELETE RECORD{:/}
 tag | {::nomarkdown}DELETE{:/}
 routine | [TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Deletes TIU Document records...Evaluates authorization.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Record number of TIU Document to be deleted.{:/} | 
| {::nomarkdown}TIURSN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This optional parameter specifies the reason for deletion (i.e., PrivacyAct, or Administrative Action). It only needs to be passed if the document has already been signed, and the user is still authorized to delete therecord.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DELETE^[TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
 Method comment | delete document
 Input parameters | {::nomarkdown}TIUDA, TIURSN, OVRRIDE{:/}
 Code | {::nomarkdown}  N TIUDEL,TIUD0 S ERR=0<br> I '+$G(OVRRIDE) D  Q:+$G(TIUDEL)'>0<br> . S TIUDEL=$$CANDO^TIULP(TIUDA,"DELETE RECORD")<br> . I TIUDEL'>0 S ERR="89250003^"_$$EZBLD^DIALOG(89250003)<br> S TIUD0=$G(^TIU(8925,+TIUDA,0))<br> I +$P(TIUD0,U,5)'<6 D  Q<br> . S TIURSN=$G(TIURSN,"A")<br> . D DELTEXT^TIURB2(TIUDA,TIURSN)<br> D DIK^TIURB2(TIUDA)<br> D DELAUDIT^TIUEDI1(TIUDA){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rDCSumm.pas">rDCSumm.pas</a><br/> <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}