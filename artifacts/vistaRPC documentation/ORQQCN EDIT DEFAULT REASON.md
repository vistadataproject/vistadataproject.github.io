---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN EDIT DEFAULT REASON 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN EDIT DEFAULT REASON{:/}
 tag | {::nomarkdown}EDITDRFR{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return value (see details there) determines if and when the consults'reason for request' can be edited.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Allow editing of reason for request?
 Input Parameters | {::nomarkdown}ORSVC{:/}
 Lines | ```
 S ORY=$$REAF^GMRCDRFR(ORSVC)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SERVICE ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}IEN of consults service from file 123.5{:/} | 




 Generated on January 13th 2017, 6:55:29 am