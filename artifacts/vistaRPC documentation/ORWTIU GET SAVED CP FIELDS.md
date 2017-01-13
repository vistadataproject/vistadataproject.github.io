---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTIU GET SAVED CP FIELDS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWTIU GET SAVED CP FIELDS{:/}
 tag | {::nomarkdown}GETCP{:/}
 routine | [ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Given a TIU document of the clinical procedures class, return the author, title, cosigner, procedure summary code, date/time of procedure, and reference date, as stored on the server.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Checks required CP fields before signature
 Input Parameters | {::nomarkdown}ORTIUDA{:/}
 Lines | {::nomarkdown} S ORY=""<br/> N ORTITLE,ORAUTH,ORCOS,ORPSUMCD,ORPROCDT,ORROOT,ORERR,ORREFDT<br/> S ORERR="",ORROOT=$NA(^TMP("ORTIU",$J))<br/> D EXTRACT^TIULQ(ORTIUDA,.ORROOT,.ORERR,".01;1202;1208;70201;70202;1301",,,"I")<br/> S ORTITLE=@ORROOT@(ORTIUDA,".01","I")<br/> S ORAUTH=@ORROOT@(ORTIUDA,"1202","I")<br/> S ORCOS=@ORROOT@(ORTIUDA,"1208","I")<br/> S ORPSUMCD=@ORROOT@(ORTIUDA,"70201","I")<br/> S ORPROCDT=@ORROOT@(ORTIUDA,"70202","I")<br/> S ORREFDT=@ORROOT@(ORTIUDA,"1301","I")<br/> S ORY=ORAUTH_U_ORCOS_U_ORPSUMCD_U_ORPROCDT_U_ORTITLE_U_ORREFDT<br/> K @ORROOT{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pointer to file 8925 for the document.{:/} | 




 Generated on January 13th 2017, 7:15:28 am