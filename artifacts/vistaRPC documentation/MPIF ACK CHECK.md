---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MPIF ACK CHECK 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MPIF ACK CHECK{:/}
 tag | {::nomarkdown}EN{:/}
 routine | [MPIFACHK](http://code.osehra.org/dox/Routine_MPIFACHK_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC will check to see if there are any messages on the sites before date BEFORE that haven't received the application level ack back.  If so, regenerate that message to the MPI.   If a message is generated 1 will be returned, otherwise 0.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}BEFORE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The FM date that the message should be sent BEFORE.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}