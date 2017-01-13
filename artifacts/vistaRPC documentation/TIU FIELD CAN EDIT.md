---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU FIELD CAN EDIT 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU FIELD CAN EDIT{:/}
 tag | {::nomarkdown}CANEDIT{:/}
 routine | [TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns TRUE if the current user is allowed to edit template fields.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Returns TRUE if the current user can edit dialog fields
 Lines | ```{::nomarkdown} S TIUY=0<br/> I '+DUZ Q<br/> N TIUCLASS,TIUERR,IDX,SRV<br/> S SRV=$P($G(^VA(200,DUZ,5)),U)<br/> D GETLST^XPAR(.TIUCLASS,DUZ_";VA(200,^SRV.`"_+$G(SRV)_"^DIV^SYS^PKG","TIU FIELD EDITOR CLASSES","Q",.TIUERR)<br/> I TIUERR>0 Q<br/> S IDX=0<br/> F  S IDX=$O(TIUCLASS(IDX)) Q:'IDX  D  Q:+TIUY<br/> .I $$ISA^USRLM(DUZ,$P(TIUCLASS(IDX),U,2),.TIUERR) S TIUY=1```{:/}




 Generated on January 13th 2017, 7:11:27 am