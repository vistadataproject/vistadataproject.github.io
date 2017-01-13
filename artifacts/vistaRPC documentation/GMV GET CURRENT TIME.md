---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; GMV GET CURRENT TIME 

 property | value 
--- | --- 
 label | {::nomarkdown}GMV GET CURRENT TIME{:/}
 tag | {::nomarkdown}TIME{:/}
 routine | [GMVUTL7](http://code.osehra.org/dox/Routine_GMVUTL7_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Gets the current date and time from the server. This remote procedure call is documented in Integration Agreement 4355.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Gets current time
 Input Parameters | {::nomarkdown}P2{:/}
 Lines | ```
 S RESULT=$$NOW^XLFDT()
```




 Generated on January 13th 2017, 6:55:29 am