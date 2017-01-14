---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQPT DEFAULT LIST SOURCE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT DEFAULT LIST SOURCE{:/}
 tag | {::nomarkdown}DEFSRC{:/}
 routine | [ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Function returns the source of the current user's default patient list.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DEFSRC^[ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html)
 Method comment | return current user's default list source
 Code | ```  Q:'$D(DUZ)
 N FROM,API,ORSRV
 S ORSRV=$G(^VA(200,DUZ,5)) I +ORSRV>0 S ORSRV=$P(ORSRV,U)
 S FROM=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV),"ORLP DEFAULT LIST SOURCE",1,"Q")
 Q:'$L($G(FROM))
 I FROM="T" S Y=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV),"ORLP DEFAULT TEAM",1,"B")_"^Team"
 I FROM="W" S Y=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV),"ORLP DEFAULT WARD",1,"B")_"^Ward"
 I FROM="P" S Y=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV),"ORLP DEFAULT PROVIDER",1,"B")_"^Primary Provider"
 I FROM="S" S Y=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV),"ORLP DEFAULT SPECIALTY",1,"B")_"^Specialty"
 I FROM="C" D
 .S API="ORLP DEFAULT CLINIC "_$$UP^XLFSTR($$DOW^XLFDT(DT))
 .S Y=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV),API,1,"B")_"^"_$$DOW^XLFDT(DT)_" Clinic"
 I FROM="M" S Y="^Combination"```




 Generated on January 14th 2017, 7:26:35 am