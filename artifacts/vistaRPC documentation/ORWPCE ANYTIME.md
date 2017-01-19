---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE ANYTIME 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE ANYTIME{:/}
 tag | {::nomarkdown}ANYTIME{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns TRUE if encounters can be entered at any time{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | ANYTIME^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | Returns status of the ORWPCE ANYTIME ENCOUNTERS parameter
 Code | {::nomarkdown}  N SRV<br> S SRV=$P($G(^VA(200,DUZ,5)),U)<br> S ORY=$$GET^XPAR(DUZ_";VA(200,^SRV.`"_+$G(SRV)_"^DIV^SYS","ORWPCE ANYTIME ENCOUNTERS",1,"Q")<br> I +ORY S ORY=1{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}