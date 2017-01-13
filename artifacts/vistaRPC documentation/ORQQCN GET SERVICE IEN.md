---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN GET SERVICE IEN 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN GET SERVICE IEN{:/}
 tag | {::nomarkdown}SVCIEN{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Given orderable item file entry, return IEN in 123.5, OR -1 IF INACTIVE IN 101.43
 Input Parameters | {::nomarkdown}ORIEN{:/}
 Lines | {::nomarkdown} N X1<br/> I '$D(^ORD(101.43,ORIEN)) S ORY=-1 Q<br/> S X1=$G(^ORD(101.43,ORIEN,.1))<br/> I +X1,+X1<$$NOW^XLFDT S ORY=-1 Q<br/> S ORY=$P($$USID^ORWDXC(ORIEN),U,4){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  |  | 




 Generated on January 13th 2017, 7:15:27 am