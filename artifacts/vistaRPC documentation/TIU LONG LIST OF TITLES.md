---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU LONG LIST OF TITLES 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU LONG LIST OF TITLES{:/}
 tag | {::nomarkdown}LONGLIST{:/}
 routine | [TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC serves data to a longlist of selectable TITLES by CLASS.  e.g.,passing the class PROGRESS NOTES will return active Progress Notes titleswhich the current user is authorized to enter notes under.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | long list of titles for a class
 Input Parameters | {::nomarkdown}CLASS<br/>FROM<br/>DIR<br/>IDNOTE{:/}
 Lines | {::nomarkdown} N I,DA,CNT S I=0,CNT=44,DIR=$G(DIR,1)<br/> F  Q:I'<CNT  S FROM=$O(^TIU(8925.1,"ACL",CLASS,FROM),DIR) Q:FROM=""  D<br/> . S DA=0<br/> . F  Q:I'<CNT  S DA=$O(^TIU(8925.1,"ACL",CLASS,FROM,DA)) Q:+DA'>0  D<br/> . . I $S(+$$CANENTR^TIULP(DA)'>0:1,+$$CANPICK^TIULP(DA)'>0:1,1:0) Q<br/> . . I +$L($T(CANLINK^TIULP)),+$G(IDNOTE),(+$$CANLINK^TIULP(DA)'>0) Q<br/> . . S I=I+1,Y(I)=DA_"^"_FROM{:/}
 Leading comment lines | {::nomarkdown}.Y=returned list, CLASS=ptr to class in 8925.1, FROM=text to $O from,<br/>DIR=$O direction, IDNOTE=flag to indicate selection for ID Entry{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CLASS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is a pointer to the CLASS in the Document Definition File (#8925.1)from which the application intends to allow selection of TITLES.{:/} | 
| {::nomarkdown}FROM{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the reference title from which the longlist is scrolling.{:/} | 
| {::nomarkdown}DIR{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the direction in which the longlist is scrolling from thereference title.{:/} | 




 Generated on January 13th 2017, 7:15:27 am