---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU FIELD NAME IS UNIQUE 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU FIELD NAME IS UNIQUE{:/}
 tag | {::nomarkdown}ISUNIQUE{:/}
 routine | [TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns TRUE if the template field name is unique{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Is Name Unique?
 Input Parameters | {::nomarkdown}NAME<br/>IEN{:/}
 Lines | ```{::nomarkdown} N FLD<br/> S FLD=+$O(^TIU(8927.1,"B",NAME,0))<br/> I +FLD,FLD'=IEN S TIUY=0<br/> E  S TIUY=1```{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}NAME{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Template Field Name.{:/} | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Optional IEN of existing field{:/} | 




 Generated on January 13th 2017, 7:11:27 am