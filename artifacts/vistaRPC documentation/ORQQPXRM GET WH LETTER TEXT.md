---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPXRM GET WH LETTER TEXT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPXRM GET WH LETTER TEXT{:/}
 tag | {::nomarkdown}LETTER{:/}
 routine | [WVRPCNO1](http://code.osehra.org/dox/Routine_WVRPCNO1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Retrieve letter text for a WH letter{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Returns the letter text for the purpose of

 Leading comment lines | {::nomarkdown}notification
Input: RESULT - array name to return data in [required]
WVIEN - FILE 790.404 IEN [required]
Output: RESULT(0)=First line of letter text   <OR>
-1^error message
RESULT(n)= remaining lines of letter text{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}WVIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 6:15:57 am