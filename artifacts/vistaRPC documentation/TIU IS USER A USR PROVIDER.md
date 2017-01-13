---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU IS USER A USR PROVIDER 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU IS USER A USR PROVIDER{:/}
 tag | {::nomarkdown}USRPROV{:/}
 routine | [TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This Boolean RPC returns TRUE if the user was a member of USR CLASS PROVIDER on the date specified.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Is USER a USR CLASS provider?

 Leading comment lines | {::nomarkdown}Checks USR CLASS PROVIDER only
DATE must not include time{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN of the user in the NEW PERSON FILE 200.  If no user is specified, DUZ (the current user of the software) is the default.{:/} | 
| {::nomarkdown}DATE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the date in internal FILEMAN format for which the user's membership in USR CLASS PROVIDER is evaluated.  If no date is received, TODAY is the default. Date must be a strict date; time must NOT beincluded.{:/} | 




 Generated on January 13th 2017, 6:15:57 am