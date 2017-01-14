---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQCN LOAD FOR EDIT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN LOAD FOR EDIT{:/}
 tag | {::nomarkdown}EDITLOAD{:/}
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Given a consult IEN, returns the current values of that record's fields.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Consult IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} |  | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | EDITLOAD^[ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 Method comment | Load a cancelled consult/procedure for editing
 Input parameters | {::nomarkdown}GMRCO{:/}
 Code | ```  Q:+$G(GMRCO)=0
 N ORNODE,I
 S ORNODE=$NAME(^TMP("GMRCR",$J)),I=0
 D SEND^GMRCGUIC(GMRCO,ORNODE)
 S Y=ORNODE
```




 Generated on January 14th 2017, 7:26:35 am