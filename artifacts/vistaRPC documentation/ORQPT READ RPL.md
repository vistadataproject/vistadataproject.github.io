---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT READ RPL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT READ RPL{:/}
 tag | {::nomarkdown}RPLREAD{:/}
 routine | [ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Passes global reference and other parameters, and receives a list of patients (up to 44 maximum) with IENs, for use in scrolling a Long List Box (LLB) componenet.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Read disk-based patient array from TMP.
 Input Parameters | {::nomarkdown}ORJ<br/>ORFROM<br/>ORDIR{:/}
 Lines | ```{::nomarkdown} N ORCNT,ORI,ORIEN,ORROOT,ORZ<br/> I $P(ORFROM,U,2)'="" S ORFROM=$P(ORFROM,U,2)<br/> S ORROOT="^TMP("_"""ORRPL"""_","_ORJ      ; Initial setting.<br/> S ORROOT=ORROOT_","_"""B"""               ; Add final text.<br/> I '$D(@(ORROOT_")")) S Y(0)="No data available." Q<br/> S ORROOT=ORROOT_","                       ; Add comma.<br/> S ORCNT=44                                ; Initialize to maximum.<br/> S ORI=0                                   ; Initialize.<br/> F  S ORFROM=$O(@(ORROOT_""""_ORFROM_""""_")"),ORDIR) Q:ORFROM=""  D  Q:ORI=ORCNT<br/> .;<br/> .; Sub-loop for entries up to ORCNT maximum:<br/> .S ORIEN=0                                ; Initialize.<br/> .F  S ORIEN=$O(@(ORROOT_""""_ORFROM_""""_","_ORIEN_")")) Q:'ORIEN  D  Q:ORI=ORCNT<br/> ..S ORI=ORI+1                             ; Increment counter.<br/> ..;<br/> ..; Assign return array:<br/> ..S Y(ORI)=@(ORROOT_""""_ORFROM_""""_","_ORIEN_")")```{:/}
 Leading comment lines | {::nomarkdown}Variables used:<br/>ORCNT   = Counter variable.<br/>ORDIR   = Direction to move through list.<br/>ORFROM  = Starting point from which to move through list.<br/>ORI     = Counter variable.<br/>ORIEN   = Record IEN holder.<br/>ORJ     = Job number to use in ^TMP global root.<br/>ORROOT  = ^TMP global file root.<br/>ORZ     = Temporary value holder.<br/>Y       = Returned array.{:/}




 Generated on January 13th 2017, 7:11:27 am