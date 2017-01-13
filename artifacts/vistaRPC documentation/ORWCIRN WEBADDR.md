---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCIRN WEBADDR 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWCIRN WEBADDR{:/}
 tag | {::nomarkdown}WEBADDR{:/}
 routine | [ORWCIRN](http://code.osehra.org/dox/Routine_ORWCIRN_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Get VistaWeb Web Address.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get VistaWeb Address
 Input Parameters | {::nomarkdown}PATID{:/}
 Lines | ```{::nomarkdown} S ORY=$$GET^XPAR("ALL","ORWRP VISTAWEB ADDRESS",1,"I")<br/> I ORY="" S ORY="https://vistaweb.domain.ext" Q<br/> I ORY="https://vistaweb.domain.ext" Q<br/> S ORY=ORY_"?q9gtw0="_$P($$SITE^VASITE,"^",3)_"&xqi4z="_PATID_"&yiicf="_DUZ```{:/}




 Generated on January 13th 2017, 7:11:27 am