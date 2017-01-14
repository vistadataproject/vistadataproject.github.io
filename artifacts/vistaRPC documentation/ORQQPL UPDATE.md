---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQPL UPDATE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL UPDATE{:/}
 tag | {::nomarkdown}UPDATE{:/}
 routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Updates problem record{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}UPDARRAY{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}UPDATE ARRAY{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | UPDATE^[ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 Method comment | UPDATE A PROBLEM RECORD
 First comment | {::nomarkdown}Does essentially same job as EDSAVE above, however does not handle edits to comments<br/>or addition of multiple comments.<br/>Use initially just for status updates.{:/}
 Input parameters | {::nomarkdown}UPDARRAY{:/}
 Code | ```  N S,GMPL,GMPORIG,ORARRAY ; last 2 vars created in nested call
 S S=""
 F  S S=$O(UPDARRAY(S)) Q:S=""  D
 . S @UPDARRAY(S)
 D UPDATE^GMPLUTL(.ORARRAY,.ORRETURN)
 S ORRETURN(1)=ORRETURN(0) ; error text
 S ORRETURN(0)=ORRETURN ; gmpdfn
 I ORRETURN(0)=""  S ORRETURN=1 ; insurance ? need```




 Generated on January 14th 2017, 7:26:35 am