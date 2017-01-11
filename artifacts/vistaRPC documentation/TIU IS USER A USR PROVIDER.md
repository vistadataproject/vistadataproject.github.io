---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU IS USER A USR PROVIDER 

 property | value 
--- | --- 
 label | TIU IS USER A USR PROVIDER
 tag | USRPROV
 routine | [TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 return value type | SINGLE VALUE
 description | This Boolean RPC returns TRUE if the user was a member of USR CLASS PROVIDER on the date specified.


### Method description

 property | value 
--- | --- 
 Method comment | Is USER a USR CLASS provider?
 Leading comment lines | Checks USR CLASS PROVIDER only,DATE must not include time

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| USER | LITERAL |  | true | This is the IEN of the user in the NEW PERSON FILE 200.  If no user is specified, DUZ (the current user of the software) is the default. | 
| DATE | LITERAL |  | true | This is the date in internal FILEMAN format for which the user's membership in USR CLASS PROVIDER is evaluated.  If no date is received, TODAY is the default. Date must be a strict date; time must NOT beincluded. | 




 Generated on January 11th 2017, 7:15:04 am