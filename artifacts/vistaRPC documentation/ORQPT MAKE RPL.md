---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQPT MAKE RPL 

 property | value 
--- | --- 
 label | ORQPT MAKE RPL
 tag | RPLMAKE
 routine | [ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html)
 return value type | SINGLE VALUE
 description | Passes Team List IEN, creates a TMP file entry of patients based thereon, and receives a $J job number in return.


### Method description

 property | value 
--- | --- 
 Method comment | Make global restricted pt. array from Team List.
 Leading comment lines | Variables used:,ORDFN   = Holder for patient DFN.,ORJ     = Holds $J value.,ORREAD  = Holder for ^TMP root to kill.,ORRET   = Returned value from function call.,ORROOT  = ^TMP root to pass.,ORTL    = Team List IEN.,ORX     = Working variable used in $ORDER statement.,Y       = Returned value (same as ORJ).




 ###### Generated on January 11th 2017, 6:39:43 am