---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU FIELD LOAD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU FIELD LOAD{:/}
 tag | {::nomarkdown}LOAD{:/}
 routine | [TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a single Template Field object{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FLD{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Template Field Name{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | LOAD^[TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html)
 Method comment | Load Template Field by Name
 Input parameters | {::nomarkdown}FLD{:/}
 Code | {::nomarkdown}  N FLDIEN S FLDIEN=""<br> Q:$G(FLD)']""<br> D GETFLD(.TIUY,FLD,0,.FLDIEN)<br> I +FLDIEN S TIUY(.05)=FLDIEN{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}