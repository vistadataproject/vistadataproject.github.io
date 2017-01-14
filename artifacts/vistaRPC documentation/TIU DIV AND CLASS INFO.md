---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; TIU DIV AND CLASS INFO 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU DIV AND CLASS INFO{:/}
 tag | {::nomarkdown}USERINFO{:/}
 routine | [TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of Divisions and User Classes for a specific User.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER{:/} |  |  |  |  | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | USERINFO^[TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
 Method comment | Returns List of User Divisions and ASU Classes
 Input parameters | {::nomarkdown}USER{:/}
 Code | ```  N TIUI,I,IDX,IEN,TIUERR,SRV<br/> S I=0,IDX=1<br/> F  S I=$O(^VA(200,USER,2,I)) Q:'I  D<br/> . I USER=DUZ,I=DUZ(2) S ORY(1)="D^"_I<br/> . E  S IDX=IDX+1,ORY(IDX)="D^"_I<br/> S TIUI=""<br/> F  S TIUI=$O(^USR(8930,"B",TIUI)) Q:(TIUI="")  D<br/> . S IEN=$O(^USR(8930,"B",TIUI,0))<br/> . I $P(^USR(8930,IEN,0),U,3)="0" Q<br/> . I '$$ISA^USRLM(USER,IEN,.TIUERR) Q<br/> . S IDX=IDX+1,ORY(IDX)="C^"_IEN<br/> S SRV=$P($G(^VA(200,USER,5)),U)<br/> I +SRV S IDX=IDX+1,ORY(IDX)="S^"_SRV```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}