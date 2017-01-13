---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL UPDATE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL UPDATE{:/}
 tag | {::nomarkdown}UPDATE{:/}
 routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Updates problem record{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | UPDATE A PROBLEM RECORD
 Input Parameters | {::nomarkdown}UPDARRAY{:/}
 Lines | ```
 N S,GMPL,GMPORIG,ORARRAY ; last 2 vars created in nested call
 S S=""
 F  S S=$O(UPDARRAY(S)) Q:S=""  D
 . S @UPDARRAY(S)
 D UPDATE^GMPLUTL(.ORARRAY,.ORRETURN)
 S ORRETURN(1)=ORRETURN(0) ; error text
 S ORRETURN(0)=ORRETURN ; gmpdfn
 I ORRETURN(0)=""  S ORRETURN=1 ; insurance ? need```
 Leading comment lines | {::nomarkdown}Does essentially same job as EDSAVE above, however does not handle edits to comments<br/>or addition of multiple comments.<br/>Use initially just for status updates.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}UPDARRAY{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}UPDATE ARRAY{:/} | 




 Generated on January 13th 2017, 6:55:28 am