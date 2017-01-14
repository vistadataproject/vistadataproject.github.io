---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWRP SAVE DEFAULT PRINTER 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP SAVE DEFAULT PRINTER{:/}
 tag | {::nomarkdown}SAVDFPRT{:/}
 routine | [ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Saves printer as user's default printer.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SAVDFPRT^[ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
 Method comment | Save new default printer for user
 Input parameters | {::nomarkdown}ORDEV{:/}
 Code | ```  N ORPAR,ORERR,ORWINDEF
 Q:$L(ORDEV)=0
 S ORPAR="ORWDP WINPRINT DEFAULT"
 I ORDEV="WIN" S ORWINDEF="Y"
 E  S ORWINDEF="N"
 I $$GET^XPAR(DUZ_";VA(200,",ORPAR,1)'="" D CHG^XPAR(DUZ_";VA(200,",ORPAR,1,ORWINDEF,.ORERR)
 E  D ADD^XPAR(DUZ_";VA(200,",ORPAR,1,ORWINDEF,.ORERR)
 Q:ORDEV="WIN"
 S ORPAR="ORWDP DEFAULT PRINTER",ORDEV="`"_ORDEV
 I $$GET^XPAR(DUZ_";VA(200,",ORPAR,1)'="" D CHG^XPAR(DUZ_";VA(200,",ORPAR,1,ORDEV,.ORERR)
 E  D ADD^XPAR(DUZ_";VA(200,",ORPAR,1,ORDEV,.ORERR)
```




 Generated on January 14th 2017, 7:26:35 am