---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQPT READ RPL 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT READ RPL{:/}
 tag | {::nomarkdown}RPLREAD{:/}
 routine | [ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Passes global reference and other parameters, and receives a list of patients (up to 44 maximum) with IENs, for use in scrolling a Long List Box (LLB) componenet.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | RPLREAD^[ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html)
 Method comment | Read disk-based patient array from TMP.
 First comment | {::nomarkdown}Variables used:<br/>ORCNT   = Counter variable.<br/>ORDIR   = Direction to move through list.<br/>ORFROM  = Starting point from which to move through list.<br/>ORI     = Counter variable.<br/>ORIEN   = Record IEN holder.<br/>ORJ     = Job number to use in ^TMP global root.<br/>ORROOT  = ^TMP global file root.<br/>ORZ     = Temporary value holder.<br/>Y       = Returned array.{:/}
 Input parameters | {::nomarkdown}ORJ<br/>ORFROM<br/>ORDIR{:/}
 Code | ```  N ORCNT,ORI,ORIEN,ORROOT,ORZ
 I $P(ORFROM,U,2)'="" S ORFROM=$P(ORFROM,U,2)
 S ORROOT="^TMP("_"""ORRPL"""_","_ORJ      ; Initial setting.
 S ORROOT=ORROOT_","_"""B"""               ; Add final text.
 I '$D(@(ORROOT_")")) S Y(0)="No data available." Q
 S ORROOT=ORROOT_","                       ; Add comma.
 S ORCNT=44                                ; Initialize to maximum.
 S ORI=0                                   ; Initialize.
 F  S ORFROM=$O(@(ORROOT_""""_ORFROM_""""_")"),ORDIR) Q:ORFROM=""  D  Q:ORI=ORCNT
 .;
 .; Sub-loop for entries up to ORCNT maximum:
 .S ORIEN=0                                ; Initialize.
 .F  S ORIEN=$O(@(ORROOT_""""_ORFROM_""""_","_ORIEN_")")) Q:'ORIEN  D  Q:ORI=ORCNT
 ..S ORI=ORI+1                             ; Increment counter.
 ..;
 ..; Assign return array:
 ..S Y(ORI)=@(ORROOT_""""_ORFROM_""""_","_ORIEN_")")```




 Generated on January 14th 2017, 7:26:35 am