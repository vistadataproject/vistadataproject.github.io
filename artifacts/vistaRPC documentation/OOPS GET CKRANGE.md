---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS GET CKRANGE 

 property | value 
--- | --- 
 label | {::nomarkdown}OOPS GET CKRANGE{:/}
 tag | {::nomarkdown}GETSCHED{:/}
 routine | [OOPSGUI3](http://code.osehra.org/dox/Routine_OOPSGUI3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This broker call is used to return an array which holds the integer values stored in the field included in the input parameter. Currently in ASISTS, the fields that are evaluated/returned via this broker are:140 Regular Work Schedule for CA1244 Regular Work Schedule for CA2{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INPUT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The input parameter must contain the file, field and IEN to retrieve therequested informationd. The format of the input parmameter must be FILE^FIELD^IEN.{:/} | 




 Generated on January 13th 2017, 5:52:13 am