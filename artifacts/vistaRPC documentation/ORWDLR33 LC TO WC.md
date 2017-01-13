---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDLR33 LC TO WC 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR33 LC TO WC{:/}
 tag | {::nomarkdown}LCTOWC{:/}
 routine | [ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | return text instructing user when LC changed to WC on accept/release
 Input Parameters | {::nomarkdown}ORLOC{:/}
 Lines | ```
 N ORDIV,ORSVC
 S ORDIV=DUZ(2)
 S ORSVC=+$G(^VA(200,DUZ,5))
 I ORSVC S ORTXT=$$GET^XPAR(+$G(ORLOC)_";SC("_"^"_+$G(ORSVC)_";DIC(49,^"_+$G(ORDIV)_";DIC(4,^SYS^PKG","ORWLR LC CHANGED TO WC",1,"I")
 E  S ORTXT=$$GET^XPAR(+$G(ORLOC)_";SC("_"^SVC^"_+$G(ORDIV)_";DIC(4,^SYS^PKG","ORWLR LC CHANGED TO WC",1,"I")
```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LOCATION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 6:55:29 am