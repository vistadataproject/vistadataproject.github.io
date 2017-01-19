---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU16 USERINFO 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWU16 USERINFO{:/}
 tag | {::nomarkdown}USERINFO{:/}
 routine | [ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns information about the current user in the format:     DUZ^NAME^USRCLS^CANSIGN^ISPROVIDER^ORDERROLE^NOORDER^DTIME^CD{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | USERINFO^[ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html)
 Method comment | procedure
 First comment | {::nomarkdown}<pre> return DUZ^NAME^SIGNAUTH^ISPROVIDER for the current user<br/> I DUZ=1085 S DUZ=1298           ; CHANGE ID **** DON'T EXPORT ****</pre>{:/}
 Code | {::nomarkdown}  S Y=DUZ_U_$P(^VA(200,DUZ,0),U,1)<br> S $P(Y,U,3)=$S($D(^XUSEC("ORES",DUZ)):3,$D(^XUSEC("ORELSE",DUZ)):2,$D(^XUSEC("OREMAS",DUZ)):1,1:0)<br> S $P(Y,U,4)=$D(^XUSEC("PROVIDER",DUZ))#10{:/}


### CPRS

[NOT OSEHRA CPRS]()

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}