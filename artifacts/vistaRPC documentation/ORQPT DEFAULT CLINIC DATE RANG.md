---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT DEFAULT CLINIC DATE RANG 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT DEFAULT CLINIC DATE RANG{:/}
 tag | {::nomarkdown}CDATRANG{:/}
 routine | [ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns default start and stop dates for clinics in the form: start^stop.Start and stop are free text and are not in FM format.  {:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return default start and stop dates for clinics in form start^stop
 Lines | {::nomarkdown} N ORBDATE,OREDATE,ORSRV<br/> S ORSRV=$G(^VA(200,DUZ,5)) I +ORSRV>0 S ORSRV=$P(ORSRV,U)<br/> S ORBDATE=$$UP^XLFSTR($$GET^XPAR("USR^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORLP DEFAULT CLINIC START DATE",1,"E"))<br/> S OREDATE=$$UP^XLFSTR($$GET^XPAR("USR^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORLP DEFAULT CLINIC STOP DATE",1,"E"))<br/> S ORBDATE=$S($L($G(ORBDATE)):ORBDATE,1:""),OREDATE=$S($L($G(OREDATE)):OREDATE,1:"")<br/> S ORY=$$UP^XLFSTR(ORBDATE)_"^"_$$UP^XLFSTR(OREDATE){:/}




 Generated on January 13th 2017, 7:15:27 am