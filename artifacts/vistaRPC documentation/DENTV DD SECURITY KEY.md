---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV DD SECURITY KEY 

 property | value 
--- | --- 
 label | DENTV DD SECURITY KEY
 tag | KEY
 routine | [DENTVRP3](http://code.osehra.org/dox/Routine_DENTVRP3_source.html)
 return value type | SINGLE VALUE
 description | This rpc will check to see if user holds the DENTV EDIT FILE securitykeys.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| KEY | LITERAL | 1 | true | Optional if KEY=\L\ (or KEY not passed at all), then check to see if theuser owns the VEJDWPD EDIT LOCAL security key.  If they do, then they canadd cpt codes to file 19600 in the local number space. If KEY=\M\, then check to see if the user owns the VEJDWPD EDIT FILEsecurity key.  If so, then they are a VACO representative, and are allowedto add cpt procedures to file 19600 with iens <100,000 | 




 ###### Generated on January 11th 2017, 6:39:43 am