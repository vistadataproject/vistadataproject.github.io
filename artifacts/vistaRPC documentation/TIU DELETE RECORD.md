---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU DELETE RECORD 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU DELETE RECORD{:/}
 tag | {::nomarkdown}DELETE{:/}
 routine | [TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Deletes TIU Document records...Evaluates authorization.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | delete document
 Input Parameters | {::nomarkdown}TIUDA<br/>TIURSN<br/>OVRRIDE{:/}
 Lines | ```
 N TIUDEL,TIUD0 S ERR=0
 I '+$G(OVRRIDE) D  Q:+$G(TIUDEL)'>0
 . S TIUDEL=$$CANDO^TIULP(TIUDA,"DELETE RECORD")
 . I TIUDEL'>0 S ERR="89250003^"_$$EZBLD^DIALOG(89250003)
 S TIUD0=$G(^TIU(8925,+TIUDA,0))
 I +$P(TIUD0,U,5)'<6 D  Q
 . S TIURSN=$G(TIURSN,"A")
 . D DELTEXT^TIURB2(TIUDA,TIURSN)
 D DIK^TIURB2(TIUDA)
 D DELAUDIT^TIUEDI1(TIUDA)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Record number of TIU Document to be deleted.{:/} | 
| {::nomarkdown}TIURSN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This optional parameter specifies the reason for deletion (i.e., PrivacyAct, or Administrative Action). It only needs to be passed if the document has already been signed, and the user is still authorized to delete therecord.{:/} | 




 Generated on January 13th 2017, 6:55:28 am