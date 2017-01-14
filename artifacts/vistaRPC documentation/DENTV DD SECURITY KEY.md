---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV DD SECURITY KEY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTV DD SECURITY KEY{:/}
 tag | {::nomarkdown}KEY{:/}
 routine | [DENTVRP3](http://code.osehra.org/dox/Routine_DENTVRP3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This rpc will check to see if user holds the DENTV EDIT FILE securitykeys.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}KEY{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Optional if KEY=\L\ (or KEY not passed at all), then check to see if theuser owns the VEJDWPD EDIT LOCAL security key.  If they do, then they canadd cpt codes to file 19600 in the local number space. If KEY=\M\, then check to see if the user owns the VEJDWPD EDIT FILEsecurity key.  If so, then they are a VACO representative, and are allowedto add cpt procedures to file 19600 with iens <100,000{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}