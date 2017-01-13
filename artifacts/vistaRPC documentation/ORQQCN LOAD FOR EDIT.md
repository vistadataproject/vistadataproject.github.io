---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN LOAD FOR EDIT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN LOAD FOR EDIT{:/}
 tag | {::nomarkdown}EDITLOAD{:/}
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Given a consult IEN, returns the current values of that record's fields.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Load a cancelled consult/procedure for editing
 Input Parameters | {::nomarkdown}GMRCO{:/}
 Lines | ```
 Q:+$G(GMRCO)=0
 N ORNODE,I
 S ORNODE=$NAME(^TMP("GMRCR",$J)),I=0
 D SEND^GMRCGUIC(GMRCO,ORNODE)
 S Y=ORNODE
```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Consult IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 6:55:29 am