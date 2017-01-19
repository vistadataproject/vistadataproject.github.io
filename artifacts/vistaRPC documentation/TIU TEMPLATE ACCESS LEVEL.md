---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE ACCESS LEVEL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE ACCESS LEVEL{:/}
 tag | {::nomarkdown}TACCESS{:/}
 routine | [TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | TACCESS^[TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
 Method comment | Returns Template Access level of User
 First comment | {::nomarkdown}<pre><br/>Return Values:<br/><br/> 0 = FULL ACCESS<br/> 1 = READ ONLY<br/> 2 = NO ACCESS<br/> 3 = SHARED TEMPLATES EDITOR - ACCESS PARAMETERS DO NOT APPLY<br/></pre>{:/}
 Input parameters | {::nomarkdown}ROOT<br>USER<br>LOC{:/}
 Code | {::nomarkdown}  I +ROOT D  Q:+TIUY<br> .D ISEDITOR^TIUSRVT(.TIUY,ROOT,USER)<br> .I +TIUY S TIUY=3<br> .E  S TIUY=0<br> S TIUY=$$GET^XPAR(USER_";VA(200,","TIU PERSONAL TEMPLATE ACCESS",1,"I") ;ICR 2263<br> I TIUY="" D<br> .N TIUCLLST,TIUERR,IDX,TMP<br> .D GETLST^XPAR(.TIUCLLST,"SYS","TIU TEMPLATE ACCESS BY CLASS","Q",.TIUERR) ;ICR 2263<br> .I TIUERR>0 Q<br> .S IDX=0<br> .F  S IDX=$O(TIUCLLST(IDX)) Q:'IDX  D<br> ..I $$ISA^USRLM(USER,$P(TIUCLLST(IDX),U),.TIUERR) D  ;ICR 1544<br> ...S TMP=+$P(TIUCLLST(IDX),U,2)<br> ...I +TIUY'>TMP S TIUY=TMP<br> I TIUY="" D<br> .N XPARSRCH,SERVICE<br> .I +$G(LOC) S XPARSRCH=LOC_";SC("_U<br> .E  S XPARSRCH=""<br> .;S SERVICE=$P($G(^VA(200,USER,5)),U)<br> .S SERVICE=$$GETSRV(USER)<br> .I +SERVICE>0 S XPARSRCH=XPARSRCH_SERVICE_";DIC(49,"_U<br> .S XPARSRCH=XPARSRCH_"DIV^SYS"<br> .S TIUY=$$GET^XPAR(XPARSRCH,"TIU PERSONAL TEMPLATE ACCESS")<br> I TIUY="" S TIUY=0{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}