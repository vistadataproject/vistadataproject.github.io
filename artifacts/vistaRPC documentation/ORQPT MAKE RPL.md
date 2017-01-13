---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQPT MAKE RPL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT MAKE RPL{:/}
 tag | {::nomarkdown}RPLMAKE{:/}
 routine | [ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Passes Team List IEN, creates a TMP file entry of patients based thereon, and receives a $J job number in return.{:/}


### Method description

 property | value 
--- | --- 
 Method comment | Make global restricted pt. array from Team List.
 Leading comment lines | Variables used:
ORDFN   = Holder for patient DFN.
ORJ     = Holds $J value.
ORREAD  = Holder for ^TMP root to kill.
ORRET   = Returned value from function call.
ORROOT  = ^TMP root to pass.
ORTL    = Team List IEN.
ORX     = Working variable used in $ORDER statement.
Y       = Returned value (same as ORJ).




 Generated on January 13th 2017, 5:52:13 am