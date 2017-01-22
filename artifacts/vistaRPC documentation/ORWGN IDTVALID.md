---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWGN IDTVALID 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWGN IDTVALID{:/}
 tag | {::nomarkdown}IDTVALID{:/}
 routine | [ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the implementation date of the coding system passed in{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CSYS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}4{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Abbreviated text for Coding System{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | IDTVALID^[ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html)
 Method comment | Returns Implementation date of the ICD code set
 Input parameters | {::nomarkdown}CSYS{:/}
 First comment | {::nomarkdown}<pre>CSYS = System abbreviation for the coding system</pre>{:/}
 Code | {::nomarkdown}  K IDATE<br> I $G(CSYS)="" S IDATE="-1^CODING SYSTEM PARAMETER MISSING" Q<br> S IDATE=$$IMPDATE^LEXU(CSYS){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}