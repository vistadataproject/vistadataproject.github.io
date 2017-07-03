---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU TEMPLATE ACCESS LEVEL
# TIU TEMPLATE ACCESS LEVEL



Property | Value
--- | ---
Label | TACCESS
Routine | [TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [TACCESS^TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
Method Comment | Returns Template Access level of User
Input Parameters | ROOT, USER, LOC
First Comment | {::nomarkdown}<pre><code><br/>Return Values:<br/><br/> 0 = FULL ACCESS<br/> 1 = READ ONLY<br/> 2 = NO ACCESS<br/> 3 = SHARED TEMPLATES EDITOR - ACCESS PARAMETERS DO NOT APPLY<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> I +ROOT D  Q:+TIUY<br/> .D ISEDITOR^TIUSRVT(.TIUY,ROOT,USER)<br/> .I +TIUY S TIUY=3<br/> .E  S TIUY=0<br/> S TIUY=$$GET^XPAR(USER_";VA(200,","TIU PERSONAL TEMPLATE ACCESS",1,"I") ;ICR 2263<br/> I TIUY="" D<br/> .N TIUCLLST,TIUERR,IDX,TMP<br/> .D GETLST^XPAR(.TIUCLLST,"SYS","TIU TEMPLATE ACCESS BY CLASS","Q",.TIUERR) ;ICR 2263<br/> .I TIUERR>0 Q<br/> .S IDX=0<br/> .F  S IDX=$O(TIUCLLST(IDX)) Q:'IDX  D<br/> ..I $$ISA^USRLM(USER,$P(TIUCLLST(IDX),U),.TIUERR) D  ;ICR 1544<br/> ...S TMP=+$P(TIUCLLST(IDX),U,2)<br/> ...I +TIUY'>TMP S TIUY=TMP<br/> I TIUY="" D<br/> .N XPARSRCH,SERVICE<br/> .I +$G(LOC) S XPARSRCH=LOC_";SC("_U<br/> .E  S XPARSRCH=""<br/> .;S SERVICE=$P($G(^VA(200,USER,5)),U)<br/> .S SERVICE=$$GETSRV(USER)<br/> .I +SERVICE>0 S XPARSRCH=XPARSRCH_SERVICE_";DIC(49,"_U<br/> .S XPARSRCH=XPARSRCH_"DIV^SYS"<br/> .S TIUY=$$GET^XPAR(XPARSRCH,"TIU PERSONAL TEMPLATE ACCESS")<br/> I TIUY="" S TIUY=0</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}