---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; TIU LONG LIST OF TITLES 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}TIU LONG LIST OF TITLES{:/}
 tag | {::nomarkdown}LONGLIST{:/}
 routine | [TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC serves data to a longlist of selectable TITLES by CLASS.  e.g.,passing the class PROGRESS NOTES will return active Progress Notes titleswhich the current user is authorized to enter notes under.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CLASS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is a pointer to the CLASS in the Document Definition File (#8925.1)from which the application intends to allow selection of TITLES.{:/} | 
| {::nomarkdown}FROM{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the reference title from which the longlist is scrolling.{:/} | 
| {::nomarkdown}DIR{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the direction in which the longlist is scrolling from thereference title.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | LONGLIST^[TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
 Method comment | long list of titles for a class
 First comment | {::nomarkdown}.Y=returned list, CLASS=ptr to class in 8925.1, FROM=text to $O from,<br/>DIR=$O direction, IDNOTE=flag to indicate selection for ID Entry{:/}
 Input parameters | {::nomarkdown}CLASS<br/>FROM<br/>DIR<br/>IDNOTE{:/}
 Code | ```  N I,DA,CNT S I=0,CNT=44,DIR=$G(DIR,1)
 F  Q:I'<CNT  S FROM=$O(^TIU(8925.1,"ACL",CLASS,FROM),DIR) Q:FROM=""  D
 . S DA=0
 . F  Q:I'<CNT  S DA=$O(^TIU(8925.1,"ACL",CLASS,FROM,DA)) Q:+DA'>0  D
 . . I $S(+$$CANENTR^TIULP(DA)'>0:1,+$$CANPICK^TIULP(DA)'>0:1,1:0) Q
 . . I +$L($T(CANLINK^TIULP)),+$G(IDNOTE),(+$$CANLINK^TIULP(DA)'>0) Q
 . . S I=I+1,Y(I)=DA_"^"_FROM```




 Generated on January 14th 2017, 7:26:35 am