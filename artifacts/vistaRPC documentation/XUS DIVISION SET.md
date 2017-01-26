---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XUS DIVISION SET 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XUS DIVISION SET{:/}
 tag | {::nomarkdown}DIVSET{:/}
 routine | [XUSRB2](http://code.osehra.org/dox/Routine_XUSRB2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC is used to set the user's selected Division in DUZ(2) duringsign-on.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DIV{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}12{:/} | {::nomarkdown}true{:/} |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DIVSET^[XUSRB2](http://code.osehra.org/dox/Routine_XUSRB2_source.html)
 Method comment | Set users Division
 Input parameters | {::nomarkdown}DIV{:/}
 Code | {::nomarkdown}  S RET=0,DIV=$$FIND1^DIC(200.02,","_DUZ_",","MX",$G(DIV))<br> Q:DIV'>0<br> N X<br> I '$D(^VA(200,DUZ,2,DIV,0)) Q<br> S RET=1 ;1=set, 0=not set<br> D UPDIV(+DIV) ;Update Sign-on log{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} Executable Only <br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}