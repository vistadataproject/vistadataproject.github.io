---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; TIU IS USER A USR PROVIDER 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}TIU IS USER A USR PROVIDER{:/}
 tag | {::nomarkdown}USRPROV{:/}
 routine | [TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This Boolean RPC returns TRUE if the user was a member of USR CLASS PROVIDER on the date specified.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN of the user in the NEW PERSON FILE 200.  If no user is specified, DUZ (the current user of the software) is the default.{:/} | 
| {::nomarkdown}DATE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the date in internal FILEMAN format for which the user's membership in USR CLASS PROVIDER is evaluated.  If no date is received, TODAY is the default. Date must be a strict date; time must NOT beincluded.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | USRPROV^[TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 Method comment | Is USER a USR CLASS provider?
 First comment | {::nomarkdown}Checks USR CLASS PROVIDER only<br/>DATE must not include time{:/}
 Input parameters | {::nomarkdown}USER<br/>DATE{:/}
 Code | ```  N TIUERR
 S USER=$G(USER,DUZ)
 S DATE=$G(DATE,DT),TIUY=0
 I +$$ISA^USRLM(USER,"PROVIDER",.TIUERR,DATE) S TIUY=1 ;  DBIA/ICR 2324```




 Generated on January 14th 2017, 7:26:36 am