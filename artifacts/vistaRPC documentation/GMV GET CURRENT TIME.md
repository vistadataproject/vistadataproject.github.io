---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; GMV GET CURRENT TIME 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}GMV GET CURRENT TIME{:/}
 tag | {::nomarkdown}TIME{:/}
 routine | [GMVUTL7](http://code.osehra.org/dox/Routine_GMVUTL7_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Gets the current date and time from the server. This remote procedure call is documented in Integration Agreement 4355.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | TIME^[GMVUTL7](http://code.osehra.org/dox/Routine_GMVUTL7_source.html)
 Method comment | Gets current time
 Input parameters | {::nomarkdown}P2{:/}
 Code | ```  S RESULT=$$NOW^XLFDT()<br/>```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}