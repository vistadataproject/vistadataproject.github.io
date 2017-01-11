---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU IS USER A PROVIDER? 

 property | value 
--- | --- 
 label | TIU IS USER A PROVIDER?
 tag | ISAPROV
 routine | [TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 return value type | SINGLE VALUE
 description | This Boolean RPC returns TRUE if the user was a known provider on the date specified.


### Method description

 property | value 
--- | --- 
 Method comment | Is user a provider?
 Leading comment lines | Checks USR CLASS PROVIDER AND 200 Person Class,DATE must not include time (for ISA^USRLM)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| USER | LITERAL |  | true | Optional pointer to the NEW PERSON FILE (#200). If user is unspecified the current user will be assumed. | 
| DATE | LITERAL |  | true | Optional FileMan formatted date (time). If none is provided the current date is assumed. | 




Generated on January 11th 2017, 6:34:23 am