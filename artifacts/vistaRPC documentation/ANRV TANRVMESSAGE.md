---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ANRV TANRVMESSAGE 

 property | value 
--- | --- 
 label | ANRV TANRVMESSAGE
 tag | SNDTXT
 routine | [ANRVOB](http://code.osehra.org/dox/Routine_ANRVOB_source.html)
 return value type | GLOBAL ARRAY
 description | Create's and sends completed VIST Outcomes to the national mailgroup to populate the national database.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ANRVCMD | LITERAL | 30 | true | 1> CREATE       Initializes message.2> APPEND       Add message text.3> SUBJECT      Give the message a subject.4> SENDTO       e-mail address to send message to.5> EXECUTE      Send the message using VistA Mail. | 




Generated on January 11th 2017, 6:34:23 am