---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDLR32 ALLSPEC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR32 ALLSPEC{:/}
 tag | {::nomarkdown}ALLSPEC{:/}
 routine | [ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of specimens from the TOPOGRAPHY FIELD file (#61).{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ALLSPEC^[ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
 Method comment | Return a set of specimens from topography file
 Input parameters | {::nomarkdown}FROM, DIR{:/}
 Code | {::nomarkdown}  N I,IEN,CNT,A,%,NOW,B<br> D NOW^%DTC S NOW=$P(%,".")<br> S I=0,CNT=44<br> F  Q:I'<CNT  S FROM=$O(^LAB(61,"B",FROM),DIR) Q:FROM=""  D<br> . S IEN=0 F  S IEN=$O(^LAB(61,"B",FROM,IEN)) Q:'IEN  D<br> . . S A=$G(^LAB(61,IEN,64.91)) S B=$P(A,"^",3) I B]"",B'>NOW Q<br> . . S I=I+1,Y(I)=IEN_U_FROM_"  ("_$P($G(^LAB(61,IEN,0)),U,2)_")"{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}