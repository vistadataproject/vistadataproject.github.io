---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XUS AV CODE 

 property | value 
--- | --- 
 label | XUS AV CODE
 tag | VALIDAV
 routine | [XUSRB](http://code.osehra.org/dox/Routine_XUSRB_source.html)
 return value type | ARRAY
 description | This API checks if a ACCESS/VERIFY code pair is valid.It returns an array of values R(0)=DUZ if sign-on was OK, zero if not OK.R(1)=(0=OK, 1,2...=Can't sign-on for some reason).R(2)=verify needs changing.R(3)=Message.R(4)=0R(5)=count of the number of lines of text, zero if none.R(5+n)=message text.


### Method description

 property | value 
--- | --- 
 Method comment | RPC. XUS CVC - IA #6296
 Leading comment lines | Check a users access,Return R(0)=DUZ, R(1)=(0=OK, 1,2...=Can't sign-on for some reason),R(2)=verify needs changing, R(3)=Message, R(4)=0, R(5)=msg cnt, R(5+n),R(R(5)+6)=# div user must select from, R(R(5)+6+n)=div

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| AVCODE | LITERAL | 60 | true | accessCode_\;\_verifyCode in unencrypted form. | 




Generated on January 11th 2017, 6:34:23 am