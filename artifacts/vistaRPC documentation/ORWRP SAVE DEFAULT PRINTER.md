---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP SAVE DEFAULT PRINTER 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP SAVE DEFAULT PRINTER{:/}
 tag | {::nomarkdown}SAVDFPRT{:/}
 routine | [ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Saves printer as user's default printer.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Save new default printer for user
 Input Parameters | {::nomarkdown}ORDEV{:/}
 Lines | {::nomarkdown} N ORPAR,ORERR,ORWINDEF<br/> Q:$L(ORDEV)=0<br/> S ORPAR="ORWDP WINPRINT DEFAULT"<br/> I ORDEV="WIN" S ORWINDEF="Y"<br/> E  S ORWINDEF="N"<br/> I $$GET^XPAR(DUZ_";VA(200,",ORPAR,1)'="" D CHG^XPAR(DUZ_";VA(200,",ORPAR,1,ORWINDEF,.ORERR)<br/> E  D ADD^XPAR(DUZ_";VA(200,",ORPAR,1,ORWINDEF,.ORERR)<br/> Q:ORDEV="WIN"<br/> S ORPAR="ORWDP DEFAULT PRINTER",ORDEV="`"_ORDEV<br/> I $$GET^XPAR(DUZ_";VA(200,",ORPAR,1)'="" D CHG^XPAR(DUZ_";VA(200,",ORPAR,1,ORDEV,.ORERR)<br/> E  D ADD^XPAR(DUZ_";VA(200,",ORPAR,1,ORDEV,.ORERR)<br/>{:/}




 Generated on January 13th 2017, 7:15:27 am