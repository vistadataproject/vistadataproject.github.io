---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; TIU GET DOCUMENTS FOR REQUEST 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET DOCUMENTS FOR REQUEST{:/}
 tag | {::nomarkdown}GETDOCS{:/}
 routine | [TIUSRVLR](http://code.osehra.org/dox/Routine_TIUSRVLR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This Remote Procedure returns the list of documents associated with agiven Request (e.g., Consult Request, or Surgical Case).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}OVP{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the variable pointer (e.g., \12745;GMR(123,\ or \14672;SRF(\) thatidentifies the record in the requesting application.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETDOCS^[TIUSRVLR](http://code.osehra.org/dox/Routine_TIUSRVLR_source.html)
 Method comment | Get TIU Documents for a given Consult or
 First comment | {::nomarkdown}Surgical Case{:/}
 Input parameters | {::nomarkdown}OVP<br/>SEQUENCE{:/}
 Code | ```  N TIUDA,TIUI
 S (TIUDA,TIUI)=0,TIUY=$NA(^TMP("TIULIST",$J)) K @TIUY
 S SEQUENCE=$S($G(SEQUENCE)]"":$G(SEQUENCE),1:"D")
 F  S TIUDA=$O(^TIU(8925,"G",OVP,TIUDA)) Q:+TIUDA'>0  D
 . S TIUI=TIUI+1
 . ; Cross-check value of field 1405 with x-ref value
 . I OVP'=$P($G(^TIU(8925,TIUDA,14)),U,5) Q
 . ; If a document is an ID Entry, get its parent
 . ; I +$G(^TIU(8925,TIUDA,21)) S TIUDA=+$G(^TIU(8925,TIUDA,21))
 . ; Don't include entry in list more than once
 . I +$O(@TIUY@("INDX",TIUDA,0)) Q
 . ; Don't include entry in list if RETRACTED
 . I $P($G(^TIU(8925,TIUDA,0)),U,5)=15 Q
 . S @TIUY@(TIUI)=TIUDA_U_$$RESOLVE^TIUSRVLO(TIUDA)
 . S @TIUY@("INDX",TIUDA,TIUI)=""
 . I +$$HASDAD^TIUSRVLI(TIUDA) D SETDAD^TIUSRVLI(.TIUY,TIUDA,.TIUI)
 . I +$$HASKIDS^TIUSRVLI(TIUDA) D SETKIDS^TIUSRVLI(.TIUY,TIUDA,.TIUI)
```




 Generated on January 14th 2017, 7:26:36 am