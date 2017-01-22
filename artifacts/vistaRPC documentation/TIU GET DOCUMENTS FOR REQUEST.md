---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU GET DOCUMENTS FOR REQUEST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET DOCUMENTS FOR REQUEST{:/}
 tag | {::nomarkdown}GETDOCS{:/}
 routine | [TIUSRVLR](http://code.osehra.org/dox/Routine_TIUSRVLR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This Remote Procedure returns the list of documents associated with agiven Request (e.g., Consult Request, or Surgical Case).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}OVP{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the variable pointer (e.g., \12745;GMR(123,\ or \14672;SRF(\) thatidentifies the record in the requesting application.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETDOCS^[TIUSRVLR](http://code.osehra.org/dox/Routine_TIUSRVLR_source.html)
 Method comment | Get TIU Documents for a given Consult or
 Input parameters | {::nomarkdown}OVP, SEQUENCE{:/}
 First comment | {::nomarkdown}<pre> Surgical Case</pre>{:/}
 Code | {::nomarkdown}  N TIUDA,TIUI<br> S (TIUDA,TIUI)=0,TIUY=$NA(^TMP("TIULIST",$J)) K @TIUY<br> S SEQUENCE=$S($G(SEQUENCE)]"":$G(SEQUENCE),1:"D")<br> F  S TIUDA=$O(^TIU(8925,"G",OVP,TIUDA)) Q:+TIUDA'>0  D<br> . S TIUI=TIUI+1<br> . ; Cross-check value of field 1405 with x-ref value<br> . I OVP'=$P($G(^TIU(8925,TIUDA,14)),U,5) Q<br> . ; If a document is an ID Entry, get its parent<br> . ; I +$G(^TIU(8925,TIUDA,21)) S TIUDA=+$G(^TIU(8925,TIUDA,21))<br> . ; Don't include entry in list more than once<br> . I +$O(@TIUY@("INDX",TIUDA,0)) Q<br> . ; Don't include entry in list if RETRACTED<br> . I $P($G(^TIU(8925,TIUDA,0)),U,5)=15 Q<br> . S @TIUY@(TIUI)=TIUDA_U_$$RESOLVE^TIUSRVLO(TIUDA)<br> . S @TIUY@("INDX",TIUDA,TIUI)=""<br> . I +$$HASDAD^TIUSRVLI(TIUDA) D SETDAD^TIUSRVLI(.TIUY,TIUDA,.TIUI)<br> . I +$$HASKIDS^TIUSRVLI(TIUDA) D SETKIDS^TIUSRVLI(.TIUY,TIUDA,.TIUI)<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}