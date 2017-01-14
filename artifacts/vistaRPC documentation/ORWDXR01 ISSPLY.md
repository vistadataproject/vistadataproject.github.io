---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDXR01 ISSPLY 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXR01 ISSPLY{:/}
 tag | {::nomarkdown}ISSPLY{:/}
 routine | [ORWDXR01](http://code.osehra.org/dox/Routine_ORWDXR01_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ISSPLY^[ORWDXR01](http://code.osehra.org/dox/Routine_ORWDXR01_source.html)
 First comment | {::nomarkdown}ORY=1: is "PSO SUPPLY" dialog{:/}
 Input parameters | {::nomarkdown}DLGID<br/>QODLG{:/}
 Code | ```  S ORY=""
 Q:'$D(^ORD(101.41,DLGID,0))
 I 'QODLG,($P(^ORD(101.41,DLGID,0),U)="PSO SUPPLY") S ORY=1
 I QODLG D
 . N SPLYDG S SPLYDG=$O(^ORD(100.98,"B","SPLY",0))
 . I $P(^ORD(101.41,DLGID,0),U,5)=SPLYDG S ORY=1```




 Generated on January 14th 2017, 7:26:36 am