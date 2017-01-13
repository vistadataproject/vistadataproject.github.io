---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT MAKE RPL 

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
 Input Parameters | {::nomarkdown}ORTL{:/}
 Lines | ```
 N ORDFN,ORJ,ORREAD,ORRET,ORROOT,ORX
 I ORTL="" S Y="" Q                        ; No Team List IEN passed.
 I $G(^OR(100.21,ORTL,0))="" S Y="" Q      ; No such Team List.
 S (ORJ,Y)=$J                              ; Assign returned value.
 S ORROOT="^TMP("_"""ORRPL"""_","          ; Initial setting.
 S ORROOT=ORROOT_ORJ_","_"""B"""           ; Add job number, "B."
 S ORREAD=ORROOT_")"                       ; Assign "kill" root.
 K @ORREAD                                 ; Kill old, if any.
 S ORX=""                                  ; Initialize.
 F  S ORX=$O(^OR(100.21,ORTL,10,"B",ORX)) Q:ORX=""  D
 .S ORDFN=$P(ORX,";")                      ; Extract patient DFN.
 .S ORRET=$$PNAMWRIT(ORROOT,ORDFN)         ; Call that writes to ^TMP.```
 Leading comment lines | {::nomarkdown}Variables used:<br/>ORDFN   = Holder for patient DFN.<br/>ORJ     = Holds $J value.<br/>ORREAD  = Holder for ^TMP root to kill.<br/>ORRET   = Returned value from function call.<br/>ORROOT  = ^TMP root to pass.<br/>ORTL    = Team List IEN.<br/>ORX     = Working variable used in $ORDER statement.<br/>Y       = Returned value (same as ORJ).{:/}




 Generated on January 13th 2017, 6:55:29 am