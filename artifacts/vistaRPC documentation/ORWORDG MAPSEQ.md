---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORDG MAPSEQ 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWORDG MAPSEQ{:/}
 tag | {::nomarkdown}MAPSEQ{:/}
 routine | [ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | MAPSEQ^[ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html)
 Method comment | similar to GRPSEQB, for 32bit
 Code | {::nomarkdown}  N C,I,X<br> D GRPSEQ(.X)<br> S C=0,I=0<br> F  S I=$O(X(I)) Q:I=""  S C=C+1,Y(C)=I_"="_X(I)_U_$P(^ORD(100.98,I,0),U,2){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [Orders/rOrders.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:06 am</p>{:/}