---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN SVCTREE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN SVCTREE{:/}
 tag | {::nomarkdown}SVCTREE{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a specially formatted list of consult services for use inpopulating a GUI TreeView control.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PURPOSE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SVCTREE^[ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 Method comment | Returns list of consult service for current
 Input parameters | {::nomarkdown}PURPOSE{:/}
 First comment | {::nomarkdown}<pre>  context, screening for inactive, groupers, and tracking<br/> PURPOSE: Display=0, Forward=1, Order=1</pre>{:/}
 Code | {::nomarkdown}  N GMRCTO,GMRCDG,GMRCSVC,GMRCOI<br>  S GMRCTO=PURPOSE,GMRCDG=1<br> D SERV1^GMRCASV<br> S GMRCSVC=0<br> I '$D(^TMP("GMRCSLIST",$J)) S Y(1)="-1^No services found" Q  ;DBIA 2426<br> F I=1:1  S GMRCSVC=$O(^TMP("GMRCSLIST",$J,GMRCSVC)) Q:+GMRCSVC=0  D<br> . S Y(I)=^TMP("GMRCSLIST",$J,GMRCSVC)<br> . S GMRCOI=$O(^ORD(101.43,"ID",$P(Y(I),U,1)_";99CON",0))<br> . S Y(I)=Y(I)_U_GMRCOI{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:13 am</p>{:/}