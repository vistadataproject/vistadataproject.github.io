---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XUS DIVISION SET 

 property | value 
--- | --- 
 label | {::nomarkdown}XUS DIVISION SET{:/}
 tag | {::nomarkdown}DIVSET{:/}
 routine | [XUSRB2](http://code.osehra.org/dox/Routine_XUSRB2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC is used to set the user's selected Division in DUZ(2) duringsign-on.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Set users Division
 Input Parameters | {::nomarkdown}DIV{:/}
 Lines | ```
 S RET=0,DIV=$$FIND1^DIC(200.02,","_DUZ_",","MX",$G(DIV))
 Q:DIV'>0
 N X
 I '$D(^VA(200,DUZ,2,DIV,0)) Q
 S RET=1 ;1=set, 0=not set
 D UPDIV(+DIV) ;Update Sign-on log```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DIV{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}12{:/} | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 6:55:29 am