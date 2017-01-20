---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN GET SERVICE IEN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN GET SERVICE IEN{:/}
 tag | {::nomarkdown}SVCIEN{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SVCIEN^[ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 Method comment | Given orderable item file entry, return IEN in 123.5, OR -1 IF INACTIVE IN 101.43
 Input parameters | {::nomarkdown}ORIEN{:/}
 Code | {::nomarkdown}  N X1<br> I '$D(^ORD(101.43,ORIEN)) S ORY=-1 Q<br> S X1=$G(^ORD(101.43,ORIEN,.1))<br> I +X1,+X1<$$NOW^XLFDT S ORY=-1 Q<br> S ORY=$P($$USID^ORWDXC(ORIEN),U,4){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:08 am</p>{:/}