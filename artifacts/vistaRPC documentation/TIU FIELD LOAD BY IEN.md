---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU FIELD LOAD BY IEN 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU FIELD LOAD BY IEN{:/}
 tag | {::nomarkdown}LOADIEN{:/}
 routine | [TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a single Template Field object.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Load Template Field by IEN
 Input Parameters | {::nomarkdown}FLDIEN{:/}
 Lines | ```
 D GETFLD(.TIUY,"",0,.FLDIEN)
 I +FLDIEN S TIUY(.05)=FLDIEN```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FLDIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Template Field IEN{:/} | 




 Generated on January 13th 2017, 6:55:29 am