---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL UPDATE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL UPDATE{:/}
 tag | {::nomarkdown}UPDATE{:/}
 routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Updates problem record{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}UPDARRAY{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}UPDATE ARRAY{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | UPDATE^[ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 Method comment | UPDATE A PROBLEM RECORD
 First comment | {::nomarkdown}<pre> Does essentially same job as EDSAVE above, however does not handle edits to comments<br/> or addition of multiple comments.<br/> Use initially just for status updates.<br/></pre>{:/}
 Input parameters | {::nomarkdown}UPDARRAY{:/}
 Code | {::nomarkdown}  N S,GMPL,GMPORIG,ORARRAY ; last 2 vars created in nested call<br> S S=""<br> F  S S=$O(UPDARRAY(S)) Q:S=""  D<br> . S @UPDARRAY(S)<br> D UPDATE^GMPLUTL(.ORARRAY,.ORRETURN)<br> S ORRETURN(1)=ORRETURN(0) ; error text<br> S ORRETURN(0)=ORRETURN ; gmpdfn<br> I ORRETURN(0)=""  S ORRETURN=1 ; insurance ? need{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:31 am</p>{:/}