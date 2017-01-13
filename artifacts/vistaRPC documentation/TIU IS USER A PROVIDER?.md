---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU IS USER A PROVIDER? 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU IS USER A PROVIDER?{:/}
 tag | {::nomarkdown}ISAPROV{:/}
 routine | [TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This Boolean RPC returns TRUE if the user was a known provider on the date specified.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Is user a provider?

 Leading comment lines | {::nomarkdown}Checks USR CLASS PROVIDER AND 200 Person Class
DATE must not include time (for ISA^USRLM){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Optional pointer to the NEW PERSON FILE (#200). If user is unspecified the current user will be assumed.{:/} | 
| {::nomarkdown}DATE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Optional FileMan formatted date (time). If none is provided the current date is assumed.{:/} | 




 Generated on January 13th 2017, 6:15:57 am