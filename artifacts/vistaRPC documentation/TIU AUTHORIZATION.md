---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU AUTHORIZATION 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU AUTHORIZATION{:/}
 tag | {::nomarkdown}CANDO{:/}
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC allows the calling application to evaluate privilege to performany ASU-mediated action on a TIU document.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record number (IEN) of the document in file 8925.{:/} | 
| {::nomarkdown}TIUACT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the ASU ACTION (.01 field from file 8930.8) which is to beperformed by the calling application (e.g., EDIT RECORD, SIGNATURE, COPY,etc.).  To function appropriately, only valid actions may be passed.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CANDO^[TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 Method comment | Boolean function to evaluate privilege
 Input parameters | {::nomarkdown}TIUDA, TIUACT{:/}
 Code | {::nomarkdown}  N TIUPOP,TIUDPRM S TIUPOP=0<br> I $P($G(^TIU(8925,TIUDA,0)),U,5)>5,(TIUACT="EDIT RECORD") S TIUY="0^ You may not edit uncosigned or completed documents" Q<br> I $S(TIUACT["SIGN":1,TIUACT="EDIT RECORD":1,TIUACT="DELETE RECORD":1,1:0) D  Q:+TIUPOP=1<br> . L +^TIU(8925,+TIUDA):1<br> . E  S TIUY="0^ Another session is editing this entry.",TIUPOP=1<br> . L -^TIU(8925,+TIUDA)<br>  I TIUACT["SIGNAT",+$$NEEDCS(TIUDA) S TIUY="0^ You must name a cosigner before signing this document." Q<br> S TIUY=$$CANDO^TIULP(TIUDA,TIUACT){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rDCSumm.pas">rDCSumm.pas</a><br/> <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:03 am</p>{:/}