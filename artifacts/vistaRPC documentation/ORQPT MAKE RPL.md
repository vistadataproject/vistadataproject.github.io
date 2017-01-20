---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT MAKE RPL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT MAKE RPL{:/}
 tag | {::nomarkdown}RPLMAKE{:/}
 routine | [ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Passes Team List IEN, creates a TMP file entry of patients based thereon, and receives a $J job number in return.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | RPLMAKE^[ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html)
 Method comment | Make global restricted pt. array from Team List.
 First comment | {::nomarkdown}<pre><br/> Variables used:<br/><br/>   ORDFN   = Holder for patient DFN.<br/>   ORJ     = Holds $J value.<br/>   ORREAD  = Holder for ^TMP root to kill.<br/>   ORRET   = Returned value from function call.<br/>   ORROOT  = ^TMP root to pass.<br/>   ORTL    = Team List IEN.<br/>   ORX     = Working variable used in $ORDER statement.<br/>   Y       = Returned value (same as ORJ).<br/></pre>{:/}
 Input parameters | {::nomarkdown}ORTL{:/}
 Code | {::nomarkdown}  N ORDFN,ORJ,ORREAD,ORRET,ORROOT,ORX<br> I ORTL="" S Y="" Q                        ; No Team List IEN passed.<br> I $G(^OR(100.21,ORTL,0))="" S Y="" Q      ; No such Team List.<br> S (ORJ,Y)=$J                              ; Assign returned value.<br> S ORROOT="^TMP("_"""ORRPL"""_","          ; Initial setting.<br> S ORROOT=ORROOT_ORJ_","_"""B"""           ; Add job number, "B."<br> S ORREAD=ORROOT_")"                       ; Assign "kill" root.<br> K @ORREAD                                 ; Kill old, if any.<br> S ORX=""                                  ; Initialize.<br> F  S ORX=$O(^OR(100.21,ORTL,10,"B",ORX)) Q:ORX=""  D<br> .S ORDFN=$P(ORX,";")                      ; Extract patient DFN.<br> .S ORRET=$$PNAMWRIT(ORROOT,ORDFN)         ; Call that writes to ^TMP.{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}