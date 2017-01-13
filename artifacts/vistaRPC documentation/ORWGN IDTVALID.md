---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWGN IDTVALID 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWGN IDTVALID{:/}
 tag | {::nomarkdown}IDTVALID{:/}
 routine | [ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the implementation date of the coding system passed in{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Returns Implementation date of the ICD code set
 Input Parameters | {::nomarkdown}CSYS{:/}
 Lines | {::nomarkdown} K IDATE<br/> I $G(CSYS)="" S IDATE="-1^CODING SYSTEM PARAMETER MISSING" Q<br/> S IDATE=$$IMPDATE^LEXU(CSYS){:/}
 Leading comment lines | {::nomarkdown}CSYS = System abbreviation for the coding system{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CSYS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}4{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Abbreviated text for Coding System{:/} | 




 Generated on January 13th 2017, 7:15:28 am