---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWTIU GET SAVED CP FIELDS
# ORWTIU GET SAVED CP FIELDS

Given a TIU document of the clinical procedures class, return the author, title, cosigner, procedure summary code, date/time of procedure, and reference date, as stored on the server.

Property | Value
--- | ---
Label | GETCP
Routine | [ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL | 32 | true | Pointer to file 8925 for the document.



### MUMPS Method Description

Property | Value
--- | ---
Method | [GETCP^ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
Method Comment | Checks required CP fields before signature
Input Parameters | ORTIUDA
Code | {::nomarkdown}<pre><code> S ORY=""<br/> N ORTITLE,ORAUTH,ORCOS,ORPSUMCD,ORPROCDT,ORROOT,ORERR,ORREFDT<br/> S ORERR="",ORROOT=$NA(^TMP("ORTIU",$J))<br/> D EXTRACT^TIULQ(ORTIUDA,.ORROOT,.ORERR,".01;1202;1208;70201;70202;1301",,,"I")<br/> S ORTITLE=@ORROOT@(ORTIUDA,".01","I")<br/> S ORAUTH=@ORROOT@(ORTIUDA,"1202","I")<br/> S ORCOS=@ORROOT@(ORTIUDA,"1208","I")<br/> S ORPSUMCD=@ORROOT@(ORTIUDA,"70201","I")<br/> S ORPROCDT=@ORROOT@(ORTIUDA,"70202","I")<br/> S ORREFDT=@ORROOT@(ORTIUDA,"1301","I")<br/> S ORY=ORAUTH_U_ORCOS_U_ORPSUMCD_U_ORPROCDT_U_ORTITLE_U_ORREFDT<br/> K @ORROOT</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}