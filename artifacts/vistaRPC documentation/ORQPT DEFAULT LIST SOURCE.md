---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT DEFAULT LIST SOURCE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT DEFAULT LIST SOURCE{:/}
 tag | {::nomarkdown}DEFSRC{:/}
 routine | [ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Function returns the source of the current user's default patient list.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | DEFSRC^[ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html)
 Method comment | return current user's default list source
 Code | {::nomarkdown}  Q:'$D(DUZ)<br> N FROM,API,ORSRV<br> S ORSRV=$G(^VA(200,DUZ,5)) I +ORSRV>0 S ORSRV=$P(ORSRV,U)<br> S FROM=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV),"ORLP DEFAULT LIST SOURCE",1,"Q")<br> Q:'$L($G(FROM))<br> I FROM="T" S Y=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV),"ORLP DEFAULT TEAM",1,"B")_"^Team"<br> I FROM="W" S Y=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV),"ORLP DEFAULT WARD",1,"B")_"^Ward"<br> I FROM="P" S Y=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV),"ORLP DEFAULT PROVIDER",1,"B")_"^Primary Provider"<br> I FROM="S" S Y=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV),"ORLP DEFAULT SPECIALTY",1,"B")_"^Specialty"<br> I FROM="C" D<br> .S API="ORLP DEFAULT CLINIC "_$$UP^XLFSTR($$DOW^XLFDT(DT))<br> .S Y=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV),API,1,"B")_"^"_$$DOW^XLFDT(DT)_" Clinic"<br> I FROM="M" S Y="^Combination"{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}