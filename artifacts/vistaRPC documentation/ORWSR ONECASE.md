---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWSR ONECASE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWSR ONECASE{:/}
 tag | {::nomarkdown}ONECASE{:/}
 routine | [ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Given a TIU document IEN, return the surgical case record and all otherdocuments related to the case, for display in the GUI treeview.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Document IEN in file 8925.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ONECASE^[ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
 Method comment | Given a TIU document, return the case and related documents
 Input parameters | {::nomarkdown}ORTIUDA{:/}
 Code | {::nomarkdown}  Q:'$$PATCH^XPDUTL("SR*3.0*100")!(+$G(ORTIUDA)=0)<br> N ORCASE<br> D GET1405^TIUSRVR(.ORCASE,ORTIUDA)<br> I +ORCASE'>0 S ORY=ORCASE Q<br> D GETONE(.ORY,+ORCASE){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rSurgery.pas">rSurgery.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}