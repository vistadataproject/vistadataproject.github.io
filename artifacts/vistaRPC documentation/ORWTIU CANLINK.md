---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWTIU CANLINK 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWTIU CANLINK{:/}
 tag | {::nomarkdown}CANLINK{:/}
 routine | [ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown} Given a title, call CANLINK^TIULP to determine whether this title can use linked as an Interdisciplinary child note. dbia #2322{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TITLE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} |  | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | CANLINK^[ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
 Method comment | Can the title be an ID child?
 First comment | {::nomarkdown}DBIA #2322{:/}
 Input parameters | {::nomarkdown}ORTITLE{:/}
 Code | ```  S ORY=$$CANLINK^TIULP(ORTITLE)```




 Generated on January 14th 2017, 7:26:35 am