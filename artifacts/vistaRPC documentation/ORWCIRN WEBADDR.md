---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWCIRN WEBADDR 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWCIRN WEBADDR{:/}
 tag | {::nomarkdown}WEBADDR{:/}
 routine | [ORWCIRN](http://code.osehra.org/dox/Routine_ORWCIRN_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Get VistaWeb Web Address.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | WEBADDR^[ORWCIRN](http://code.osehra.org/dox/Routine_ORWCIRN_source.html)
 Method comment | Get VistaWeb Address
 Input parameters | {::nomarkdown}PATID{:/}
 Code | ```  S ORY=$$GET^XPAR("ALL","ORWRP VISTAWEB ADDRESS",1,"I")
 I ORY="" S ORY="https://vistaweb.domain.ext" Q
 I ORY="https://vistaweb.domain.ext" Q
 S ORY=ORY_"?q9gtw0="_$P($$SITE^VASITE,"^",3)_"&xqi4z="_PATID_"&yiicf="_DUZ```




 Generated on January 14th 2017, 7:26:36 am