---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQCN SVCTREE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN SVCTREE{:/}
 tag | {::nomarkdown}SVCTREE{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a specially formatted list of consult services for use inpopulating a GUI TreeView control.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PURPOSE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} |  | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SVCTREE^[ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 Method comment | Returns list of consult service for current
 First comment | {::nomarkdown}context, screening for inactive, groupers, and tracking<br/>PURPOSE: Display=0, Forward=1, Order=1{:/}
 Input parameters | {::nomarkdown}PURPOSE{:/}
 Code | ```  N GMRCTO,GMRCDG,GMRCSVC,GMRCOI
  S GMRCTO=PURPOSE,GMRCDG=1
 D SERV1^GMRCASV
 S GMRCSVC=0
 I '$D(^TMP("GMRCSLIST",$J)) S Y(1)="-1^No services found" Q  ;DBIA 2426
 F I=1:1  S GMRCSVC=$O(^TMP("GMRCSLIST",$J,GMRCSVC)) Q:+GMRCSVC=0  D
 . S Y(I)=^TMP("GMRCSLIST",$J,GMRCSVC)
 . S GMRCOI=$O(^ORD(101.43,"ID",$P(Y(I),U,1)_";99CON",0))
 . S Y(I)=Y(I)_U_GMRCOI```




 Generated on January 14th 2017, 7:26:35 am