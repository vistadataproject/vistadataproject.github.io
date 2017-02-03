---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ANRV TANRVMESSAGE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ANRV TANRVMESSAGE{:/}
 tag | {::nomarkdown}SNDTXT{:/}
 routine | [ANRVOB](http://code.osehra.org/dox/Routine_ANRVOB_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Create's and sends completed VIST Outcomes to the national mailgroup to populate the national database.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ANRVCMD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}1> CREATE       Initializes message.2> APPEND       Add message text.3> SUBJECT      Give the message a subject.4> SENDTO       e-mail address to send message to.5> EXECUTE      Send the message using VistA Mail.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:04 am</p>{:/}